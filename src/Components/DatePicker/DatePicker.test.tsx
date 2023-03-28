import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {render, screen, within} from '@testing-library/react';
import React, {useState} from 'react';
import DatePicker from './DatePicker';

describe('DatePicker', () => {
  it('should be rendered', () => {
    const [value, setValue] = useState<Date | null>(null);
    render(
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker id="test" label="test" value={value} onChange={setValue} />
      </LocalizationProvider>,
    );
    const datePickerFormControl = screen.getByTestId('datePickerFormControl');
    const label = within(datePickerFormControl).getByText(/test/i);
    expect(label).toBeVisible();
    const input = within(datePickerFormControl).getByRole('textbox');
    expect(input).toBeVisible();
  });
});
