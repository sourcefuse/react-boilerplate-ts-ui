import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Button from 'Components/Button/Button';
import Checkbox from 'Components/Checkbox/Checkbox';
import Dropdown from 'Components/Dropdown/Dropdown';
import Input from 'Components/Input/Input';
import {useFormik} from 'formik';
import PropTypes from 'prop-types';
import {initialValues, validationSchema} from './utils';

const Billing = ({nextStep, billingData, setBillingData}) => {
  const {errors, touched, values, handleSubmit, handleChange} = useFormik({
    initialValues: {...initialValues, ...billingData},
    validationSchema,
    onSubmit: async (val) => {
      nextStep();
      setBillingData(val);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Input
            id="firstName"
            label="First Name"
            value={values?.firstName}
            isTouched={touched?.firstName}
            errorMessage={errors?.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Input
            id="lastName"
            label="Last Name"
            value={values?.lastName}
            isTouched={touched?.lastName}
            errorMessage={errors?.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            id="email"
            label="Email"
            value={values?.email}
            isTouched={touched?.email}
            errorMessage={errors?.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            id="address"
            label="Address"
            value={values?.address}
            isTouched={touched?.address}
            errorMessage={errors?.address}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Dropdown
            id="country"
            label="Country"
            value={values?.country}
            isTouched={!!touched?.country}
            errorMessage={errors?.country}
            options={[{label: 'India', value: 'india'}]}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Dropdown
            id="state"
            label="State"
            value={values?.state}
            isTouched={!!touched?.state}
            errorMessage={errors?.state}
            options={[
              {label: 'Punjab', value: 'punjab'},
              {label: 'Kerala', value: 'kerala'},
            ]}
            onChange={handleChange}
            disabled={!!errors?.country}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Input
            id="zipCode"
            label="Zip code"
            value={values?.zipCode}
            isTouched={touched?.zipCode}
            errorMessage={errors?.zipCode}
            onChange={handleChange}
          />
        </Grid>
        <Divider sx={{marginBottom: 2}} />
        <Grid item xs={12}>
          <Checkbox
            id="terms"
            value={values?.terms}
            onChange={handleChange}
            options={[{label: 'I accept the terms and conditions', value: true}]}
            isTouched={!!touched?.terms}
            errorMessage={errors?.terms}
            singleSelect
          />
        </Grid>
        <Grid item xs={12}>
          <Checkbox
            id="opt"
            value={values?.opt}
            onChange={handleChange}
            options={[
              {label: 'Save this information for next time', value: 'saveInfo'},
              {label: 'Subscribe to the newsletter', value: 'subscribe'},
            ]}
            isTouched={!!touched?.opt}
            errorMessage={errors?.opt}
          />
        </Grid>
        <Divider sx={{marginBottom: 2}} />
        <Grid container spacing={2} justifyContent="flex-end" sx={{marginTop: 1}}>
          <Grid item>
            <Button variant="outlined" type="submit">
              Next
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

Billing.propTypes = {
  nextStep: PropTypes.func.isRequired,
  billingData: PropTypes.object.isRequired,
  setBillingData: PropTypes.func.isRequired,
};

export default Billing;
