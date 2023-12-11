import {render, screen} from '@testing-library/react';
import StepperTab from './StepperTab';

describe('Stepper Tab', () => {
  it('renders StepperTab component with correct number of steps', () => {
    const steps = ['Step 1', 'Step 2', 'Step 3'];
    render(<StepperTab steps={steps} activeStep={0} />);
    steps.forEach(step => {
      const stepLabel = screen.getByText(step);
      expect(stepLabel).toBeInTheDocument();
    });
  });
});
