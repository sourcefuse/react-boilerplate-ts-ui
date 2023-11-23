import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import type {Meta, StoryObj} from '@storybook/react';
import DatePicker, {DatePickerProps} from 'Components/DatePicker/DatePicker';
import {useState} from 'react';

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = ({id, label}: DatePickerProps) => {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker id={id} value={value} onChange={setValue} label={label} />
    </LocalizationProvider>
  );
};

const DatePickerTemplate: Omit<Story, 'args'> = {
  render: Template,
};

export const DefaultDatePicker: Story = {
  ...DatePickerTemplate,
  name: 'Default',
  args: {
    id: 'dob',
    label: 'D.O.B',
    value: null,
  },
};
