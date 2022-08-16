import {render, screen, within} from '@testing-library/react';
import React from 'react';
import RadioButton from './RadioButton';

const options = [
  {label: `I'm In`, value: 'yes'},
  {label: `I'm Out`, value: 'no'},
];

describe('RadioButton', () => {
  it('should be rendered', () => {
    render(<RadioButton id="test" label="test" options={options} />);
    const radioButtonFormControl = screen.getByTestId('radioButtonFormControl');
    const label = within(radioButtonFormControl).getByText(/test/i);
    expect(label).toBeVisible();
    const radioGroup = within(radioButtonFormControl).getByRole('radiogroup', {name: /test/i});
    expect(radioGroup).toBeVisible();
    const radio = within(radioGroup).getAllByRole('radio');
    expect(radio.length).toBe(options.length);
  });
});
