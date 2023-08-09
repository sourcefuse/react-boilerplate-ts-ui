import type {Meta, StoryObj} from '@storybook/react';
import {DropdownProps} from 'Components/Dropdown/Dropdown';
import Form from 'Components/Forms/Form';
import FormDropdown from 'Components/Forms/FormDropdown/FormDropdown';

const meta = {
  title: 'Components/Form/FormDropdown',
  component: FormDropdown,
  tags: ['autodocs'],
} satisfies Meta<typeof FormDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const FormDropdownTemplate: Omit<Story, 'args'> = {
  render: ({id, label, options, ...rest}: DropdownProps) => {
    return (
      <Form
        initialValues={{
          [id]: [],
        }}
        onSubmit={() => {}}
      >
        <FormDropdown id={id} label={label} options={options} />
      </Form>
    );
  },
};

export const DefaultFormDropdown: Story = {
  ...FormDropdownTemplate,
  name: 'Default',
  args: {
    id: 'Default',
    label: 'Default',
    options: [
      {label: 'Frontend', value: 'frontend'},
      {label: 'Backend', value: 'backend'},
      {label: 'Devops', value: 'devops'},
    ],
  },
};
