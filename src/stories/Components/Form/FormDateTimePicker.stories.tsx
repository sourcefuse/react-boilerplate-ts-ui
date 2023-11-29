import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import type {Meta, StoryObj} from '@storybook/react';
import {DateTimePickerProps} from 'Components/DateTimePicker/DateTimePicker';
import Form from 'Components/Forms/Form';
import FormDateTimePicker from 'Components/Forms/FormDateTimePicker/FormDateTimePicker';

const meta = {
  title: 'Components/Form/FormDateTimePicker',
  component: FormDateTimePicker,
  tags: ['autodocs'],
} satisfies Meta<typeof FormDateTimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

const FormDateTimePickerTemplate: Omit<Story, 'args'> = {
  render: ({id, label, ...rest}: DateTimePickerProps) => {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Form
          initialValues={{
            [id]: new Date('2023-01-27'),
          }}
          onSubmit={() => {}}
        >
          <FormDateTimePicker id={id} label={label} {...rest} />
        </Form>
      </LocalizationProvider>
    );
  },
};

export const DefaultFormDateTimePicker: Story = {
  ...FormDateTimePickerTemplate,
  name: 'Default',
  args: {
    id: 'Default',
    label: 'D.O.B',
  },
};
