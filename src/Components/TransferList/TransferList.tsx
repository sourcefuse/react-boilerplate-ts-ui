import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from 'Components/Button/Button';
import React, {ReactNode, RefObject, useRef, useState} from 'react';
import {DragDropContext, DropResult, Droppable} from 'react-beautiful-dnd';
import CustomList from './CustomList';

type ListDispatchActionType = React.Dispatch<
  React.SetStateAction<
    {
      value: string;
      label: string;
    }[]
  >
>;

export interface TransferListProps {
  left: Array<{label: string; value: string}>;
  setLeft: ListDispatchActionType;
  right: Array<{label: string; value: string}>;
  setRight: ListDispatchActionType;
  height?: number;
}
const DEFAULT_HEIGHT = 200;

function not(arr1: {label: string; value: string}[], arr2: {label: string; value: string}[]) {
  return arr1.filter(item1 => arr2.every(item2 => item2.value !== item1.value));
}

function intersection(arr1: {label: string; value: string}[], arr2: {label: string; value: string}[]) {
  return arr1.filter(item1 => arr2.some(item2 => item2.value === item1.value));
}

const IconButton = ({text, ...rest}: {text: ReactNode; onClick: () => void; disabled: boolean}) => (
  <Button {...rest}>
    <Box component="span" sx={{transform: {md: 'rotate(0deg)', xs: 'rotate(90deg)'}}}>
      {text}
    </Box>
  </Button>
);

const TransferList: React.FC<TransferListProps> = ({
  left = [],
  setLeft,
  right = [],
  setRight,
  height = DEFAULT_HEIGHT,
}) => {
  const leftRef: RefObject<HTMLLIElement> = useRef(null);
  const rightRef: RefObject<HTMLLIElement> = useRef(null);

  const [checked, setChecked] = useState<{label: string; value: string}[]>([]);
  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (item: {label: string; value: string}) => () => {
    const currentIndex = checked.map(({value}) => value).indexOf(item.value);
    const newChecked: Array<{label: string; value: string}> = [...checked];

    if (currentIndex === -1) {
      newChecked.push(item);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
    setChecked([]);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setTimeout(() => {
      rightRef.current?.scrollIntoView({behavior: 'smooth', block: 'end'});
    }, 0);
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setTimeout(() => {
      leftRef.current?.scrollIntoView({behavior: 'smooth', block: 'end'});
    }, 0);
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
    setChecked([]);
  };

  const customList = ({
    items,
    title,
    includeIcon = false,
    droppableId,
    checked,
    columnRef,
  }: {
    items: {label: string; value: string}[];
    title: string;
    includeIcon?: boolean;
    droppableId: string;
    checked: {label: string; value: string}[];
    columnRef: RefObject<HTMLLIElement>;
  }) => {
    return (
      <Grid item sx={{padding: '0px !important'}} xs={12} sm={12} md={5} lg={5} data-testid={droppableId}>
        <Droppable droppableId={droppableId}>
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <CustomList
                title={title}
                items={items}
                handleToggle={handleToggle}
                checked={checked}
                columnRef={columnRef}
                provided={provided}
                height={height}
              />
            </div>
          )}
        </Droppable>
      </Grid>
    );
  };

  const onDragEnd = (dropResult: DropResult) => {
    const {source, destination} = dropResult;
    // Make sure we have a valid destination
    if (destination === undefined || destination === null) return null;

    // Make sure we're actually moving the item
    if (source.droppableId === destination.droppableId && destination.index === source.index) return null;

    // Set start and end variables
    let start;
    let end;

    // If start is the same as end, we're in the same column
    if (source.droppableId === destination.droppableId) {
      start = source.droppableId === 'left' ? [...left] : [...right];

      // Move the item within the list
      // Start by making a new list without the dragged item
      const newList = start.filter((_, idx) => idx !== source.index);

      // Then insert the item at the right location
      newList.splice(destination.index, 0, start[source.index]);

      // Update the state
      if (source.droppableId === 'left') {
        setLeft(newList);
      } else {
        setRight(newList);
      }
      return null;
    }

    if (source.droppableId === 'left' && destination.droppableId === 'right') {
      start = [...left];
      end = [...right];
    } else {
      start = [...right];
      end = [...left];
    }
    // If start is different from end, we need to update multiple columns
    // Filter the start list like before
    const newStartList = start.filter((_, idx) => idx !== source.index);

    // Insert the item into the end list
    end.splice(destination.index, 0, start[source.index]);

    // Update the state
    if (source.droppableId === 'left') {
      setLeft(newStartList);
      setRight(end);
    } else {
      setLeft(end);
      setRight(newStartList);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Grid container justifyContent="space-around" alignItems="end" spacing={3} sx={{margin: 0, width: 1, padding: 1}}>
        {customList({
          items: left,
          title: 'Available Fields',
          droppableId: 'left',
          checked: leftChecked,
          columnRef: leftRef,
        })}

        <Grid item sx={{padding: 2}} data-testid="transferListActions">
          <Stack direction={{sm: 'row', md: 'column'}} spacing={{sm: 1, md: 2}}>
            <IconButton
              text={<>&gt;</>}
              onClick={handleCheckedRight}
              disabled={leftChecked.length === 0}
              aria-label="move selected right"
            />
            <IconButton
              text={<>&lt;</>}
              onClick={handleCheckedLeft}
              disabled={rightChecked.length === 0}
              aria-label="move selected left"
            />
            <IconButton
              text={<>&lt;&lt;</>}
              onClick={handleAllLeft}
              disabled={right.length === 0}
              aria-label="move all left"
            />
            <IconButton
              text={<>&gt;&gt;</>}
              onClick={handleAllRight}
              disabled={left.length === 0}
              aria-label="move all right"
            />
          </Stack>
        </Grid>

        {customList({
          items: right,
          title: 'Selected Fields',
          includeIcon: true,
          droppableId: 'right',
          checked: rightChecked,
          columnRef: rightRef,
        })}
      </Grid>
    </DragDropContext>
  );
};

export default TransferList;
