import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from 'Components/Button/Button';
import RadioButton from 'Components/RadioButton/RadioButton';
import PropTypes from 'prop-types';
import {useState} from 'react';
import usePayment from './usePayment';

const options = [
  {label: `Pay with Razorpay`, value: 'razorpay'},
  {label: `Pay with Stripe`, value: 'stripe'},
];

const Payment = ({prevStep, amount, type}) => {
  const url = type === 'orders' ? process.env.REACT_APP_ORDERS_API_PATH : process.env.REACT_APP_SUBSCRIPTION_API_PATH;

  const {submitForm, isLoading} = usePayment(url);
  const [paymentMethod, setPaymentMethod] = useState('razorpay');

  const handlePayment = async () => {
    let payload = {
      totalAmount: amount,
      status: 'draft',
      paymentGatewayId: '', // payment gateway id from database
      paymentmethod: paymentMethod,
      currency: 'INR',
    };
    if (type === 'subscription') {
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
          {type === 'orders' ? 'Payable amount :' : 'Monthly subscription payment :'}
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
          returnValue
        />
      </Grid>
      <Grid item container spacing={2} justifyContent="space-between" sx={{marginTop: 1}}>
        <Grid item>
          <Button type="button" color="primary" variant="outlined" onClick={prevStep}>
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

Payment.propTypes = {
  prevStep: PropTypes.func.isRequired,
  amount: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default Payment;
