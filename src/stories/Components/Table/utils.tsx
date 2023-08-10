import {ColumnDef, createColumnHelper} from '@tanstack/react-table';
import {DataTableType} from './data';

const columnHelper = createColumnHelper<DataTableType>();

export const tableColumns: ColumnDef<Record<string, any>>[] = [
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

export const tableColumns2 = [
  columnHelper.accessor('_id', {
    header: () => <strong>Id</strong>,
  }),
];
