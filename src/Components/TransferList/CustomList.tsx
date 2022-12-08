import SearchIcon from '@mui/icons-material/Search';
import {ListItemButton} from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Input from 'Components/Input/Input';
import React, {useEffect, useState} from 'react';
import {Draggable} from 'react-beautiful-dnd';

interface Props {
  items: Array<{label: string; value: string}>;
  checked: Array<{label: string; value: string}>;
  title: string;
  handleToggle: any;
  columnRef: any;
  provided: any;
  height: number;
}

const CustomList: React.FC<Props> = ({items, title, handleToggle, checked, columnRef, provided, height}) => {
  const [list, setList] = useState<{label: string; value: string}[]>([]);

  useEffect(() => {
    setList([...items]);
  }, [items]);

  const onChange = (val: string) => {
    const regex = new RegExp(val, 'gi');
    setList(items.filter(({label}) => label.toString().match(regex)));
  };

  return (
    <>
      <Typography>{title}</Typography>
      <Box component="div">
        <Input
          id={`search-${title}`}
          onChange={onChange}
          placeholder={'search'}
          startAdornment={<SearchIcon />}
          returnValue
        />
      </Box>
      <List
        sx={{
          marginTop: '10px',
          border: `1px solid`,
          borderColor: 'border.main',
          borderRadius: '4px',
          height: `${height}px`,
          overflowY: 'scroll',
        }}
        dense
        component="div"
        role="list"
      >
        {items.map((item, index) => {
          if (list.some(({value}) => value === item.value)) {
            const labelId = `transfer-list-item-${item?.value}-${index}-label`;
            return (
              <Draggable draggableId={item?.value} key={`${item?.value}-${index}`} index={index}>
                {(provided) => (
                  <ListItemButton
                    key={item?.value}
                    onClick={handleToggle(item)}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    sx={{backgroundColor: checked.some(({value}) => value === item.value) ? 'secondary.light' : null}}
                  >
                    <ListItemText id={labelId} primary={item?.label} />
                    <ListItemSecondaryAction></ListItemSecondaryAction>
                  </ListItemButton>
                )}
              </Draggable>
            );
          }
          return null;
        })}
        {provided.placeholder}
        <ListItem ref={columnRef} />
      </List>
    </>
  );
};

export default CustomList;
