import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import CodeBlock from './CodeBlock';

describe('CodeBlock', () => {
  it('should be rendered', () => {
    render(<CodeBlock initial={'initial'} fullCode={'fullCode'} />);
    const codeBlock = screen.getByTestId('code-block');
    expect(codeBlock).toBeVisible();
  });

  it('should be expand code', async () => {
    render(<CodeBlock initial="initial" fullCode="fullCode" />);
    const initialText = screen.getByText(/initial/i);
    expect(initialText).toBeVisible();
    const expandButton = screen.getByRole('button', {name: 'button code expand'});
    await userEvent.click(expandButton);
    const fullCodeText = screen.getByText(/fullCode/i);
    expect(fullCodeText).toBeVisible();
  });
});
