import {MemoryRouter, Outlet, RouteObject} from 'react-router-dom';
import Routes from './Routes';
import {render, screen} from '@testing-library/react';
import NotificationProvider from 'Providers/NotificationProvider';
import {getRouteConfig} from './layoutRouteConfig';
import {vi} from 'vitest';
import {authorizationFunctions} from 'Helpers/authorizationFunctions';
import {store} from '../redux/store';
import {Provider} from 'react-redux';
import PropTypes from 'prop-types';

const TestApp: React.FC<{initialEntries: string[]}> = ({initialEntries}) => {
  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={initialEntries}>
        <NotificationProvider>
          <Routes routesConfig={getRouteConfig()} />
        </NotificationProvider>
      </MemoryRouter>
    </Provider>
  );
};

TestApp.propTypes = {
  initialEntries: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

describe('Default AppRoutes', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it('renders routes properly', async () => {
    render(<TestApp initialEntries={['/']} />);
  });

  it('redirects unauthenticated user to login page when he tries to access a protected route', async () => {
    authorizationFunctions.isAuthenticated = vi.fn().mockReturnValue(false);
    expect(authorizationFunctions.isAuthenticated()).toBe(false);
    render(<TestApp initialEntries={['/home']} />);
    await screen.findByTestId('LoginPage');
  });

  it('authenticated users can access protected route', async () => {
    authorizationFunctions.isAuthenticated = vi.fn().mockReturnValue(true);
    expect(authorizationFunctions.isAuthenticated()).toBe(true);
    render(<TestApp initialEntries={['/home']} />);
    await screen.findByTestId('HomePage');
  });
});

describe('Route Component', () => {
  it('should support nested routing', () => {
    const nestedRoutes: RouteObject[] = [
      {
        path: '/home',
        children: [
          {
            index: true,
            element: (
              <div>
                Home Component <Outlet />
              </div>
            ),
          },
          {
            path: 'test',
            element: <div>Test Component</div>,
          },
        ],
      },
    ];
    const ExampleApp = () => {
      return <Routes routesConfig={nestedRoutes} />;
    };

    render(
      <MemoryRouter initialEntries={['/home/test']}>
        <ExampleApp />
      </MemoryRouter>,
    );
    expect(screen.getByText(/test component/i)).toBeInTheDocument();
  });
});
