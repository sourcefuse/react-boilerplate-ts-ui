import {Box, Stack, ThemeProvider, Typography} from '@mui/material';
import ComponentViewer from 'Components/ComponentViewer';
import PagePaper from 'Components/PagePaper';
import PropsTable from 'Components/PropsTable';
import {DndTable, Table} from 'Components/Table';
import TableOfContent from 'Components/TableOfContent/TableOfContent';
import customTheme from './CustomTheme';
import {DataTable} from './data';
import {tableColumns} from './utils';

const ROWS_TO_DISPLAY = 5;
const TablePage = () => {
  return (
    <Stack direction="row">
      <Box sx={{flexGrow: 1}}>
        <PagePaper
          title="Table"
          description="The table component is a flexible and customizable reusable component that allows you to display data in a structured, tabular format. It supports a variety of features, including column sorting, filtering, and global searching, making it easy for users to find and analyze data. With its simple and intuitive API, you can quickly and easily integrate this table component into your React applications and start displaying your data in a clear and organized way. 
          Use <Table> component if you don't need your Table to be Drag and Drop. 
          If you want your table to have row or column dnd use <DndTable> Component. The Table components uses '@tanstack/react-table' which is a headless ui for building tables and Mui Tables for ui. For drag and drop features we have used 'react-beautiful-dnd'."
        >
          <ComponentViewer
            title="Default Table"
            code={`import {Table} from 'Components/Table';

type DataTableType = {
  _id: string;
  isActive: boolean;
  picture?: string;
  age: number;
  name: string;
  gender: string;
  email: string;
  phone: string;
};

const DataTable = [
  {
    _id: '644f76e1c8f95a550729db88',
    isActive: true,
    balance: '$2,166.05',
    picture: 'http://placehold.it/32x32',
    age: 38,
    name: 'Tabatha Warner',
    gender: 'female',
    email: 'tabathawarner@frosnex.com',
    phone: '+1 (958) 426-2797',
  },
  {
    _id: '644f76e123eb64cff53a3e0e',
    isActive: true,
    balance: '$1,955.12',
    picture: 'http://placehold.it/32x32',
    age: 27,
    name: 'Santana Mcgowan',
    gender: 'male',
    email: 'santanamcgowan@bezal.com',
    phone: '+1 (810) 482-2801',
  },
  {
    _id: '644f76e18aab42f76ea75178',
    isActive: false,
    balance: '$3,326.96',
    picture: 'http://placehold.it/32x32',
    age: 22,
    name: 'Travis Nguyen',
    gender: 'male',
    email: 'travisnguyen@plasmosis.com',
    phone: '+1 (937) 435-2785',
  },
  {
    _id: '644f76e145923784c648f6df',
    isActive: true,
    balance: '$1,392.08',
    picture: 'http://placehold.it/32x32',
    age: 39,
    name: 'Muriel Barlow',
    gender: 'female',
    email: 'murielbarlow@autograte.com',
    phone: '+1 (853) 571-2037',
  },
  {
    _id: '644f76e16311fb7abee4aead',
    isActive: false,
    balance: '$1,253.31',
    picture: 'http://placehold.it/32x32',
    age: 32,
    name: 'Liliana Wilson',
    gender: 'female',
    email: 'lilianawilson@snowpoke.com',
    phone: '+1 (926) 573-2808',
  },
];

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

type DataTableType = {
  _id: string;
  isActive: boolean;
  picture?: string;
  age: number;
  name: string;
  gender: string;
  email: string;
  phone: string;
};

const DataTable = [
  {
    _id: '644f76e1c8f95a550729db88',
    isActive: true,
    balance: '$2,166.05',
    picture: 'http://placehold.it/32x32',
    age: 38,
    name: 'Tabatha Warner',
    gender: 'female',
    email: 'tabathawarner@frosnex.com',
    phone: '+1 (958) 426-2797',
  },
  {
    _id: '644f76e123eb64cff53a3e0e',
    isActive: true,
    balance: '$1,955.12',
    picture: 'http://placehold.it/32x32',
    age: 27,
    name: 'Santana Mcgowan',
    gender: 'male',
    email: 'santanamcgowan@bezal.com',
    phone: '+1 (810) 482-2801',
  },
  {
    _id: '644f76e18aab42f76ea75178',
    isActive: false,
    balance: '$3,326.96',
    picture: 'http://placehold.it/32x32',
    age: 22,
    name: 'Travis Nguyen',
    gender: 'male',
    email: 'travisnguyen@plasmosis.com',
    phone: '+1 (937) 435-2785',
  },
  {
    _id: '644f76e145923784c648f6df',
    isActive: true,
    balance: '$1,392.08',
    picture: 'http://placehold.it/32x32',
    age: 39,
    name: 'Muriel Barlow',
    gender: 'female',
    email: 'murielbarlow@autograte.com',
    phone: '+1 (853) 571-2037',
  },
  {
    _id: '644f76e16311fb7abee4aead',
    isActive: false,
    balance: '$1,253.31',
    picture: 'http://placehold.it/32x32',
    age: 32,
    name: 'Liliana Wilson',
    gender: 'female',
    email: 'lilianawilson@snowpoke.com',
    phone: '+1 (926) 573-2808',
  },
];

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

type DataTableType = {
  _id: string;
  isActive: boolean;
  picture?: string;
  age: number;
  name: string;
  gender: string;
  email: string;
  phone: string;
};

const DataTable = [
  {
    _id: '644f76e1c8f95a550729db88',
    isActive: true,
    balance: '$2,166.05',
    picture: 'http://placehold.it/32x32',
    age: 38,
    name: 'Tabatha Warner',
    gender: 'female',
    email: 'tabathawarner@frosnex.com',
    phone: '+1 (958) 426-2797',
  },
  {
    _id: '644f76e123eb64cff53a3e0e',
    isActive: true,
    balance: '$1,955.12',
    picture: 'http://placehold.it/32x32',
    age: 27,
    name: 'Santana Mcgowan',
    gender: 'male',
    email: 'santanamcgowan@bezal.com',
    phone: '+1 (810) 482-2801',
  },
  {
    _id: '644f76e18aab42f76ea75178',
    isActive: false,
    balance: '$3,326.96',
    picture: 'http://placehold.it/32x32',
    age: 22,
    name: 'Travis Nguyen',
    gender: 'male',
    email: 'travisnguyen@plasmosis.com',
    phone: '+1 (937) 435-2785',
  },
  {
    _id: '644f76e145923784c648f6df',
    isActive: true,
    balance: '$1,392.08',
    picture: 'http://placehold.it/32x32',
    age: 39,
    name: 'Muriel Barlow',
    gender: 'female',
    email: 'murielbarlow@autograte.com',
    phone: '+1 (853) 571-2037',
  },
  {
    _id: '644f76e16311fb7abee4aead',
    isActive: false,
    balance: '$1,253.31',
    picture: 'http://placehold.it/32x32',
    age: 32,
    name: 'Liliana Wilson',
    gender: 'female',
    email: 'lilianawilson@snowpoke.com',
    phone: '+1 (926) 573-2808',
  },
];

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

type DataTableType = {
  _id: string;
  isActive: boolean;
  picture?: string;
  age: number;
  name: string;
  gender: string;
  email: string;
  phone: string;
};

const DataTable = [
  {
    _id: '644f76e1c8f95a550729db88',
    isActive: true,
    balance: '$2,166.05',
    picture: 'http://placehold.it/32x32',
    age: 38,
    name: 'Tabatha Warner',
    gender: 'female',
    email: 'tabathawarner@frosnex.com',
    phone: '+1 (958) 426-2797',
  },
  {
    _id: '644f76e123eb64cff53a3e0e',
    isActive: true,
    balance: '$1,955.12',
    picture: 'http://placehold.it/32x32',
    age: 27,
    name: 'Santana Mcgowan',
    gender: 'male',
    email: 'santanamcgowan@bezal.com',
    phone: '+1 (810) 482-2801',
  },
  {
    _id: '644f76e18aab42f76ea75178',
    isActive: false,
    balance: '$3,326.96',
    picture: 'http://placehold.it/32x32',
    age: 22,
    name: 'Travis Nguyen',
    gender: 'male',
    email: 'travisnguyen@plasmosis.com',
    phone: '+1 (937) 435-2785',
  },
  {
    _id: '644f76e145923784c648f6df',
    isActive: true,
    balance: '$1,392.08',
    picture: 'http://placehold.it/32x32',
    age: 39,
    name: 'Muriel Barlow',
    gender: 'female',
    email: 'murielbarlow@autograte.com',
    phone: '+1 (853) 571-2037',
  },
  {
    _id: '644f76e16311fb7abee4aead',
    isActive: false,
    balance: '$1,253.31',
    picture: 'http://placehold.it/32x32',
    age: 32,
    name: 'Liliana Wilson',
    gender: 'female',
    email: 'lilianawilson@snowpoke.com',
    phone: '+1 (926) 573-2808',
  },
];

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

type DataTableType = {
  _id: string;
  isActive: boolean;
  picture?: string;
  age: number;
  name: string;
  gender: string;
  email: string;
  phone: string;
};

const DataTable = [
  {
    _id: '644f76e1c8f95a550729db88',
    isActive: true,
    balance: '$2,166.05',
    picture: 'http://placehold.it/32x32',
    age: 38,
    name: 'Tabatha Warner',
    gender: 'female',
    email: 'tabathawarner@frosnex.com',
    phone: '+1 (958) 426-2797',
  },
  {
    _id: '644f76e123eb64cff53a3e0e',
    isActive: true,
    balance: '$1,955.12',
    picture: 'http://placehold.it/32x32',
    age: 27,
    name: 'Santana Mcgowan',
    gender: 'male',
    email: 'santanamcgowan@bezal.com',
    phone: '+1 (810) 482-2801',
  },
  {
    _id: '644f76e18aab42f76ea75178',
    isActive: false,
    balance: '$3,326.96',
    picture: 'http://placehold.it/32x32',
    age: 22,
    name: 'Travis Nguyen',
    gender: 'male',
    email: 'travisnguyen@plasmosis.com',
    phone: '+1 (937) 435-2785',
  },
  {
    _id: '644f76e145923784c648f6df',
    isActive: true,
    balance: '$1,392.08',
    picture: 'http://placehold.it/32x32',
    age: 39,
    name: 'Muriel Barlow',
    gender: 'female',
    email: 'murielbarlow@autograte.com',
    phone: '+1 (853) 571-2037',
  },
  {
    _id: '644f76e16311fb7abee4aead',
    isActive: false,
    balance: '$1,253.31',
    picture: 'http://placehold.it/32x32',
    age: 32,
    name: 'Liliana Wilson',
    gender: 'female',
    email: 'lilianawilson@snowpoke.com',
    phone: '+1 (926) 573-2808',
  },
];

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

type DataTableType = {
  _id: string;
  isActive: boolean;
  picture?: string;
  age: number;
  name: string;
  gender: string;
  email: string;
  phone: string;
};

const DataTable = [
  {
    _id: '644f76e1c8f95a550729db88',
    isActive: true,
    balance: '$2,166.05',
    picture: 'http://placehold.it/32x32',
    age: 38,
    name: 'Tabatha Warner',
    gender: 'female',
    email: 'tabathawarner@frosnex.com',
    phone: '+1 (958) 426-2797',
  },
  {
    _id: '644f76e123eb64cff53a3e0e',
    isActive: true,
    balance: '$1,955.12',
    picture: 'http://placehold.it/32x32',
    age: 27,
    name: 'Santana Mcgowan',
    gender: 'male',
    email: 'santanamcgowan@bezal.com',
    phone: '+1 (810) 482-2801',
  },
  {
    _id: '644f76e18aab42f76ea75178',
    isActive: false,
    balance: '$3,326.96',
    picture: 'http://placehold.it/32x32',
    age: 22,
    name: 'Travis Nguyen',
    gender: 'male',
    email: 'travisnguyen@plasmosis.com',
    phone: '+1 (937) 435-2785',
  },
  {
    _id: '644f76e145923784c648f6df',
    isActive: true,
    balance: '$1,392.08',
    picture: 'http://placehold.it/32x32',
    age: 39,
    name: 'Muriel Barlow',
    gender: 'female',
    email: 'murielbarlow@autograte.com',
    phone: '+1 (853) 571-2037',
  },
  {
    _id: '644f76e16311fb7abee4aead',
    isActive: false,
    balance: '$1,253.31',
    picture: 'http://placehold.it/32x32',
    age: 32,
    name: 'Liliana Wilson',
    gender: 'female',
    email: 'lilianawilson@snowpoke.com',
    phone: '+1 (926) 573-2808',
  },
];

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

type DataTableType = {
  _id: string;
  isActive: boolean;
  picture?: string;
  age: number;
  name: string;
  gender: string;
  email: string;
  phone: string;
};

const DataTable = [
  {
    _id: '644f76e1c8f95a550729db88',
    isActive: true,
    balance: '$2,166.05',
    picture: 'http://placehold.it/32x32',
    age: 38,
    name: 'Tabatha Warner',
    gender: 'female',
    email: 'tabathawarner@frosnex.com',
    phone: '+1 (958) 426-2797',
  },
  {
    _id: '644f76e123eb64cff53a3e0e',
    isActive: true,
    balance: '$1,955.12',
    picture: 'http://placehold.it/32x32',
    age: 27,
    name: 'Santana Mcgowan',
    gender: 'male',
    email: 'santanamcgowan@bezal.com',
    phone: '+1 (810) 482-2801',
  },
  {
    _id: '644f76e18aab42f76ea75178',
    isActive: false,
    balance: '$3,326.96',
    picture: 'http://placehold.it/32x32',
    age: 22,
    name: 'Travis Nguyen',
    gender: 'male',
    email: 'travisnguyen@plasmosis.com',
    phone: '+1 (937) 435-2785',
  },
  {
    _id: '644f76e145923784c648f6df',
    isActive: true,
    balance: '$1,392.08',
    picture: 'http://placehold.it/32x32',
    age: 39,
    name: 'Muriel Barlow',
    gender: 'female',
    email: 'murielbarlow@autograte.com',
    phone: '+1 (853) 571-2037',
  },
  {
    _id: '644f76e16311fb7abee4aead',
    isActive: false,
    balance: '$1,253.31',
    picture: 'http://placehold.it/32x32',
    age: 32,
    name: 'Liliana Wilson',
    gender: 'female',
    email: 'lilianawilson@snowpoke.com',
    phone: '+1 (926) 573-2808',
  },
];

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

type DataTableType = {
  _id: string;
  isActive: boolean;
  picture?: string;
  age: number;
  name: string;
  gender: string;
  email: string;
  phone: string;
};

const DataTable = [
  {
    _id: '644f76e1c8f95a550729db88',
    isActive: true,
    balance: '$2,166.05',
    picture: 'http://placehold.it/32x32',
    age: 38,
    name: 'Tabatha Warner',
    gender: 'female',
    email: 'tabathawarner@frosnex.com',
    phone: '+1 (958) 426-2797',
  },
  {
    _id: '644f76e123eb64cff53a3e0e',
    isActive: true,
    balance: '$1,955.12',
    picture: 'http://placehold.it/32x32',
    age: 27,
    name: 'Santana Mcgowan',
    gender: 'male',
    email: 'santanamcgowan@bezal.com',
    phone: '+1 (810) 482-2801',
  },
  {
    _id: '644f76e18aab42f76ea75178',
    isActive: false,
    balance: '$3,326.96',
    picture: 'http://placehold.it/32x32',
    age: 22,
    name: 'Travis Nguyen',
    gender: 'male',
    email: 'travisnguyen@plasmosis.com',
    phone: '+1 (937) 435-2785',
  },
  {
    _id: '644f76e145923784c648f6df',
    isActive: true,
    balance: '$1,392.08',
    picture: 'http://placehold.it/32x32',
    age: 39,
    name: 'Muriel Barlow',
    gender: 'female',
    email: 'murielbarlow@autograte.com',
    phone: '+1 (853) 571-2037',
  },
  {
    _id: '644f76e16311fb7abee4aead',
    isActive: false,
    balance: '$1,253.31',
    picture: 'http://placehold.it/32x32',
    age: 32,
    name: 'Liliana Wilson',
    gender: 'female',
    email: 'lilianawilson@snowpoke.com',
    phone: '+1 (926) 573-2808',
  },
];

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

type DataTableType = {
  _id: string;
  isActive: boolean;
  picture?: string;
  age: number;
  name: string;
  gender: string;
  email: string;
  phone: string;
};

const DataTable = [
  {
    _id: '644f76e1c8f95a550729db88',
    isActive: true,
    balance: '$2,166.05',
    picture: 'http://placehold.it/32x32',
    age: 38,
    name: 'Tabatha Warner',
    gender: 'female',
    email: 'tabathawarner@frosnex.com',
    phone: '+1 (958) 426-2797',
  },
  {
    _id: '644f76e123eb64cff53a3e0e',
    isActive: true,
    balance: '$1,955.12',
    picture: 'http://placehold.it/32x32',
    age: 27,
    name: 'Santana Mcgowan',
    gender: 'male',
    email: 'santanamcgowan@bezal.com',
    phone: '+1 (810) 482-2801',
  },
  {
    _id: '644f76e18aab42f76ea75178',
    isActive: false,
    balance: '$3,326.96',
    picture: 'http://placehold.it/32x32',
    age: 22,
    name: 'Travis Nguyen',
    gender: 'male',
    email: 'travisnguyen@plasmosis.com',
    phone: '+1 (937) 435-2785',
  },
  {
    _id: '644f76e145923784c648f6df',
    isActive: true,
    balance: '$1,392.08',
    picture: 'http://placehold.it/32x32',
    age: 39,
    name: 'Muriel Barlow',
    gender: 'female',
    email: 'murielbarlow@autograte.com',
    phone: '+1 (853) 571-2037',
  },
  {
    _id: '644f76e16311fb7abee4aead',
    isActive: false,
    balance: '$1,253.31',
    picture: 'http://placehold.it/32x32',
    age: 32,
    name: 'Liliana Wilson',
    gender: 'female',
    email: 'lilianawilson@snowpoke.com',
    phone: '+1 (926) 573-2808',
  },
];

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

type DataTableType = {
  _id: string;
  isActive: boolean;
  picture?: string;
  age: number;
  name: string;
  gender: string;
  email: string;
  phone: string;
};

const DataTable = [
  {
    _id: '644f76e1c8f95a550729db88',
    isActive: true,
    balance: '$2,166.05',
    picture: 'http://placehold.it/32x32',
    age: 38,
    name: 'Tabatha Warner',
    gender: 'female',
    email: 'tabathawarner@frosnex.com',
    phone: '+1 (958) 426-2797',
  },
  {
    _id: '644f76e123eb64cff53a3e0e',
    isActive: true,
    balance: '$1,955.12',
    picture: 'http://placehold.it/32x32',
    age: 27,
    name: 'Santana Mcgowan',
    gender: 'male',
    email: 'santanamcgowan@bezal.com',
    phone: '+1 (810) 482-2801',
  },
  {
    _id: '644f76e18aab42f76ea75178',
    isActive: false,
    balance: '$3,326.96',
    picture: 'http://placehold.it/32x32',
    age: 22,
    name: 'Travis Nguyen',
    gender: 'male',
    email: 'travisnguyen@plasmosis.com',
    phone: '+1 (937) 435-2785',
  },
  {
    _id: '644f76e145923784c648f6df',
    isActive: true,
    balance: '$1,392.08',
    picture: 'http://placehold.it/32x32',
    age: 39,
    name: 'Muriel Barlow',
    gender: 'female',
    email: 'murielbarlow@autograte.com',
    phone: '+1 (853) 571-2037',
  },
  {
    _id: '644f76e16311fb7abee4aead',
    isActive: false,
    balance: '$1,253.31',
    picture: 'http://placehold.it/32x32',
    age: 32,
    name: 'Liliana Wilson',
    gender: 'female',
    email: 'lilianawilson@snowpoke.com',
    phone: '+1 (926) 573-2808',
  },
];

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
            {'Props'}
          </Typography>
          <PropsTable
            data={[
              {
                name: 'data',
                type: 'T[]',
                desc: 'An array of objects representing the dataset to be displayed in the table. Each object corresponds to a row in the table, with its properties containing the data for each column. The data prop populates the table with the provided data.',
              },
              {
                name: 'columns',
                type: 'ColumnDef<T>[]',
                desc: 'An array of column configurations defining the structure and behavior of each column in the table. Each object in the columns array represents a column and specifies properties such as the column header, sorting options, filtering options, and data accessor. By providing the columns prop, you can customize the appearance and functionality of the columns in the table.',
              },
              {
                name: 'enableSorting',
                type: 'boolean',
                defaultVal: 'false',
                desc: 'A boolean value indicating whether sorting should be enabled in the table. When set to true, users can click on column headers to sort the table data based on that column.',
              },
              {
                name: 'enableGlobalFiltering',
                type: 'boolean',
                defaultVal: 'false',
                desc: 'A boolean value indicating whether global filtering should be enabled in the table. Global filtering allows users to search for specific data across all columns in the table.',
              },
              {
                name: 'globalFilterFn',
                type: 'FilterFn<T>',
                defaultVal: 'filterFns.fuzzy',
                desc: 'A custom filter function used for global filtering. This function is responsible for determining if a row should be included in the search results based on the provided search query. It takes the row data as input and returns a boolean value indicating whether the row matches the search query.',
              },
              {
                name: 'enableColumnFiltering',
                type: 'boolean',
                defaultVal: 'false',
                desc: 'A boolean value indicating whether column-level filtering should be enabled in the table. When set to true, users can filter the data within each individual column.',
              },
              {
                name: 'enablePagination',
                type: 'boolean',
                defaultVal: 'false',
                desc: 'A boolean value indicating whether pagination should be enabled in the table. When set to true, the table will display a pagination control that allows users to navigate through multiple pages of data.',
              },
              {
                name: 'rowsPerPageOptions',
                type: 'Array<number | {label: string; value: number}>',
                defaultVal: '[5, 10, 25, {label: "All", value: data.length}]',
                desc: 'An array of numbers or objects representing the options for the number of rows per page in the table. Each number represents the number of rows to be displayed per page, while each object can contain a label and value pair, allowing for custom labels to be displayed for each option. This prop provides flexibility in choosing the available rows per page options for the user.',
              },
              {
                name: 'enableRowDnd',
                type: 'boolean',
                defaultVal: 'true',
                desc: 'A boolean value indicating whether row dragging and dropping should be enabled in the table. When set to true, users can interactively rearrange the rows of the table by dragging and dropping them to new positions. ',
              },
              {
                name: 'enableColumnDnd',
                type: 'boolean',
                defaultVal: 'false',
                desc: 'A boolean value indicating whether column dragging and dropping should be enabled in the table. When set to true, users can interactively rearrange the columns of the table by dragging and dropping them to new positions.',
              },
              {
                name: 'MUITablePropsObject',
                type: 'MUITablePropsObject',
                desc: `The MUITablePropsObject is a prop type that represents a set of properties used to configure a Material-UI table component. It includes the following properties:
                - tableContainerProps: Props for the table container component.
                - tableProps: Props for the main table component.
                - tableHeadProps: Props for the table head component.
                - headerRowProps: Props for the table header row component.
                - tableBodyProps: Props for the table body component.
                - tableFooterProps: Props for the table footer component.
                - tablePaginationProps: Props for the table pagination component.
                - bodyRowProps: Props for the table body row component.
                - bodyCellProps: Props for the table body cell component.
                - columnCellProps: Props for the table column cell component.`,
              },
            ]}
          />
        </PagePaper>
      </Box>
      <TableOfContent />
    </Stack>
  );
};

export default TablePage;
