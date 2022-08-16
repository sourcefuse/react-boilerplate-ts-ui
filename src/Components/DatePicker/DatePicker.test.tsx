import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {render, screen, within} from '@testing-library/react';
import React from 'react';
import DatePicker from './DatePicker';

describe('DatePicker', () => {
  it('should be rendered', () => {
    render(
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker id="test" label="test" onChange={() => {}} />
      </LocalizationProvider>,
    );
    const datePickerFormControl = screen.getByTestId('datePickerFormControl');
    const label = within(datePickerFormControl).getByText(/test/i);
    expect(label).toBeVisible();
    const input = within(datePickerFormControl).getByRole('textbox');
    expect(input).toBeVisible();
  });
});
