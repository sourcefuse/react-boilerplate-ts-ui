import type {Meta, StoryObj} from '@storybook/react';
import Input from 'Components/Input/Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
  name: 'Default',
  args: {
    id: 'Default Input',
  },
};

export const endAdornmentInput: Story = {
  name: 'Input with End Adornment',
  args: {
    id: 'Default Input',
    endAdornment: <h3>Hi</h3>,
  },
};

export const DisabledInput: Story = {
  name: 'Disabled',
  args: {
    id: 'Disabled',
    disabled: true,
  },
};
