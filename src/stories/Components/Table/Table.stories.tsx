import type {Meta, StoryObj} from '@storybook/react';
import {Table} from 'Components/Table';
import {tableColumns} from './utils';
import {DataTable} from './data';

const meta = {
  title: 'Components/Table/Table',
  component: Table,
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultTable: Story = {
  name: 'Default',
  args: {
    columns: tableColumns,
    data: DataTable,
  },
};

export const SortingTable: Story = {
  name: 'Sorting Enabled',
  args: {
    ...DefaultTable.args,
    enableSorting: true,
  },
};

export const GlobalFilteringTable: Story = {
  name: 'Global Filtering',
  args: {
    ...DefaultTable.args,
    enableGlobalFiltering: true,
  },
};

export const ColumnFilteringTable: Story = {
  name: 'Column Filtering',
  args: {
    ...DefaultTable.args,
    enableColumnFiltering: true,
  },
};

export const PaginationTable: Story = {
  name: 'Default Pagination',
  args: {
    ...DefaultTable.args,
    enablePagination: true,
    rowsPerPageOptions: [5, 10, 25],
  },
};
