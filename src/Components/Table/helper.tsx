import {
  Box,
  TablePaginationProps as MuiTablePaginationProps,
  TableRowProps as MuiTableRowProps,
  TablePagination,
  TableRow,
} from '@mui/material';
import TableCell, {TableCellProps} from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';
import {Header, Row, flexRender} from '@tanstack/react-table';
import PropTypes from 'prop-types';
import {Draggable, DraggableProvided, DraggableStateSnapshot} from 'react-beautiful-dnd';
import {DebouncedInput} from './DebounceInput';
import TablePaginationActions from './PaginationActions';
import {AnyObject} from './Table';

interface ColumnProps<T extends AnyObject> {
  header: Header<T, unknown>;
  index: number;
  enableSorting?: boolean;
  enableColumnFiltering?: boolean;
  columnCellProps?: TableCellProps;
}

export const DraggableColumn = <T extends AnyObject>({
  header,
  index,
  enableSorting,
  enableColumnFiltering,
  columnCellProps,
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
              background: snapshot.isDragging ? 'rgba(245,245,245, 0.75)' : 'none',
            }}
            {...columnCellProps}
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
                onChange={value => header.column.setFilterValue(value)}
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

type TableRowProps<T extends AnyObject> = {
  row: Row<T>;
  index: number;
  bodyCellProps?: TableCellProps;
  bodyRowProps?: MuiTableRowProps;
};

export const DraggableTableRow = <T extends AnyObject>({row, index, bodyCellProps, bodyRowProps}: TableRowProps<T>) => {
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
            {...bodyRowProps}
          >
            {row.getVisibleCells().map(cell => (
              <TableCell key={cell.id} {...bodyCellProps}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        );
      }}
    </Draggable>
  );
};

export const DefaultColumn = <T extends AnyObject>({
  header,
  index,
  enableSorting,
  enableColumnFiltering,
  columnCellProps,
}: ColumnProps<T>): JSX.Element => {
  return (
    <TableCell key={header.id} sx={{fontWeight: 'bold'}} {...columnCellProps}>
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
          onChange={value => header.column.setFilterValue(value)}
          placeholder={`Search ${header.column.columnDef.header}`}
          variant="standard"
          sx={{width: '150px', height: '32px', marginTop: '5px'}}
        />
      ) : null}
    </TableCell>
  );
};

export const DefaultRow = <T extends AnyObject>({row, index, bodyCellProps, bodyRowProps}: TableRowProps<T>) => {
  return (
    <TableRow key={row.id} sx={{'&:last-child td, &:last-child th': {border: 0}}} {...bodyRowProps}>
      {row.getVisibleCells().map(cell => (
        <TableCell key={cell.id} {...bodyCellProps}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ))}
    </TableRow>
  );
};

interface GlobalFilterProps {
  globalFilter: string;
  setGlobalFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const GlobalFilter: React.FC<GlobalFilterProps> = ({globalFilter, setGlobalFilter}: GlobalFilterProps) => {
  return (
    <Box display="flex" justifyContent="flex-end">
      <DebouncedInput
        id="global-search"
        value={globalFilter ?? ''}
        onChange={value => setGlobalFilter(String(value))}
        variant="outlined"
      />
    </Box>
  );
};

type TablePaginationProps = {
  rowsPerPageOptions: (number | {label: string; value: number})[];
  count: number;
  pageSize: number;
  pageIndex: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  tablePaginationProps?: MuiTablePaginationProps;
};

export const DefaultTablePagination: React.FC<TablePaginationProps> = ({
  rowsPerPageOptions,
  count,
  pageSize,
  pageIndex,
  onPageChange,
  onRowsPerPageChange,
  tablePaginationProps,
}: TablePaginationProps) => {
  return (
    <TablePagination
      rowsPerPageOptions={rowsPerPageOptions}
      component="div"
      count={count}
      rowsPerPage={pageSize}
      page={pageIndex}
      SelectProps={{
        inputProps: {'aria-label': 'rows per page'},
        native: true,
      }}
      onPageChange={onPageChange}
      onRowsPerPageChange={onRowsPerPageChange}
      ActionsComponent={TablePaginationActions}
      {...tablePaginationProps}
    />
  );
};
