import * as yup from 'yup';

export const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  country: null,
  state: null,
  zipCode: '',
  terms: null,
  opt: [],
};

export const validationSchema = () => {
  return yup.object({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup.string().email('Please enter valid email address').required('Email is required'),
    address: yup.string().required('Address is required'),
    country: yup.object().nullable().required('Country is required'),
    state: yup.object().nullable().required('State is required'),
    zipCode: yup.string().required('Zip code is required'),
    terms: yup.bool().nullable().required('Please accept the terms and conditions'),
    opt: yup.array().of(yup.string()),
  });
};
