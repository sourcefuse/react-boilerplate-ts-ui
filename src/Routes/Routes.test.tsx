import {MemoryRouter, Outlet, RouteObject} from 'react-router-dom';
import Routes from './Routes';
import {render, screen} from '@testing-library/react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import AuthProvider from 'Providers/AuthProvider';
import NotificationProvider from 'Providers/NotificationProvider';
import {getRouteConfig} from './layoutRouteConfig';
import {vi} from 'vitest';
import {authorizationFunctions} from 'Helpers/authorizationFunctions';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
});

const TestApp: React.FC<{initialEntries: any[]}> = ({initialEntries}: {initialEntries: any[]}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={initialEntries}>
        <NotificationProvider>
          <AuthProvider>
            <Routes routesConfig={getRouteConfig()} />
          </AuthProvider>
        </NotificationProvider>
      </MemoryRouter>
    </QueryClientProvider>
  );
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
