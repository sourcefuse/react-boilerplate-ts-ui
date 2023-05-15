import {render, screen} from '@testing-library/react';
import FloatingActionButton from '.';

describe('FloatingActionButton', () => {
  test('renders the button with the given children', () => {
    const buttonText = 'Click me';
    render(<FloatingActionButton>{buttonText}</FloatingActionButton>);
    const button = screen.getByRole('button', {name: buttonText});
    expect(button).toBeInTheDocument();
  });
});
