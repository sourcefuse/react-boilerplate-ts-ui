import {
  Table as MuiTable,
  TableProps as MuiTableProps,
  Paper,
  TableBody,
  TableBodyProps,
  TableCellProps,
  TableContainer,
  TableContainerProps,
  TableFooter,
  TableFooterProps,
  TableHead,
  TableHeadProps,
  TablePaginationProps,
  TableRow,
  TableRowProps,
} from '@mui/material';
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
import {memo, useMemo, useState} from 'react';
import {filterFns} from './FilterFunctions';
import {DefaultColumn, DefaultRow, DefaultTablePagination, GlobalFilter} from './helper';

export interface AnyObject {
  [key: string]: any; // NOSONAR
}

export type MUITablePropsObject = {
  tableContainerProps?: TableContainerProps;
  tableProps?: MuiTableProps;
  tableHeadProps?: TableHeadProps;
  headerRowProps?: TableRowProps;
  tableBodyProps?: TableBodyProps;
  tableFooterProps?: TableFooterProps;
  tablePaginationProps?: TablePaginationProps;
  bodyRowProps?: TableRowProps;
  bodyCellProps?: TableCellProps;
  columnCellProps?: TableCellProps;
};

export interface TableProps<T extends AnyObject> {
  data: T[];
  columns: ColumnDef<T>[];
  enableSorting?: boolean;
  enableGlobalFiltering?: boolean;
  globalFilterFn?: FilterFn<T>;
  enableColumnFiltering?: boolean;
  enablePagination?: boolean;
  rowsPerPageOptions?: Array<number | {label: string; value: number}>;
  tablePropsObject?: MUITablePropsObject;
}
const DEFAULT_ROWS_PER_PAGE = 5;
const ROWS_PER_PAGE_OPTION_1 = 10;
const ROWS_PER_PAGE_OPTION_2 = 25;
const ARCTable = <T extends AnyObject>({
  data,
  columns,
  enableSorting,
  enableGlobalFiltering,
  globalFilterFn = filterFns.fuzzy,
  enableColumnFiltering,
  enablePagination,
  rowsPerPageOptions = [
    DEFAULT_ROWS_PER_PAGE,
    ROWS_PER_PAGE_OPTION_1,
    ROWS_PER_PAGE_OPTION_2,
    {label: 'All', value: data.length},
  ],
  tablePropsObject,
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
    <TableContainer component={Paper} {...tablePropsObject?.tableContainerProps}>
      {enableGlobalFiltering && <GlobalFilter globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} />}
      <MuiTable {...tablePropsObject?.tableProps}>
        <TableHead {...tablePropsObject?.tableHeadProps}>
          {getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id} {...tablePropsObject?.headerRowProps}>
              {headerGroup.headers.map((header, index) => (
                <DefaultColumn
                  key={header.id}
                  header={header}
                  index={index}
                  enableColumnFiltering={enableColumnFiltering}
                  enableSorting={enableSorting}
                  columnCellProps={tablePropsObject?.columnCellProps}
                />
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...tablePropsObject?.tableBodyProps}>
          {getRowModel().rows.map((row, index) => (
            <DefaultRow
              key={row.id}
              row={row}
              index={index}
              bodyRowProps={tablePropsObject?.bodyRowProps}
              bodyCellProps={tablePropsObject?.bodyCellProps}
            />
          ))}
        </TableBody>
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
                const DEFAULT_PAGE_SIZE = 10;
                const size = e.target.value ? Number(e.target.value) : DEFAULT_PAGE_SIZE;
                table.setPageSize(size);
              }}
              tablePaginationProps={tablePropsObject?.tablePaginationProps}
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
type TableType = <T extends AnyObject>(props: TableProps<T>) => JSX.Element;

export const Table = memo(ARCTable) as TableType;
