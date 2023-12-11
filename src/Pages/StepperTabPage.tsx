import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from 'Components/Button/Button';
import ComponentViewer from 'Components/ComponentViewer';
import PagePaper from 'Components/PagePaper';
import PropsTable from 'Components/PropsTable';
import StepperTab from 'Components/StepperTab/StepperTab';
import {useState} from 'react';
import ScreenAwareTOC from 'Components/ScreenAwareTOC';

const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4'];
const StepperTabPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const nextStep = () => setActiveStep(prev => (prev < steps.length - 1 ? prev + 1 : prev));
  const prevStep = () => setActiveStep(prev => (prev === 0 ? prev : prev - 1));

  return (
    <Stack direction="row">
      <Box sx={{flexGrow: 1, maxWidth: '99vw'}}>
        <PagePaper title="StepperTab">
          <ComponentViewer
            title="Default Stepper"
            code={`import Grid from '@mui/material/Grid';
import Button from 'Components/Button/Button';
import ComponentPaper from 'Components/ComponentPaper';
import PagePaper from 'Components/PagePaper';
import StepperTab from 'Components/StepperTab/StepperTab';
import {useState} from 'react';

const steps = ['Step 1', 'Step 2', 'Step 3'];
const StepperTabPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const nextStep = () => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  const prevStep = () => setActiveStep((prev) => (prev === 0 ? prev : prev - 1));

  return (
    <PagePaper title="StepperTab">
      <ComponentPaper>
        <StepperTab steps={steps} activeStep={activeStep} />
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
      </ComponentPaper>
    </PagePaper>
  );
};

export default StepperTabPage;`}
          >
            <Box sx={{w: 1}}>
              <StepperTab steps={steps} activeStep={activeStep} />
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
            </Box>
          </ComponentViewer>
          <PropsTable
            data={[
              {name: 'steps', type: 'string[]', desc: 'Array containing the step names'},
              {name: 'activeStep', type: 'number'},
            ]}
          />
        </PagePaper>
      </Box>
      <ScreenAwareTOC />
    </Stack>
  );
};

export default StepperTabPage;
