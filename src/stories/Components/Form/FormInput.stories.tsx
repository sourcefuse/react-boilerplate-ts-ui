import type {Meta, StoryObj} from '@storybook/react';
import * as yup from 'yup';
import FormInput from 'Components/Forms/FormInput/FormInput';
import {InputProps} from 'Components/Input/Input';
import Form from 'Components/Forms/Form';
import Button from 'Components/Button/Button';

const meta = {
  title: 'Components/Form/FormInput',
  component: FormInput,
  tags: ['autodocs'],
  argTypes: {
    onChange: {defaultValue: null},
  },
} satisfies Meta<typeof FormInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const FormInputTemplate: Omit<Story, 'args'> = {
  render: function FormTemplate(args: InputProps) {
    return (
      <Form
        initialValues={{[args.id]: ''}}
        validationSchema={yup.object({[args.id]: yup.string().required('Required Field')})}
        onSubmit={() => {}}
      >
        <FormInput {...args} />
        <Button type="submit">Submit</Button>
      </Form>
    );
  },
};

export const DefaultFormInput: Story = {
  ...FormInputTemplate,
  name: 'Default',
  args: {
    id: 'name',
    label: 'Name',
  },
};
