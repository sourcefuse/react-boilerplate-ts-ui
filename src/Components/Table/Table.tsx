import {
  ColumnDef,
  ColumnFiltersState,
  FilterFn,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
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
  TableHead,
  TableRow,
  TableSortLabel,
} from '@mui/material';
import {memo, useMemo, useState} from 'react';
import {filterFns} from './FilterFunctions';
import {DebouncedInput} from './DebounceInput';

export interface TableProps<T extends Record<string, any>> {
  data: T[];
  columns: ColumnDef<T>[];
  enableSorting?: boolean;
  enableGlobalFiltering?: boolean;
  globalFilterFn?: FilterFn<T>;
  enableColumnFiltering?: boolean;
}

const ARCTable = <T extends Record<string, any>>({
  data,
  columns,
  enableSorting,
  enableGlobalFiltering,
  globalFilterFn = filterFns.fuzzy,
  enableColumnFiltering,
}: TableProps<T>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const tableData = useMemo(() => data, [data]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const {getHeaderGroups, getRowModel} = useReactTable({
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
  });

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
      </MuiTable>
    </TableContainer>
  );
};

// React.memo produced typed error while using generic
// Made a type to fix it
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/37087 refer this issue
type TableType = <T extends Record<string, any>>(props: TableProps<T>) => JSX.Element;

export const Table = memo(ARCTable) as TableType;
