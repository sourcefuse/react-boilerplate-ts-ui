import {Button, Grid} from '@mui/material';
import type {Meta, StoryObj} from '@storybook/react';
import StepperTab, {StepperTabProps} from 'Components/StepperTab/StepperTab';
import {useState} from 'react';

const meta = {
  title: 'Components/StepperTab',
  component: StepperTab,
  tags: ['autodocs'],
} satisfies Meta<typeof StepperTab>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = ({steps, orientation, activeStep: initialStep}: StepperTabProps) => {
  const [activeStep, setActiveStep] = useState(initialStep);
  const nextStep = () => setActiveStep(prev => (prev < steps.length - 1 ? prev + 1 : prev));
  const prevStep = () => setActiveStep(prev => (prev === 0 ? prev : prev - 1));

  return (
    <>
      <StepperTab steps={steps} activeStep={activeStep} orientation={orientation} />
      <Grid item container spacing={2} justifyContent="space-between" sx={{marginTop: 1}}>
        <Grid item>
          <Button variant="outlined" onClick={prevStep} disabled={activeStep === 0}>
            Previous
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" onClick={nextStep} disabled={activeStep === steps.length - 1}>
            Next
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

const StepperTabTemplate: Omit<Story, 'args'> = {
  render: Template,
};

export const DefaultStepperTab: Story = {
  ...StepperTabTemplate,
  name: 'Default',
  args: {
    activeStep: 0,
    steps: ['Step 1', 'Step 2', 'Step 3'],
  },
};
