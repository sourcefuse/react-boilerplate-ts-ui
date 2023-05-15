import {render, screen, fireEvent} from '@testing-library/react';
import ComponentViewer from './ComponentViewer';

test('ComponentViewer renders correctly', () => {
  render(
    <ComponentViewer title="My Component" code="Hello world">
      <div>Child component content</div>
    </ComponentViewer>,
  );

  const demoTab = screen.getByRole('button', {name: /demo/i});
  expect(demoTab).toBeVisible();

  const codeTab = screen.getByRole('button', {name: /code/i});
  expect(codeTab).toBeVisible();

  const componentTitle = screen.getByText('My Component');
  expect(componentTitle).toBeVisible();

  const demoContent = screen.getByText('Child component content');
  expect(demoContent).toBeVisible();

  fireEvent.click(codeTab);

  const codeContent = screen.getByTestId('syntax-highlighter');
  expect(codeContent).toBeVisible();
});
