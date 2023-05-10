import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';
import {Header, Row, flexRender} from '@tanstack/react-table';
import PropTypes from 'prop-types';
import {Draggable, DraggableProvided, DraggableStateSnapshot} from 'react-beautiful-dnd';
import {DebouncedInput} from './DebounceInput';
import {TableRow} from '@mui/material';

interface ColumnProps<T extends Record<string, any>> {
  header: Header<T, unknown>;
  index: number;
  enableSorting?: boolean;
  enableColumnFiltering?: boolean;
}

export const DraggableColumn = <T extends Record<string, any>>({
  header,
  index,
  enableSorting,
  enableColumnFiltering,
}: ColumnProps<T>): JSX.Element => {
  return (
    <Draggable draggableId={header.id} index={index}>
      {(draggableProvided: DraggableProvided, snapshot: DraggableStateSnapshot) => {
        return (
          <TableCell
            key={header.id}
            sx={{fontWeight: 'bold', cursor: snapshot.isDragging ? 'grabbing' : 'pointer'}}
            ref={draggableProvided.innerRef}
            {...draggableProvided.draggableProps}
            {...draggableProvided.dragHandleProps}
            style={{
              ...draggableProvided.draggableProps.style,
              background: snapshot.isDragging ? 'blue' : 'none',
            }}
          >
            {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
            {enableSorting && (
              <TableSortLabel
                active={!!header.column.getIsSorted()}
                onClick={header.column.getToggleSortingHandler()}
                direction={header.column.getIsSorted() && header.column.getIsSorted() === 'asc' ? 'asc' : 'desc'}
              />
            )}
            {enableColumnFiltering && header.column.getCanFilter() ? (
              <DebouncedInput
                id={`${header.column.columnDef.header}-search`}
                value={(() => {
                  const filterValue = header.column.getFilterValue();
                  if (typeof filterValue === 'number') {
                    return filterValue;
                  }
                  return (filterValue ?? '') as string;
                })()}
                onChange={(value) => header.column.setFilterValue(value)}
                placeholder={`Search ${header.column.columnDef.header}`}
                variant="standard"
                sx={{width: '150px', height: '32px', marginTop: '5px'}}
              />
            ) : null}
          </TableCell>
        );
      }}
    </Draggable>
  );
};

DraggableColumn.propTypes = {
  header: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  enableSorting: PropTypes.bool,
  enableColumnFiltering: PropTypes.bool,
};

type TableRowProps<T extends Record<string, any>> = {
  row: Row<T>;
  index: number;
};

export const DraggableTableRow = <T extends Record<string, any>>({row, index}: TableRowProps<T>) => {
  return (
    <Draggable draggableId={row.id} index={index}>
      {(draggableProvided: DraggableProvided, snapshot: DraggableStateSnapshot) => {
        return (
          <TableRow
            key={row.id}
            ref={draggableProvided.innerRef}
            {...draggableProvided.draggableProps}
            {...draggableProvided.dragHandleProps}
            style={{
              ...draggableProvided.draggableProps.style,
              background: snapshot.isDragging ? 'rgba(245,245,245, 0.75)' : 'none',
            }}
            sx={{'&:last-child td, &:last-child th': {border: 0}, cursor: snapshot.isDragging ? 'grabbing' : 'pointer'}}
          >
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
            ))}
          </TableRow>
        );
      }}
    </Draggable>
  );
};

export const DefaultColumn = <T extends Record<string, any>>({
  header,
  index,
  enableSorting,
  enableColumnFiltering,
}: ColumnProps<T>): JSX.Element => {
  return (
    <TableCell key={header.id} sx={{fontWeight: 'bold'}}>
      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
      {enableSorting && (
        <TableSortLabel
          active={!!header.column.getIsSorted()}
          onClick={header.column.getToggleSortingHandler()}
          direction={header.column.getIsSorted() && header.column.getIsSorted() === 'asc' ? 'asc' : 'desc'}
        />
      )}
      {enableColumnFiltering && header.column.getCanFilter() ? (
        <DebouncedInput
          id={`${header.column.columnDef.header}-search`}
          value={(() => {
            const filterValue = header.column.getFilterValue();
            if (typeof filterValue === 'number') {
              return filterValue;
            }
            return (filterValue ?? '') as string;
          })()}
          onChange={(value) => header.column.setFilterValue(value)}
          placeholder={`Search ${header.column.columnDef.header}`}
          variant="standard"
          sx={{width: '150px', height: '32px', marginTop: '5px'}}
        />
      ) : null}
    </TableCell>
  );
};

export const DefaultRow = <T extends Record<string, any>>({row, index}: TableRowProps<T>) => {
  return (
    <TableRow key={row.id} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
      {row.getVisibleCells().map((cell) => (
        <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
      ))}
    </TableRow>
  );
};
