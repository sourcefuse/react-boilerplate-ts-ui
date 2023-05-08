import {Box, Stack} from '@mui/material';
import ComponentViewer from 'Components/ComponentViewer';
import PagePaper from 'Components/PagePaper';
import TableOfContent from 'Components/TableOfContent/TableOfContent';
import {tableColumns} from './utils';
import {DataTable} from './data';
import {Table} from 'Components/Table';

const TablePage = () => {
  return (
    <Stack direction="row">
      <Box sx={{flexGrow: 1}}>
        <PagePaper
          title="Table"
          description="The table component is a flexible and customizable reusable component that allows you to display data in a structured, tabular format. It supports a variety of features, including column sorting, filtering, and global searching, making it easy for users to find and analyze data. With its simple and intuitive API, you can quickly and easily integrate this table component into your React applications and start displaying your data in a clear and organized way."
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
            <Table columns={tableColumns} data={DataTable.slice(0, 5)} enableSorting />
          </ComponentViewer>
          <ComponentViewer
            title="Table with Global Filter"
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
            <Table columns={tableColumns} data={DataTable.slice(0, 5)} enableSorting enableGlobalFiltering />
          </ComponentViewer>
          <ComponentViewer
            title="Table with Columns Filtering"
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
              data={DataTable.slice(0, 5)}
              enableSorting
              enableGlobalFiltering
              enableColumnFiltering
            />
          </ComponentViewer>
          <ComponentViewer
            title="Table with Pagination"
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
        </PagePaper>
      </Box>
      <TableOfContent />
    </Stack>
  );
};

export default TablePage;
