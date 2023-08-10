import type {Meta, StoryObj} from '@storybook/react';
import AddIcon from '@mui/icons-material/Add';
import FloatingActionButton from 'Components/FloatingActionButton';

const meta = {
  title: 'Components/FloatingActionButton',
  component: FloatingActionButton,
  tags: ['autodocs'],
} satisfies Meta<typeof FloatingActionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultFAB: Story = {
  name: 'Default',
  args: {
    children: '+',
  },
};

export const PrimaryFAB: Story = {
  name: 'Color Primary',
  args: {
    ...DefaultFAB.args,
    color: 'primary',
  },
};

export const IconFAB: Story = {
  name: 'Icon',
  args: {
    children: <AddIcon />,
    color: 'primary',
  },
};
