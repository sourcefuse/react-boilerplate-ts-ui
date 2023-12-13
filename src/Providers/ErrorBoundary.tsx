import {Typography} from '@mui/material';
import React, {ErrorInfo, ReactNode} from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    console.error(error); // NOSONAR
    return {hasError: true};
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo); // NOSONAR
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // no we only use these boundaries on top level, we can return the 404
      return <Typography variant="h1">Something went wrong</Typography>;
    }

    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;
