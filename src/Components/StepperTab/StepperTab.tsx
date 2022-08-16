import {Step, StepConnector, StepLabel, Stepper, StepperProps, styled} from '@mui/material';
import React, {memo} from 'react';

interface Props {
  activeStep: number;
  steps: Array<any>;
  orientation?: StepperProps['orientation'];
}
const Connector = styled(
  StepConnector,
  {},
)(({theme}) => ({
  flex: 'none',
  '& .MuiStepConnector-line': {
    borderTopWidth: 3,
    width: 100,
    borderRadius: 1,
  },
}));

const activeColor = 'primary.main';

const StepperTab: React.FC<Props> = ({steps = [], activeStep, orientation = 'horizontal'}) => {
  return (
    <Stepper
      orientation={orientation}
      activeStep={activeStep}
      connector={<Connector />}
      sx={{
        marginBottom: 2,
        padding: 2,
        background: (theme) => (theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[700]),
        borderRadius: 1,
        justifyContent: 'center',
        '& .Mui-completed , .Mui-active': {
          '& .MuiStepConnector-line': {
            borderColor: activeColor,
          },
        },
      }}
    >
      {steps.map((label, index) => {
        return (
          <Step key={`${label}-${index}`}>
            <StepLabel
              sx={{
                '& .MuiStepLabel-iconContainer': {
                  '& .MuiStepIcon-root': {
                    color: 'white',
                    border: '1px solid black',
                    borderRadius: '100%',
                    '& text': {
                      fill: 'none',
                    },
                  },
                  '& .Mui-active': {
                    border: '6.5px solid',
                    borderColor: activeColor,
                  },
                  '& .Mui-completed ': {
                    color: activeColor,
                    border: 'none',
                  },
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};

export default memo(StepperTab);
