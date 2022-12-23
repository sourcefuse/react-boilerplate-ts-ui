import {render, screen, within} from '@testing-library/react';
import ThemeProvider from 'Providers/theme/ThemeProvider';
import Input from './Input';

describe('Input', () => {
  it('should be rendered', () => {
    render(<Input id="test" label="test" />);
    const input = screen.getByRole('textbox', {name: /test/i});
    expect(input).toBeInTheDocument();
  });
  it('should be disabled when disabled prop is passed', () => {
    render(<Input id="test" label="test" disabled />);
    const input = screen.getByRole('textbox', {name: /test/i});
    expect(input).toBeDisabled();
  });
  it('should be display error when errorMessage and isTouched are true', () => {
    render(
      <ThemeProvider>
        <Input id="test" label="test" errorMessage="error msg" />
      </ThemeProvider>,
    );
    const inputFormControl = screen.getByTestId('inputFormControl');

    const errorMsg = within(inputFormControl).getByText(/error msg/i);
    expect(errorMsg).toBeVisible();
    expect(errorMsg).toHaveClass('Mui-error');

    const label = within(inputFormControl).getByText(/test/i);
    expect(label).toBeVisible();
    expect(label).toHaveClass('Mui-error');

    const inputContainer = within(inputFormControl).getByTestId('input');
    expect(inputContainer).toHaveClass('Mui-error');

    const errorIcon = within(inputContainer).getByTestId('ReportProblemOutlinedIcon');
    expect(errorIcon).toBeVisible();
    expect(errorIcon).toHaveClass('MuiSvgIcon-colorError');
  });
});
