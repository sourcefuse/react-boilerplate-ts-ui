import {render, screen, within} from '@testing-library/react';
import React from 'react';
import Button from './Button';

describe('Button', () => {
  it('should be rendered', () => {
    render(<Button>test</Button>);
    const button = screen.getByRole('button', {name: 'test'});
    expect(button).toBeInTheDocument();
  });
  it('should show loading state', () => {
    render(<Button isLoading>test</Button>);
    const button = screen.getByRole('button', {name: 'test'});
    const loader = within(button).getByTitle('button-loader');
    expect(loader).toBeVisible();
  });
});
