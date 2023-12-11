import {Box, Stack, ThemeProvider, Typography} from '@mui/material';
import ComponentViewer from 'Components/ComponentViewer';
import PagePaper from 'Components/PagePaper';
import PropsTable from 'Components/PropsTable';
import {DndTable, Table} from 'Components/Table';
import customTheme from './CustomTheme';
import {commonComponentViewerCode, DataTable, propsData} from './data';
import {tableColumns} from './utils';
import ScreenAwareTOC from 'Components/ScreenAwareTOC';

const ROWS_TO_DISPLAY = 5;
const TablePage = () => {
  return (
    <Stack direction="row">
      <Box sx={{flexGrow: 1, maxWidth: '99vw'}}>
        <PagePaper
          title="Table"
          description="The table component is a flexible and customizable reusable component that allows you to display data in a structured, tabular format. It supports a variety of features, including column sorting, filtering, and global searching, making it easy for users to find and analyze data. With its simple and intuitive API, you can quickly and easily integrate this table component into your React applications and start displaying your data in a clear and organized way.
          Use <Table> component if you don't need your Table to be Drag and Drop.
          If you want your table to have row or column dnd use <DndTable> Component. The Table components uses '@tanstack/react-table' which is a headless ui for building tables and Mui Tables for ui. For drag and drop features we have used 'react-beautiful-dnd'."
        >
          <ComponentViewer
            title="Default Table"
            code={`import {Table} from 'Components/Table';

${commonComponentViewerCode}

const tableColumns: ColumnDef<DataTableType>[] = [
  {
    header: 'Id',
    accessorKey: '_id',
    enableSorting: false,
  },
  {
    header: 'Name',
    accessorKey: 'name',
  },
  {
    header: 'Active Status',
    accessorFn: (row) => {
      return row.isActive === true ? 'Online' : 'Offline';
    },
  },
  {
    header: 'Age',
    accessorKey: 'age',
  },
  {
    header: 'Gender',
    accessorKey: 'gender',
    cell: (row) => row.renderValue(),
  },
];

<Table columns={tableColumns} data={DataTable} />
`}
          >
            <Table columns={tableColumns} data={DataTable} />
          </ComponentViewer>
          <ComponentViewer
            title="Sorting Table"
            code={`import {Table} from 'Components/Table';

${commonComponentViewerCode}
const tableColumns: ColumnDef<DataTableType>[] = [
  {
    header: 'Id',
    accessorKey: '_id',
    enableSorting: false,
  },
  {
    header: 'Name',
    accessorKey: 'name',
  },
  {
    header: 'Active Status',
    accessorFn: (row) => {
      return row.isActive === true ? 'Online' : 'Offline';
    },
  },
  {
    header: 'Age',
    accessorKey: 'age',
  },
  {
    header: 'Gender',
    accessorKey: 'gender',
    cell: (row) => row.renderValue(),
  },
];

<Table columns={tableColumns} data={DataTable} enableSorting />
`}
          >
            <Table columns={tableColumns} data={DataTable.slice(0, ROWS_TO_DISPLAY)} enableSorting />
          </ComponentViewer>
          <ComponentViewer
            title="Global Filter"
            code={`import {Table} from 'Components/Table';

${commonComponentViewerCode}

const tableColumns: ColumnDef<DataTableType>[] = [
  {
    header: 'Id',
    accessorKey: '_id',
    enableSorting: false,
  },
  {
    header: 'Name',
    accessorKey: 'name',
  },
  {
    header: 'Active Status',
    accessorFn: (row) => {
      return row.isActive === true ? 'Online' : 'Offline';
    },
  },
  {
    header: 'Age',
    accessorKey: 'age',
  },
  {
    header: 'Gender',
    accessorKey: 'gender',
    cell: (row) => row.renderValue(),
  },
];

<Table columns={tableColumns} data={DataTable} enableSorting enableGlobalFiltering />
`}
          >
            <Table
              columns={tableColumns}
              data={DataTable.slice(0, ROWS_TO_DISPLAY)}
              enableSorting
              enableGlobalFiltering
            />
          </ComponentViewer>
          <ComponentViewer
            title="Columns Filtering"
            code={`import {Table} from 'Components/Table';

${commonComponentViewerCode}

const tableColumns: ColumnDef<DataTableType>[] = [
  {
    header: 'Id',
    accessorKey: '_id',
    enableSorting: false,
  },
  {
    header: 'Name',
    accessorKey: 'name',
  },
  {
    header: 'Active Status',
    accessorFn: (row) => {
      return row.isActive === true ? 'Online' : 'Offline';
    },
  },
  {
    header: 'Age',
    accessorKey: 'age',
  },
  {
    header: 'Gender',
    accessorKey: 'gender',
    cell: (row) => row.renderValue(),
  },
];

<Table columns={tableColumns} data={DataTable} enableSorting enableGlobalFiltering enableColumnFiltering />
`}
          >
            <Table
              columns={tableColumns}
              data={DataTable.slice(0, ROWS_TO_DISPLAY)}
              enableSorting
              enableGlobalFiltering
              enableColumnFiltering
            />
          </ComponentViewer>
          <ComponentViewer
            title="Pagination"
            code={`import {Table} from 'Components/Table';

${commonComponentViewerCode}

const tableColumns: ColumnDef<DataTableType>[] = [
  {
    header: 'Id',
    accessorKey: '_id',
    enableSorting: false,
  },
  {
    header: 'Name',
    accessorKey: 'name',
  },
  {
    header: 'Active Status',
    accessorFn: (row) => {
      return row.isActive === true ? 'Online' : 'Offline';
    },
  },
  {
    header: 'Age',
    accessorKey: 'age',
  },
  {
    header: 'Gender',
    accessorKey: 'gender',
    cell: (row) => row.renderValue(),
  },
];

<Table columns={tableColumns} data={DataTable} enablePagination />
`}
          >
            <Table columns={tableColumns} data={DataTable} enablePagination />
          </ComponentViewer>
          <ComponentViewer
            title="Custom Props"
            code={`import {Table} from 'Components/Table';

${commonComponentViewerCode}

const tableColumns: ColumnDef<DataTableType>[] = [
  {
    header: 'Id',
    accessorKey: '_id',
    enableSorting: false,
  },
  {
    header: 'Name',
    accessorKey: 'name',
  },
  {
    header: 'Active Status',
    accessorFn: (row) => {
      return row.isActive === true ? 'Online' : 'Offline';
    },
  },
  {
    header: 'Age',
    accessorKey: 'age',
  },
  {
    header: 'Gender',
    accessorKey: 'gender',
    cell: (row) => row.renderValue(),
  },
];

<Table
  columns={tableColumns}
  data={DataTable}
  enableSorting
  enableColumnFiltering
  enableGlobalFiltering
  enablePagination
  tablePropsObject={{
    bodyCellProps: {
      sx: {backgroundColor: 'whitesmoke'},
    },
    tableContainerProps: {
      sx: {padding: 2},
    },
  }}
/>
`}
          >
            <Table
              columns={tableColumns}
              data={DataTable}
              enableSorting
              enableColumnFiltering
              enableGlobalFiltering
              enablePagination
              tablePropsObject={{
                bodyCellProps: {
                  sx: {backgroundColor: 'whitesmoke'},
                },
                tableContainerProps: {
                  sx: {padding: 2},
                },
              }}
            />
          </ComponentViewer>
          <ComponentViewer
            title="Custom Theme"
            code={`import {Table} from 'Components/Table';
import {createTheme} from '@mui/material/styles';

${commonComponentViewerCode}

const tableColumns: ColumnDef<DataTableType>[] = [
  {
    header: 'Id',
    accessorKey: '_id',
    enableSorting: false,
  },
  {
    header: 'Name',
    accessorKey: 'name',
  },
  {
    header: 'Active Status',
    accessorFn: (row) => {
      return row.isActive === true ? 'Online' : 'Offline';
    },
  },
  {
    header: 'Age',
    accessorKey: 'age',
  },
  {
    header: 'Gender',
    accessorKey: 'gender',
    cell: (row) => row.renderValue(),
  },
];

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const customTheme = createTheme(theme, {
  components: {
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: theme.palette.common.black,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:nth-of-type(even)': {
            backgroundColor: theme.palette.action.hover,
          },
          '&:last-child td, &:last-child th': {
            border: 0,
          },
        },
      },
    },
  },
});

<ThemeProvider theme={customTheme}>
  <Table
    columns={tableColumns}
    data={DataTable}
    enableSorting
    enableColumnFiltering
    enableGlobalFiltering
    enablePagination
  />
</ThemeProvider>
`}
          >
            <ThemeProvider theme={customTheme}>
              <Table
                columns={tableColumns}
                data={DataTable}
                enableSorting
                enableColumnFiltering
                enableGlobalFiltering
                enablePagination
              />
            </ThemeProvider>
          </ComponentViewer>
          <ComponentViewer
            title="RowDnd Table"
            code={`import {DndTable} from 'Components/Table';

${commonComponentViewerCode}

const tableColumns: ColumnDef<DataTableType>[] = [
  {
    header: 'Id',
    accessorKey: '_id',
    id: '_id',
    enableSorting: false,
  },
  {
    header: 'Name',
    accessorKey: 'name',
    id: 'name',
  },
  {
    header: 'Active Status',
    id: 'activeStatus',
    accessorFn: (row) => {
      return row.isActive === true ? 'Online' : 'Offline';
    },
  },
  {
    header: 'Age',
    accessorKey: 'age',
    id: 'age',
  },
  {
    header: 'Gender',
    accessorKey: 'gender',
    id: 'gender',
    cell: (row) => row.renderValue(),
  },
];

<DndTable columns={tableColumns} data={DataTable} enableRowDnd />
`}
          >
            <DndTable columns={tableColumns} data={DataTable.slice(0, ROWS_TO_DISPLAY)} enableRowDnd />
          </ComponentViewer>
          <ComponentViewer
            title="ColumnDnd Table"
            code={`import {DndTable} from 'Components/Table';

${commonComponentViewerCode}

const tableColumns: ColumnDef<DataTableType>[] = [
  {
    header: 'Id',
    accessorKey: '_id',
    id: '_id',
    enableSorting: false,
  },
  {
    header: 'Name',
    accessorKey: 'name',
    id: 'name',
  },
  {
    header: 'Active Status',
    id: 'activeStatus',
    accessorFn: (row) => {
      return row.isActive === true ? 'Online' : 'Offline';
    },
  },
  {
    header: 'Age',
    accessorKey: 'age',
    id: 'age',
  },
  {
    header: 'Gender',
    accessorKey: 'gender',
    id: 'gender',
    cell: (row) => row.renderValue(),
  },
];

<DndTable columns={tableColumns} data={DataTable} enableColumnDnd enableRowDnd={false} />
`}
          >
            <DndTable
              columns={tableColumns}
              data={DataTable.slice(0, ROWS_TO_DISPLAY)}
              enableColumnDnd
              enableRowDnd={false}
            />
          </ComponentViewer>
          <ComponentViewer
            title="Advanced Table"
            code={`import {DndTable} from 'Components/Table';

${commonComponentViewerCode}

const tableColumns: ColumnDef<DataTableType>[] = [
  {
    header: 'Id',
    accessorKey: '_id',
    id: '_id',
    enableSorting: false,
  },
  {
    header: 'Name',
    accessorKey: 'name',
    id: 'name',
  },
  {
    header: 'Active Status',
    id: 'activeStatus',
    accessorFn: (row) => {
      return row.isActive === true ? 'Online' : 'Offline';
    },
  },
  {
    header: 'Age',
    accessorKey: 'age',
    id: 'age',
  },
  {
    header: 'Gender',
    accessorKey: 'gender',
    id: 'gender',
    cell: (row) => row.renderValue(),
  },
];

<Table columns={tableColumns} data={DataTable} enablePagination enableColumnDnd enableColumnFiltering enableGlobalFiltering enableSorting />
`}
          >
            <DndTable
              columns={tableColumns}
              data={DataTable.slice(0, ROWS_TO_DISPLAY)}
              enableColumnDnd
              enableColumnFiltering
              enableGlobalFiltering
              enablePagination
              enableSorting
              enableRowDnd
            />
          </ComponentViewer>
          <Typography
            id="props"
            className="headings"
            variant="subtitle2"
            sx={{fontWeight: 'bold', mt: 2, scrollMarginTop: '200px'}}
          >
            Props
          </Typography>
          <PropsTable data={propsData} />
        </PagePaper>
      </Box>
      <ScreenAwareTOC />
    </Stack>
  );
};

export default TablePage;
