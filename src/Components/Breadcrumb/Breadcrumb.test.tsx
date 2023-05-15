import React from 'react';
import {render, screen} from '@testing-library/react';
import Breadcrumb from './Breadcrumb';
import {BrowserRouter} from 'react-router-dom';

describe('Breadcrumb Component', () => {
  test('renders Breadcrumb component', () => {
    render(
      <BrowserRouter>
        <Breadcrumb />
      </BrowserRouter>,
    );
    const breadcrumbElement = screen.getByTestId('breadcrumb');
    expect(breadcrumbElement).toBeVisible();
  });
});
