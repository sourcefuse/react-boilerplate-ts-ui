import {render, screen, waitFor, within} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {useFormik} from 'formik';
import PropTypes from 'prop-types';
import React, {useState} from 'react';
import Dropdown from './Dropdown';

const options = [
  {label: 'Frontend', value: 'frontend'},
  {label: 'Backend', value: 'backend'},
  {label: 'Devops', value: 'devops'},
];

const MockDropdown = ({initialValue = [], ...props}) => {
  const [value, setValue] = useState(initialValue);
  return <Dropdown id="test" value={value} onChange={setValue} label="test" options={options} returnValue {...props} />;
};
MockDropdown.propTypes = {
  initialValue: PropTypes.any,
};

const MockFormikDropdown = (props) => {
  const {values, handleChange} = useFormik({
    initialValues: {test: null},
    onSubmit: () => {},
  });
  return (
    <form>
      <Dropdown id="test" value={values.test} onChange={handleChange} label="test" options={options} {...props} />
    </form>
  );
};

describe('Dropdown', () => {
  it('should be rendered', () => {
    render(<MockDropdown />);

    const dropdownFormControl = screen.getByTestId('dropdownFormControl');

    const label = within(dropdownFormControl).getByText(/test/i);
    expect(label).toBeVisible();

    const textbox = within(dropdownFormControl).getByRole('textbox');
    expect(textbox).toBeVisible();

    const dropdownIcon = within(dropdownFormControl).getByTestId('ArrowDropDownIcon');
    expect(dropdownIcon).toBeVisible();
  });

  it('should not be able to type', () => {
    render(<MockDropdown />);
    const textbox = screen.getByRole('textbox', {name: /test/i});
    userEvent.type(textbox, 'abc');
    expect(textbox).toHaveValue('');
  });

  it('should work with useState', () => {
    render(<MockDropdown />);

    const dropdownIcon = screen.getByTestId('ArrowDropDownIcon');
    userEvent.click(dropdownIcon);
    const optionOne = screen.getByRole('option', {name: /frontend/i});
    userEvent.click(optionOne);
    const textbox = screen.getByRole('textbox', {name: /test/i});
    expect(textbox).toHaveValue('Frontend');
  });

  it('should work with formik', async () => {
    render(<MockFormikDropdown />);

    const dropdownIcon = screen.getByTestId('ArrowDropDownIcon');
    userEvent.click(dropdownIcon);
    const optionOne = screen.getByRole('option', {name: /frontend/i});
    userEvent.click(optionOne);
    const textbox = screen.getByRole('textbox', {name: /test/i});
    await waitFor(() => {
      expect(textbox).toHaveValue('Frontend');
    });
  });

  it('should be able to select multiple elements when multiple flag is passed', () => {
    render(<MockDropdown multiple initialValue={[]} />);

    const dropdownIcon = screen.getByTestId('ArrowDropDownIcon');
    userEvent.click(dropdownIcon);
    const optionOne = screen.getByRole('option', {name: /frontend/i});
    userEvent.click(optionOne);
    userEvent.click(dropdownIcon);
    const optionTwo = screen.getByRole('option', {name: /backend/i});
    userEvent.click(optionTwo);
    const buttonOne = screen.getByRole('button', {name: /frontend/i});
    expect(buttonOne).toBeVisible();
    const buttonTwo = screen.getByRole('button', {name: /backend/i});
    expect(buttonTwo).toBeVisible();
  });
});

describe('AutoComplete', () => {
  it('should be rendered', () => {
    render(<MockDropdown enableAutoComplete />);
    const dropdownFormControl = screen.getByTestId('dropdownFormControl');
    const dropdownIcon = within(dropdownFormControl).queryByTestId('ArrowDropDownIcon');
    expect(dropdownIcon).not.toBeInTheDocument();
  });

  it('should be able to type', () => {
    render(<MockDropdown enableAutoComplete />);
    const textbox = screen.getByRole('textbox', {name: /test/i});
    userEvent.type(textbox, 'abc');
    expect(textbox).toHaveValue('abc');
  });

  it('should work with useState', () => {
    render(<MockDropdown enableAutoComplete />);

    const textbox = screen.getByRole('textbox', {name: /test/i});
    userEvent.click(textbox);
    const optionOne = screen.getByRole('option', {name: /frontend/i});
    userEvent.click(optionOne);
    expect(textbox).toHaveValue('Frontend');
  });

  it('should work with formik', async () => {
    render(<MockFormikDropdown enableAutoComplete />);

    const textbox = screen.getByRole('textbox', {name: /test/i});
    userEvent.click(textbox);
    const optionOne = screen.getByRole('option', {name: /frontend/i});
    userEvent.click(optionOne);
    await waitFor(() => {
      expect(textbox).toHaveValue('Frontend');
    });
  });

  it('should not be able to select multiple elements when multiple flag is passed', () => {
    render(<MockDropdown multiple enableAutoComplete />);

    const textbox = screen.getByRole('textbox', {name: /test/i});
    userEvent.click(textbox);
    const optionOne = screen.getByRole('option', {name: /frontend/i});
    userEvent.click(optionOne);

    const buttonOne = screen.queryByRole('button', {name: /frontend/i});
    expect(buttonOne).not.toBeInTheDocument();
  });
});
