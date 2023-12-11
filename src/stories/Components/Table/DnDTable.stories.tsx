import type {Meta, StoryObj} from '@storybook/react';
import {DndTable} from 'Components/Table';
import {DataTable} from 'Pages/TablePage/data';
import {tableColumns} from './utils';

const meta = {
  title: 'Components/Table/DragAndDropTable',
  component: DndTable,
  tags: ['autodocs'],
} satisfies Meta<typeof DndTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RowDndTable: Story = {
  name: 'DragNDrop Rows',
  args: {
    columns: tableColumns,
    data: DataTable,
  },
};

export const ColumnDndTable: Story = {
  name: 'DragNDrop Columns',
  args: {
    ...RowDndTable.args,
    enableColumnDnd: true,
    enableRowDnd: false,
  },
};

export const RowNColumnDndTable: Story = {
  name: 'DragNDrop Rows & Columns',
  args: {
    ...RowDndTable.args,
    enableColumnDnd: true,
  },
};
