import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import type {Meta, StoryObj} from '@storybook/react';
import {DatePickerProps} from 'Components/DatePicker/DatePicker';
import Form from 'Components/Forms/Form';
import FormDatePicker from 'Components/Forms/FormDatePicker/FormDatePicker';

const meta = {
  title: 'Components/Form/FormDatePicker',
  component: FormDatePicker,
  tags: ['autodocs'],
} satisfies Meta<typeof FormDatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

const FormDatePickerTemplate: Omit<Story, 'args'> = {
  render: ({id, label, ...rest}: DatePickerProps) => {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Form
          initialValues={{
            [id]: new Date('2023-01-27'),
          }}
          onSubmit={() => {}}
        >
          <FormDatePicker id={id} label={label} {...rest} />
        </Form>
      </LocalizationProvider>
    );
  },
};

export const DefaultFormDatePicker: Story = {
  ...FormDatePickerTemplate,
  name: 'Default',
  args: {
    id: 'Default',
    label: 'D.O.B',
  },
};
