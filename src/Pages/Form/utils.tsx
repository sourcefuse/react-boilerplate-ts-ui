import * as yup from 'yup';

const CONST_TWO = 2;
export interface FormI {
  salutation: {
    label: string;
    value: string;
  };
  firstName: string;
  lastName: string;
  education: string | null;
  hobby: string[];
  emailUpdates: string;
  dob: string | null;
  skills: string[];
  badge: string[];
  region: string;
}

export const initialValues: FormI = {
  salutation: {label: 'Mr', value: 'mr'},
  firstName: '',
  lastName: '',
  education: null,
  hobby: [],
  emailUpdates: 'yes',
  dob: null,
  skills: [],
  badge: [],
  region: '',
};

export const validationSchema = yup.object({
  salutation: yup.object().nullable().required('Salutation is required'),
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  education: yup.object().nullable().required('Education is required'),
  hobby: yup.array(),
  emailUpdates: yup.string().oneOf(['yes', 'no']),
  dob: yup.date().typeError('Please enter valid date').nullable().required('DOB is required'),
  skills: yup.array().of(yup.string()).min(CONST_TWO, 'Should have at least two skill'),
  badge: yup.array().of(yup.string()).min(1, 'Should have at least one badge'),
  region: yup.string().required('Region is required'),
});
