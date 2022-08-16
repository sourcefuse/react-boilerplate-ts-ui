import {render, screen} from '@testing-library/react';
import React from 'react';
import BackdropLoader from './BackdropLoader';

describe('BackdropLoader', () => {
  it('should be rendered', () => {
    render(<BackdropLoader />);
    const progressBar = screen.getByTestId('circularProgress');
    expect(progressBar).toBeVisible();
  });
});
