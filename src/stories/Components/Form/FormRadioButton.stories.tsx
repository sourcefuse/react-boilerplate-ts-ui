import type {Meta, StoryObj} from '@storybook/react';
import Form from 'Components/Forms/Form';
import FormRadioButton from 'Components/Forms/FormRadioButton/FormRadioButton';
import {RadioButtonProps} from 'Components/RadioButton/RadioButton';

const meta = {
  title: 'Components/Form/FormRadioButton',
  component: FormRadioButton,
  tags: ['autodocs'],
} satisfies Meta<typeof FormRadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const FormRadioButtonTemplate: Omit<Story, 'args'> = {
  render: ({id, label, options, ...rest}: RadioButtonProps) => {
    return (
      <Form
        initialValues={{
          [id]: [],
        }}
        onSubmit={() => {}}
      >
        <FormRadioButton id={id} label={label} options={options} />
      </Form>
    );
  },
};

export const DefaultFormRadioButton: Story = {
  ...FormRadioButtonTemplate,
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
