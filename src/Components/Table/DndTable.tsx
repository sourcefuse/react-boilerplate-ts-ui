import {memo, useMemo, useState} from 'react';
import {
  ColumnFiltersState,
  ColumnOrderState,
  SortingState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {filterFns} from './FilterFunctions';
import {TableProps} from './Table';
import {DragDropContext, DropResult, DroppableProvided} from 'react-beautiful-dnd';
import {
  Box,
  Paper,
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableRow,
  TableBody,
  TableFooter,
  TablePagination,
} from '@mui/material';
import {DebouncedInput} from './DebounceInput';
import {StrictModeDroppable} from './StrictModeDroppable';
import {DefaultColumn, DefaultRow, DraggableColumn, DraggableTableRow} from './helper';
import TablePaginationActions from './PaginationActions';

export interface DndTableProps<T extends Record<string, any>> extends TableProps<T> {
  enableRowDnd?: boolean;
  enableColumnDnd?: boolean;
}

const AdvancedTable = <T extends Record<string, any>>({
  data,
  columns,
  enableSorting,
  enableGlobalFiltering,
  globalFilterFn = filterFns.fuzzy,
  enableColumnFiltering,
  enablePagination,
  rowsPerPageOptions = [5, 10, 25, {label: 'All', value: data.length}],
  enableColumnDnd,
  enableRowDnd = true,
}: DndTableProps<T>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const tableData = useMemo(() => data, [data]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rows, setRows] = useState(tableData);
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>(columns.map((column) => column.id as string));

  const table = useReactTable({
    data: rows,
    columns,
    state: {
      sorting,
      globalFilter,
      columnFilters,
      columnOrder,
    },
    globalFilterFn,
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
    onColumnOrderChange: setColumnOrder,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const {getHeaderGroups, getRowModel} = table;
  const {pageSize, pageIndex} = table.getState().pagination;

  const reorderColumn = (
    draggedColumnIdx: number,
    targetColumnIdx: number,
    columnOrder: string[],
  ): ColumnOrderState => {
    columnOrder.splice(targetColumnIdx, 0, columnOrder.splice(draggedColumnIdx, 1)[0] as string);
    return [...columnOrder];
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }

    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;

    if (result.type === 'row') {
      const newData = [...rows];
      const draggedRow = newData.splice(sourceIndex, 1)[0];
      newData.splice(destinationIndex, 0, draggedRow);
      setRows(newData);
    }
    if (result.type === 'columns') {
      const newColumnOrder = reorderColumn(result.source.index, result.destination.index, table.getState().columnOrder);
      setColumnOrder(newColumnOrder);
    }
  };

  return (
    <TableContainer component={Paper}>
      {enableGlobalFiltering && (
        <Box display="flex" justifyContent="flex-end">
          <DebouncedInput
            id="global-search"
            value={globalFilter ?? ''}
            onChange={(value) => setGlobalFilter(String(value))}
            variant="outlined"
          />
        </Box>
      )}
      <MuiTable>
        <DragDropContext onDragEnd={handleDragEnd}>
          <StrictModeDroppable droppableId="columns" type="columns" direction="horizontal">
            {(droppableProvided: DroppableProvided) => (
              <TableHead ref={droppableProvided.innerRef} {...droppableProvided.droppableProps}>
                {getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header, index) => {
                      return enableColumnDnd ? (
                        <DraggableColumn
                          key={header.id}
                          header={header}
                          index={index}
                          enableSorting={enableSorting}
                          enableColumnFiltering={enableColumnFiltering}
                        />
                      ) : (
                        <DefaultColumn
                          key={header.id}
                          header={header}
                          index={index}
                          enableSorting={enableSorting}
                          enableColumnFiltering={enableColumnFiltering}
                        />
                      );
                    })}
                    {droppableProvided.placeholder}
                  </TableRow>
                ))}
              </TableHead>
            )}
          </StrictModeDroppable>
          <StrictModeDroppable droppableId="row" direction="vertical" type="row">
            {(droppableProvided: DroppableProvided) => (
              <TableBody ref={droppableProvided.innerRef} {...droppableProvided.droppableProps}>
                {getRowModel().rows.map((row, index) => {
                  return enableRowDnd ? (
                    <DraggableTableRow key={row.id} row={row} index={index} />
                  ) : (
                    <DefaultRow key={row.id} row={row} index={index} />
                  );
                })}
                {droppableProvided.placeholder}
              </TableBody>
            )}
          </StrictModeDroppable>
          {enablePagination && (
            <TableFooter>
              <TablePagination
                rowsPerPageOptions={rowsPerPageOptions}
                component="div"
                count={table.getFilteredRowModel().rows.length}
                rowsPerPage={pageSize}
                page={pageIndex}
                SelectProps={{
                  inputProps: {'aria-label': 'rows per page'},
                  native: true,
                }}
                onPageChange={(_, page) => {
                  table.setPageIndex(page);
                }}
                onRowsPerPageChange={(e) => {
                  const size = e.target.value ? Number(e.target.value) : 10;
                  table.setPageSize(size);
                }}
                ActionsComponent={TablePaginationActions}
              />
            </TableFooter>
          )}
        </DragDropContext>
      </MuiTable>
    </TableContainer>
  );
};

type DndTableType = <T extends Record<string, any>>(props: DndTableProps<T>) => JSX.Element;

export const DndTable = memo(AdvancedTable) as DndTableType;
