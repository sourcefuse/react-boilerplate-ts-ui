import type {Meta, StoryObj} from '@storybook/react';
import ToggleButton, {ToggleButtonProps} from 'Components/ToggleButton/ToggleButton';
import {useState} from 'react';

const meta = {
  title: 'Components/ToggleButton',
  component: ToggleButton,
  tags: ['autodocs'],
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = ({id, label, options, ...rest}: ToggleButtonProps) => {
  const [value, setValue] = useState<string | string[]>([]);
  return <ToggleButton {...rest} id={id} value={value} label={label} onChange={setValue} options={options} />;
};

export const defaultToggle: Story = (args: ToggleButtonProps) => <Template {...args} />;
defaultToggle.args = {
  id: 'defaultToggle',
  label: 'Default Toggle',
  options: [
    {label: 'Frontend', value: 'frontend'},
    {label: 'Backend', value: 'backend'},
    {label: 'Devops', value: 'devops'},
  ],
};

export const singleToggle: Story = (args: ToggleButtonProps) => <Template {...args} />;
singleToggle.args = {
  singleSelect: true,
  id: 'single',
  label: 'Single Toggle',
  options: [{label: 'Frontend', value: 'frontend'}],
};

export const multipleToggleMultipleSelect: Story = (args: ToggleButtonProps) => <Template {...args} />;
multipleToggleMultipleSelect.args = {
  ...defaultToggle.args,
  id: 'multipleToggleMultipleSelect',
  label: 'Multiple Toggle Multiple Select',
};

export const multipleToggleSingleSelect: Story = (args: ToggleButtonProps) => <Template {...args} />;
multipleToggleSingleSelect.args = {
  ...defaultToggle.args,
  id: 'multipleToggleSingleSelect',
  label: 'Multiple Toggle Single Select',
  singleSelect: true,
};

export const row: Story = (args: ToggleButtonProps) => <Template {...args} />;
row.args = {
  ...defaultToggle.args,
  row: true,
};
