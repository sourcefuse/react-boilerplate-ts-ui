import {Stack, Typography} from '@mui/material';
import {ColumnDef} from '@tanstack/react-table';
import {Table} from 'Components/Table';
import {Collapsible} from './Collapsible';

type beforeLog = {
  deleted?: string;
  createdOn?: string;
  modifiedOn?: string;
  createdBy?: string;
  modifiedBy?: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  username: string;
  email: string;
};

export type AuditLog = {
  id: string;
  action: string;
  actedOn: string;
  actionKey: string;
  before: beforeLog;
};

export interface AnyObject {
  [key: string]: any; // NOSONAR
}

export type ApiAuditLog = AnyObject;

export const auditColumns: ColumnDef<AuditLog>[] = [
  {
    header: 'Id',
    accessorKey: 'id',
  },
  {
    header: 'Action',
    accessorKey: 'action',
  },
  {
    header: 'Acted On',
    accessorKey: 'actedOn',
  },
  {
    header: 'Action Key',
    accessorKey: 'actionKey',
  },
  {
    header: 'Before',
    accessorKey: 'before',
    cell: row => {
      const data: beforeLog[] = [row.getValue() as beforeLog];
      const beforeColumns: ColumnDef<beforeLog>[] = [
        {
          header: 'Deleted',
          accessorKey: 'deleted',
        },
        {
          header: 'Created On',
          accessorKey: 'createdOn',
        },
        {
          header: 'Modified On',
          accessorKey: 'modifiedOn',
        },
        {
          header: 'Created By',
          accessorKey: 'createdBy',
        },
        {
          header: 'Modified By',
          accessorKey: 'modifiedBy',
        },
        {
          header: 'First Name',
          accessorKey: 'firstName',
        },
        {
          header: 'Last Name',
          accessorKey: 'lastName',
        },
        {
          header: 'Middle Name',
          accessorKey: 'middleName',
        },
        {
          header: 'Username',
          accessorKey: 'username',
        },
      ];

      return (
        <Stack direction={'column'} spacing={2}>
          <Typography>Username: {(row.getValue() as beforeLog).username}</Typography>
          <Collapsible>
            <Table data={data} columns={beforeColumns} />
          </Collapsible>
        </Stack>
      );
    },
  },
];
