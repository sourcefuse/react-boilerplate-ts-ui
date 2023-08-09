import type {Meta, StoryObj} from '@storybook/react';
import Button from 'Components/Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  name: 'Default',
  args: {
    children: 'Default Button',
  },
};

export const ContainedButton: Story = {
  name: 'Contained',
  args: {
    children: 'Contained Button',
    variant: 'contained',
  },
};

export const OutlinedButton: Story = {
  name: 'Outlined',
  args: {
    children: 'Outlined Button',
    variant: 'outlined',
  },
};

export const ErrorButton: Story = {
  name: 'Error',
  args: {
    children: 'Error Button',
    variant: 'contained',
    color: 'error',
  },
};

export const SuccessButton: Story = {
  name: 'Success',
  args: {
    children: 'Success Button',
    variant: 'contained',
    color: 'success',
  },
};

export const InfoButton: Story = {
  name: 'Info',
  args: {
    children: 'Info Button',
    variant: 'contained',
    color: 'info',
  },
};

export const PrimaryButton: Story = {
  name: 'Primary',
  args: {
    children: 'Primary Button',
    variant: 'contained',
    color: 'primary',
  },
};

export const SmallButton: Story = {
  name: 'Small',
  args: {
    children: 'Small Button',
    variant: 'contained',
    size: 'small',
  },
};

export const MediumButton: Story = {
  name: 'Medium',
  args: {
    children: 'Medium Button',
    variant: 'contained',
    size: 'medium',
  },
};

export const LargeButton: Story = {
  name: 'Large',
  args: {
    children: 'Large Button',
    variant: 'contained',
    size: 'large',
  },
};
