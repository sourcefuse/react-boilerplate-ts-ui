import {fireEvent, render, screen} from '@testing-library/react';
import {vi} from 'vitest';
import ToggleButton from './ToggleButton';

describe('ToggleButton', () => {
  const options = [
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
  ];

  it('renders ToggleButton component with options', () => {
    render(<ToggleButton options={options} />);

    options.forEach(option => {
      const checkbox = screen.getByLabelText(option.label) as HTMLInputElement;
      expect(checkbox).toBeInTheDocument();
      expect(checkbox.checked).toBeFalsy();
    });
  });

  it('triggers onChange callback when an option is clicked', () => {
    const handleChange = vi.fn();
    render(<ToggleButton options={options} onChange={handleChange} singleSelect />);

    const checkbox = screen.getByLabelText(options[0].label) as HTMLInputElement;
    fireEvent.click(checkbox);

    expect(handleChange.mock.calls).toHaveLength(1);
    expect(handleChange).toHaveBeenCalledWith(options[0].value);
  });

  it('marks the selected option as checked', () => {
    const selectedOption = options[1];
    render(<ToggleButton options={options} value={selectedOption.value} singleSelect />);

    const selectedCheckbox = screen.getByLabelText(selectedOption.label) as HTMLInputElement;
    expect(selectedCheckbox.checked).toBeTruthy();
  });

  it('marks the selected options as checked', () => {
    const selectedOptions = [options[1], options[0]];
    render(<ToggleButton options={options} value={selectedOptions.map(option => option.value)} />);

    selectedOptions.forEach(selectedOption => {
      const selectedCheckbox = screen.getByLabelText(selectedOption.label) as HTMLInputElement;
      expect(selectedCheckbox.checked).toBeTruthy();
    });
  });
});
