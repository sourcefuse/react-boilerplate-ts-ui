import {fireEvent, render, screen, within} from '@testing-library/react';
import {useState} from 'react';
import Checkbox from './Checkbox';

const options = [
  {label: 'Frontend', value: 'frontend'},
  {label: 'Backend', value: 'backend'},
  {label: 'Devops', value: 'devops'},
];

describe('Checkbox', () => {
  it('should be rendered', () => {
    render(<Checkbox id="test" label="test" options={options} />);
    const checkboxFormControl = screen.getByTestId('checkboxFormControl');
    const label = within(checkboxFormControl).getByText(/test/i);
    expect(label).toBeVisible();
    const radio = within(checkboxFormControl).getAllByRole('checkbox');
    expect(radio.length).toBe(options.length);
  });

  describe('should work with useState', () => {
    it('should be multi select by default', () => {
      const MockCheckBox = () => {
        const [value, setValue] = useState<string | string[]>([]);
        return <Checkbox id="test" value={value} onChange={setValue} label="test" options={options} />;
      };
      render(<MockCheckBox />);
      const optionOne = screen.getByRole('checkbox', {name: /frontend/i});
      const optionTwo = screen.getByRole('checkbox', {name: /backend/i});
      const optionThree = screen.getByRole('checkbox', {name: /devops/i});
      expect(optionOne).not.toBeChecked();
      expect(optionTwo).not.toBeChecked();
      expect(optionThree).not.toBeChecked();
      fireEvent.click(optionOne);
      expect(optionOne).toBeChecked();
      expect(optionTwo).not.toBeChecked();
      expect(optionThree).not.toBeChecked();
      fireEvent.click(optionTwo);
      expect(optionOne).toBeChecked();
      expect(optionTwo).toBeChecked();
      expect(optionThree).not.toBeChecked();
    });
    it('should be single select if singleSelect flag is passed', () => {
      const MockCheckBox = () => {
        const [value, setValue] = useState<string | string[]>('');
        return <Checkbox id="test" value={value} onChange={setValue} label="test" options={options} singleSelect />;
      };
      render(<MockCheckBox />);
      const optionOne = screen.getByRole('checkbox', {name: /frontend/i});
      const optionTwo = screen.getByRole('checkbox', {name: /backend/i});
      const optionThree = screen.getByRole('checkbox', {name: /devops/i});
      expect(optionOne).not.toBeChecked();
      expect(optionTwo).not.toBeChecked();
      expect(optionThree).not.toBeChecked();
      fireEvent.click(optionOne);
      expect(optionOne).toBeChecked();
      expect(optionTwo).not.toBeChecked();
      expect(optionThree).not.toBeChecked();
      fireEvent.click(optionTwo);
      expect(optionOne).not.toBeChecked();
      expect(optionTwo).toBeChecked();
      expect(optionThree).not.toBeChecked();
    });
  });
});
