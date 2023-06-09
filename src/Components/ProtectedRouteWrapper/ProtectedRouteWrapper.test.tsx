import React from 'react';
import {render, screen} from '@testing-library/react';
import {MemoryRouter, RouteObject, useRoutes} from 'react-router-dom';
import {ProtectedRouteWrapper} from './ProtectedRouteWrapper';

interface TestAppProps {
  isAuthorized: (...args: any[]) => boolean;
}
const TestApp: React.FC<TestAppProps> = ({isAuthorized}) => {
  const routesConfig: RouteObject[] = [
    {
      path: '/login',
      element: <div>Login Page</div>,
    },
    {
      path: '',
      element: (
        <ProtectedRouteWrapper isAuthorized={isAuthorized}>
          <div>Test Component</div>
        </ProtectedRouteWrapper>
      ),
    },
  ];
  return useRoutes(routesConfig);
};

describe('ProtectedRouteWrapper', () => {
  it('should redirect to login page for unauthorized user', () => {
    render(
      <MemoryRouter>
        <TestApp
          isAuthorized={() => {
            return false; // Unauthorized User
          }}
        />
      </MemoryRouter>,
    );
    expect(screen.getByText(/login page/i)).toBeInTheDocument();
  });
  it('should not render component for unauthorized user', () => {
    render(
      <MemoryRouter>
        <TestApp
          isAuthorized={() => {
            return false; // Unauthorized User
          }}
        />
      </MemoryRouter>,
    );
    expect(screen.queryByText(/test component /i)).not.toBeInTheDocument();
  });
  it('should render component for authorized user', () => {
    render(
      <MemoryRouter>
        <TestApp
          isAuthorized={() => {
            return true; // Authorized User
          }}
        />
      </MemoryRouter>,
    );
    expect(screen.getByText(/test component/i)).toBeInTheDocument();
  });
});
