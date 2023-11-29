import type {Meta, StoryObj} from '@storybook/react';
import Form from 'Components/Forms/Form';
import FormToggleButton from 'Components/Forms/FormToggleButton/FormToggleButton';
import {ToggleButtonProps} from 'Components/ToggleButton/ToggleButton';

const meta = {
  title: 'Components/Form/FormToggleButton',
  component: FormToggleButton,
  tags: ['autodocs'],
} satisfies Meta<typeof FormToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const FormToggleButtonTemplate: Omit<Story, 'args'> = {
  render: ({id, label, options, ...rest}: ToggleButtonProps) => {
    return (
      <Form
        initialValues={{
          [id ?? '']: [],
        }}
        onSubmit={() => {}}
      >
        <FormToggleButton id={id} label={label} options={options} {...rest} />
      </Form>
    );
  },
};

export const DefaultFormToggleButton: Story = {
  ...FormToggleButtonTemplate,
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

export const SingleSelectFormToggleButton: Story = {
  ...FormToggleButtonTemplate,
  name: 'Single Select',
  args: {
    ...DefaultFormToggleButton.args,
    singleSelect: true,
  },
};
