import {ColumnDef, createColumnHelper} from '@tanstack/react-table';
import {DataTableType} from './data';

const columnHelper = createColumnHelper<DataTableType>();

export const tableColumns: ColumnDef<DataTableType>[] = [
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

export const tableColumns2 = [
  columnHelper.accessor('_id', {
    header: () => <strong>Id</strong>,
  }),
];
