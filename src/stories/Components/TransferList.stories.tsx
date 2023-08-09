import type {Meta, StoryObj} from '@storybook/react';
import TransferList, {TransferListProps} from 'Components/TransferList/TransferList';
import {useState} from 'react';

const meta = {
  title: 'Components/TransferList',
  component: TransferList,
  tags: ['autodocs'],
} satisfies Meta<typeof TransferList>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = ({left: initalLeft, right: initialRight}: TransferListProps) => {
  const [left, setLeft] = useState(initalLeft);
  const [right, setRight] = useState(initialRight);

  return <TransferList left={left} right={right} setLeft={setLeft} setRight={setRight} />;
};

const TransferListTemplate: Omit<Story, 'args'> = {
  render: Template,
};

export const DefaultTransferList: Story = {
  ...TransferListTemplate,
  name: 'Default',
  args: {
    left: [
      {value: 'li1', label: 'Left item 1'},
      {value: 'li2', label: 'Left item 2'},
      {value: 'li3', label: 'Left item 3'},
      {value: 'li4', label: 'Left item 4'},
    ],
    right: [
      {value: 'ri1', label: 'Right item 1'},
      {value: 'ri2', label: 'Right item 2'},
      {value: 'ri3', label: 'Right item 3'},
      {value: 'ri4', label: 'Right item 4'},
    ],
  },
};
