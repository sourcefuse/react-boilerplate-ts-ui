import {render, screen, within} from '@testing-library/react';
import React, {useState} from 'react';
import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import DateTimePicker from './DateTimePicker';

function TestComponent() {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker id="test" label="test" value={value} onChange={setValue} />
    </LocalizationProvider>
  );
}

describe('DateTimePicker', () => {
  it('should be rendered', async () => {
    render(<TestComponent />);
    const datePickerFormControl = screen.getByTestId('dateTimePickerFormControl');
    const label = within(datePickerFormControl).getByText(/test/i);
    expect(label).toBeVisible();
    const input = within(datePickerFormControl).getByRole('textbox');
    expect(input).toBeVisible();
  });
});
