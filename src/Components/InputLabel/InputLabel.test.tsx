import {render, screen} from '@testing-library/react';
import InputLabel from './InputLabel';

describe('InputLabel', () => {
  it('renders the label text', () => {
    render(<InputLabel htmlFor="test-input">Test Label</InputLabel>);
    const label = screen.getByText('Test Label');
    expect(label).toBeInTheDocument();
  });

  it('sets the htmlFor attribute', () => {
    render(<InputLabel htmlFor="test-input">Test Label</InputLabel>);
    const label = screen.getByText('Test Label');
    expect(label).toHaveAttribute('for', 'test-input');
  });
});
