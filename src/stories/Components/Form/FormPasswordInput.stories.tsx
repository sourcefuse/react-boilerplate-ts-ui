import type {Meta, StoryObj} from '@storybook/react';
import * as yup from 'yup';
import {InputProps} from 'Components/Input/Input';
import Form from 'Components/Forms/Form';
import Button from 'Components/Button/Button';
import FormPasswordInput from 'Components/Forms/FormPasswordInput/FormPasswordInput';

const meta = {
  title: 'Components/Form/FormPasswordInput',
  component: FormPasswordInput,
  tags: ['autodocs'],
} satisfies Meta<typeof FormPasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const FormPasswordInputTemplate: Omit<Story, 'args'> = {
  render: function FormTemplate(args: InputProps) {
    return (
      <Form
        initialValues={{[args.id]: ''}}
        validationSchema={yup.object({[args.id]: yup.string().required('Required Field')})}
        onSubmit={(val: {[key: string]: string}) => {
          alert(`Entered value: ${val[args.id]}`);
        }}
      >
        <FormPasswordInput {...args} />
        <Button type="submit">Submit</Button>
      </Form>
    );
  },
};

export const DefaultFormPasswordInput: Story = {
  ...FormPasswordInputTemplate,
  name: 'Default',
  args: {
    id: 'password',
    label: 'Password',
  },
};
