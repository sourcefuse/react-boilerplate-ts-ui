import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from 'Components/Button/Button';
import RadioButton from 'Components/RadioButton/RadioButton';
import {useState} from 'react';
import usePayment from './usePayment';

export enum PaymentType {
  RazorPay = 'razorpay',
  Stripe = 'stripe',
}

export enum PlanType {
  Orders = 'orders',
  Subscription = 'subscription',
}

const options = [
  {label: `Pay with Razorpay`, value: PaymentType.RazorPay},
  {label: `Pay with Stripe`, value: PaymentType.Stripe},
];

type Payload = {
  totalAmount: number;
  status: string;
  paymentGatewayId: string;
  paymentmethod: PaymentType;
  currency: string;
  planId?: string;
  startDate?: string;
  endDate?: string;
};

const Payment = ({prevStep, amount, type}: {prevStep: () => void; amount: number; type: string}) => {
  const url =
    type === PlanType.Orders ? process.env.REACT_APP_ORDERS_API_PATH : process.env.REACT_APP_SUBSCRIPTION_API_PATH;

  const {submitForm, isLoading} = usePayment(url!);
  const [paymentMethod, setPaymentMethod] = useState(PaymentType.RazorPay);

  const handlePayment = async () => {
    let payload: Payload = {
      totalAmount: amount,
      status: 'draft',
      paymentGatewayId: '', // payment gateway id from database
      paymentmethod: paymentMethod,
      currency: 'INR',
    };
    if (type === PlanType.Subscription) {
      payload = {
        ...payload,
        planId: '', // plan id from razorpay
        startDate: '', // Date in YYYY-MM-DD
        endDate: '', // Date in YYYY-MM-DD
      };
    }
    const response = await submitForm(payload);
    if (response?.request?.responseURL) {
      window.location.href = response.request.responseURL;
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item container xs={12} justifyContent="space-between" sx={{marginBottom: 2}}>
        <Typography sx={{fontWeight: 'bold'}}>
          {type === PlanType.Orders ? 'Payable amount :' : 'Monthly subscription payment :'}
        </Typography>
        <Typography sx={{fontWeight: 'bold'}}>₹ {amount?.toFixed(2)}</Typography>
      </Grid>
      <Grid item xs={12}>
        <RadioButton
          id="paymentMethod"
          value={paymentMethod}
          onChange={setPaymentMethod}
          options={options}
          label={'Select payment method'}
        />
      </Grid>
      <Grid item container spacing={2} justifyContent="space-between" sx={{marginTop: 1}}>
        <Grid item>
          <Button type="button" variant="outlined" onClick={prevStep}>
            Previous
          </Button>
        </Grid>
        <Grid item>
          <Button isLoading={isLoading} variant="outlined" onClick={handlePayment}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Payment;
