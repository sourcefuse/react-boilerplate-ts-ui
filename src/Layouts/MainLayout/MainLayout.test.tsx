/* eslint-disable testing-library/no-node-access */
import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import MainLayout from './Mainlayout';
import {store} from '../../redux/store';
import NotificationProvider from 'Providers/NotificationProvider';

const MockMainLayout = () => (
  <Provider store={store}>
    <NotificationProvider>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </NotificationProvider>
  </Provider>
);

describe('MainLayout', () => {
  it('should be render sidenav on initially', () => {
    render(<MockMainLayout />);
    const sidenav = screen.getByTestId('sidenav');
    expect(sidenav.firstChild).toBeVisible();
  });
  it('should toggle the sidenav on clicking menu icon', async () => {
    render(<MockMainLayout />);
    userEvent.click(screen.getByRole('button', {name: /menu/i}));
    await waitFor(() => expect(screen.getByTestId('sidenav').firstChild).not.toBeVisible());
    userEvent.click(screen.getByRole('button', {name: /menu/i}));
    await waitFor(() => expect(screen.getByTestId('sidenav').firstChild).toBeVisible());
  });
});
