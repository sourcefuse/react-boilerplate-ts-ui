import {
  ColumnDef,
  ColumnFiltersState,
  FilterFn,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  Box,
  Table as MuiTable,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from '@mui/material';
import {memo, useMemo, useState} from 'react';
import {filterFns} from './FilterFunctions';
import {DebouncedInput} from './DebounceInput';
import TablePaginationActions from './PaginationActions';

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
        <TableHead>
          {getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
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
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {getRowModel().rows.map((row) => (
            <TableRow key={row.id} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
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
      </MuiTable>
    </TableContainer>
  );
};

// React.memo produced typed error while using generic
// Made a type to fix it
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/37087 refer this issue
type TableType = <T extends Record<string, any>>(props: TableProps<T>) => JSX.Element;

export const Table = memo(ARCTable) as TableType;
