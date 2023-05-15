import {
  ColumnDef,
  ColumnFiltersState,
  FilterFn,
  SortingState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {Table as MuiTable, Paper, TableBody, TableContainer, TableFooter, TableHead, TableRow} from '@mui/material';
import {memo, useMemo, useState} from 'react';
import {filterFns} from './FilterFunctions';
import {DefaultColumn, DefaultRow, DefaultTablePagination, GlobalFilter} from './helper';

export interface TableProps<T extends Record<string, any>> {
  data: T[];
  columns: ColumnDef<T>[];
  enableSorting?: boolean;
  enableGlobalFiltering?: boolean;
  globalFilterFn?: FilterFn<T>;
  enableColumnFiltering?: boolean;
  enablePagination?: boolean;
  rowsPerPageOptions?: Array<number | {label: string; value: number}>;
}

const ARCTable = <T extends Record<string, any>>({
  data,
  columns,
  enableSorting,
  enableGlobalFiltering,
  globalFilterFn = filterFns.fuzzy,
  enableColumnFiltering,
  enablePagination,
  rowsPerPageOptions = [5, 10, 25, {label: 'All', value: data.length}],
}: TableProps<T>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const tableData = useMemo(() => data, [data]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data: tableData,
    columns,
    state: {
      sorting,
      globalFilter,
      columnFilters,
    },
    globalFilterFn,
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const {getHeaderGroups, getRowModel} = table;
  const {pageSize, pageIndex} = table.getState().pagination;

  return (
    <TableContainer component={Paper}>
      {enableGlobalFiltering && <GlobalFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />}
      <MuiTable>
        <TableHead>
          {getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => (
                <DefaultColumn
                  key={header.id}
                  header={header}
                  index={index}
                  enableColumnFiltering={enableColumnFiltering}
                  enableSorting={enableSorting}
                />
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {getRowModel().rows.map((row, index) => (
            <DefaultRow key={row.id} row={row} index={index} />
          ))}
        </TableBody>
        {enablePagination && (
          <TableFooter>
            <DefaultTablePagination
              rowsPerPageOptions={rowsPerPageOptions}
              count={table.getFilteredRowModel().rows.length}
              pageSize={pageSize}
              pageIndex={pageIndex}
              onPageChange={(_, page) => {
                table.setPageIndex(page);
              }}
              onRowsPerPageChange={(e) => {
                const size = e.target.value ? Number(e.target.value) : 10;
                table.setPageSize(size);
              }}
            />
          </TableFooter>
        )}
      </MuiTable>
    </TableContainer>
  );
};

// React.memo produced typed error while using generic
// Made a type to fix it
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/37087 refer this issue
type TableType = <T extends Record<string, any>>(props: TableProps<T>) => JSX.Element;

export const Table = memo(ARCTable) as TableType;
