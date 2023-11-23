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
import {AnyObject, TableProps} from './Table';
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
} from '@mui/material';
import {DebouncedInput} from './DebounceInput';
import {StrictModeDroppable} from './StrictModeDroppable';
import {DefaultColumn, DefaultRow, DefaultTablePagination, DraggableColumn, DraggableTableRow} from './helper';

export interface DndTableProps<T extends AnyObject> extends TableProps<T> {
  enableRowDnd?: boolean;
  enableColumnDnd?: boolean;
}

const AdvancedTable = <T extends AnyObject>({
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
  tablePropsObject,
}: DndTableProps<T>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const tableData = useMemo(() => data, [data]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rows, setRows] = useState(tableData);
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>(columns.map(column => column.id as string));

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
    <TableContainer component={Paper} {...tablePropsObject?.tableContainerProps}>
      {enableGlobalFiltering && (
        <Box display="flex" justifyContent="flex-end">
          <DebouncedInput
            id="global-search"
            value={globalFilter ?? ''}
            onChange={value => setGlobalFilter(String(value))}
            variant="outlined"
          />
        </Box>
      )}
      <MuiTable {...tablePropsObject?.tableProps}>
        <DragDropContext onDragEnd={handleDragEnd}>
          <StrictModeDroppable droppableId="columns" type="columns" direction="horizontal">
            {(droppableProvided: DroppableProvided) => (
              <TableHead
                ref={droppableProvided.innerRef}
                {...droppableProvided.droppableProps}
                {...tablePropsObject?.tableHeadProps}
              >
                {getHeaderGroups().map(headerGroup => (
                  <TableRow key={headerGroup.id} {...tablePropsObject?.headerRowProps}>
                    {headerGroup.headers.map((header, index) => {
                      return enableColumnDnd ? (
                        <DraggableColumn
                          key={header.id}
                          header={header}
                          index={index}
                          enableSorting={enableSorting}
                          enableColumnFiltering={enableColumnFiltering}
                          columnCellProps={tablePropsObject?.columnCellProps}
                        />
                      ) : (
                        <DefaultColumn
                          key={header.id}
                          header={header}
                          index={index}
                          enableSorting={enableSorting}
                          enableColumnFiltering={enableColumnFiltering}
                          columnCellProps={tablePropsObject?.columnCellProps}
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
              <TableBody
                ref={droppableProvided.innerRef}
                {...droppableProvided.droppableProps}
                {...tablePropsObject?.tableBodyProps}
              >
                {getRowModel().rows.map((row, index) => {
                  return enableRowDnd ? (
                    <DraggableTableRow key={row.id} row={row} index={index} />
                  ) : (
                    <DefaultRow
                      key={row.id}
                      row={row}
                      index={index}
                      bodyRowProps={tablePropsObject?.bodyRowProps}
                      bodyCellProps={tablePropsObject?.bodyCellProps}
                    />
                  );
                })}
                {droppableProvided.placeholder}
              </TableBody>
            )}
          </StrictModeDroppable>
          {enablePagination && (
            <TableFooter {...tablePropsObject?.tableFooterProps}>
              <DefaultTablePagination
                rowsPerPageOptions={rowsPerPageOptions}
                count={table.getFilteredRowModel().rows.length}
                pageSize={pageSize}
                pageIndex={pageIndex}
                onPageChange={(_, page) => {
                  table.setPageIndex(page);
                }}
                onRowsPerPageChange={e => {
                  const size = e.target.value ? Number(e.target.value) : 10;
                  table.setPageSize(size);
                }}
                tablePaginationProps={tablePropsObject?.tablePaginationProps}
              />
            </TableFooter>
          )}
        </DragDropContext>
      </MuiTable>
    </TableContainer>
  );
};

type DndTableType = <T extends AnyObject>(props: DndTableProps<T>) => JSX.Element;

export const DndTable = memo(AdvancedTable) as DndTableType;
