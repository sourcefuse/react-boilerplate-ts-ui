import type {Meta, StoryObj} from '@storybook/react';
import {Table} from 'Components/Table';
import {DataTable} from 'Pages/TablePage/data';
import {tableColumns} from './utils';

const meta = {
  title: 'Components/Table/Table',
  component: Table,
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

const ROWS_PER_PAGE_5 = 5;
const ROWS_PER_PAGE_10 = 10;
const ROWS_PER_PAGE_25 = 25;

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
    rowsPerPageOptions: [ROWS_PER_PAGE_5, ROWS_PER_PAGE_10, ROWS_PER_PAGE_25],
  },
};
