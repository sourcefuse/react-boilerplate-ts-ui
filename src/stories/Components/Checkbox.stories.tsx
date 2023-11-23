import type {Meta, StoryObj} from '@storybook/react';
import Checkbox, {CheckboxProps} from 'Components/Checkbox/Checkbox';
import {useState} from 'react';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = ({id, label, options, ...rest}: CheckboxProps) => {
  const [value, setValue] = useState<string | string[]>([]);
  return <Checkbox {...rest} id={id} value={value} label={label} onChange={setValue} options={options} />;
};

const CheckboxTemplate: Omit<Story, 'args'> = {
  render: Template,
};

export const defaultCheckbox = {
  ...CheckboxTemplate,
  args: {
    id: 'defaultCheckbox',
    label: 'Default Checkbox',
    options: [
      {label: 'Frontend', value: 'frontend'},
      {label: 'Backend', value: 'backend'},
      {label: 'Devops', value: 'devops'},
    ],
  },
};

export const singleCheckbox = {
  ...CheckboxTemplate,
  args: {
    singleSelect: true,
    id: 'single',
    label: 'Single Toggle',
    options: [{label: 'Frontend', value: 'frontend'}],
  },
};

export const singleSelect = {
  ...CheckboxTemplate,
  args: {
    ...defaultCheckbox.args,
    id: 'singleSelect',
    label: 'Single Select',
    singleSelect: true,
  },
};

export const multipleSelect = {
  ...CheckboxTemplate,
  args: {
    ...defaultCheckbox.args,
    id: 'multipleSelect',
    label: 'Multiple Select',
  },
};

export const rowCheckbox = {
  ...CheckboxTemplate,
  args: {
    ...defaultCheckbox.args,
    row: true,
  },
};
