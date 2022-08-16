import PagePaper from 'Components/PagePaper';
import StepperTab from 'Components/StepperTab/StepperTab';
import {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Billing from './Billing/Billing';
import Payment from './Payment/Payment';

const steps = ['Billing', 'Payment'];
const Checkout = () => {
  const {state} = useLocation();
  const {amount, type} = state || {};
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [billingData, setBillingData] = useState({});
  const nextStep = () => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  const prevStep = () => setActiveStep((prev) => (prev === 0 ? prev : prev - 1));

  useEffect(() => {
    if (!type || !amount) {
      navigate('/');
    }
  }, [amount, navigate, type]);

  return (
    <PagePaper title="Checkout">
      <StepperTab steps={steps} activeStep={activeStep} />
      {activeStep === 0 && <Billing nextStep={nextStep} billingData={billingData} setBillingData={setBillingData} />}
      {activeStep === 1 && <Payment prevStep={prevStep} amount={amount} type={type} />}
    </PagePaper>
  );
};

export default Checkout;
