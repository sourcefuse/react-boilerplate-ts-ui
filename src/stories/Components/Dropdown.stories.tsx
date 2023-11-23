import type {Meta, StoryObj} from '@storybook/react';
import Dropdown, {AutocompleteValueType, DropdownProps} from 'Components/Dropdown/Dropdown';
import {useState} from 'react';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = ({id, label, options}: DropdownProps) => {
  const [value, setValue] = useState<AutocompleteValueType>(options[0]);

  return <Dropdown id={id} label={label} value={value} options={options} onChange={setValue} />;
};

const DropdownTemplate: Omit<Story, 'args'> = {
  render: Template,
};

const options = [
  {label: 'Mr', value: 'mr'},
  {label: 'Mrs', value: 'mrs'},
  {label: 'Ms', value: 'ms'},
];

export const DefaultDropdown: Story = {
  ...DropdownTemplate,
  name: 'Default',
  args: {
    id: 'salutation',
    label: 'Salutation',
    options,
  },
};
