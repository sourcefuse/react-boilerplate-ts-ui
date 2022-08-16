import Grid from '@mui/material/Grid';
import Button from 'Components/Button/Button';
import Checkbox from 'Components/Checkbox/Checkbox';
import DatePicker from 'Components/DatePicker/DatePicker';
import Dropdown from 'Components/Dropdown/Dropdown';
import Input from 'Components/Input/Input';
import PagePaper from 'Components/PagePaper';
import RadioButton from 'Components/RadioButton/RadioButton';
import ToggleButton from 'Components/Toggle/ToggleButton';
import {useFormik} from 'formik';
import React from 'react';
import useForm from './useForm';
import {initialValues, validationSchema} from './utils';

export default function Form() {
  const {submitForm, isLoading} = useForm();
  const {errors, touched, values, handleSubmit, handleChange, resetForm} = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (val) => {
      await submitForm(val);
      resetForm();
    },
  });

  return (
    <PagePaper title="Form">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={2}>
            <Dropdown
              id="salutation"
              label="Salutation"
              value={values?.salutation}
              isTouched={!!touched?.salutation}
              errorMessage={errors?.salutation}
              options={[
                {label: 'Mr', value: 'mr'},
                {label: 'Mrs', value: 'mrs'},
                {label: 'Ms', value: 'ms'},
              ]}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={5}>
            <Input
              id="firstName"
              label="First Name"
              value={values?.firstName}
              isTouched={touched?.firstName}
              errorMessage={errors?.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={5}>
            <Input
              id="lastName"
              label="Last Name"
              value={values?.lastName}
              isTouched={touched?.lastName}
              errorMessage={errors?.lastName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <DatePicker
              id="dob"
              value={values?.dob}
              onChange={handleChange}
              errorMessage={errors?.dob}
              isTouched={touched?.dob}
              label="D.O.B"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Dropdown
              id="education"
              label="Education"
              value={values?.education}
              isTouched={!!touched?.education}
              errorMessage={errors?.education}
              options={[
                {label: 'Graduation', value: 'graduation'},
                {label: 'Post graduation', value: 'postGraduation'},
                {label: 'Doctorate', value: 'doctorate'},
              ]}
              onChange={handleChange}
              enableAutoComplete
            />
          </Grid>
          <Grid item xs={12}>
            <Dropdown
              id="hobby"
              label="Hobby"
              value={values?.hobby}
              isTouched={!!touched?.hobby}
              errorMessage={errors.hobby}
              options={[
                {label: 'Swimming', value: 'swimming'},
                {label: 'Singing', value: 'singing'},
                {label: 'Dancing', value: 'dancing'},
              ]}
              onChange={handleChange}
              multiple
            />
          </Grid>
          <Grid item xs={12}>
            <RadioButton
              id="emailUpdates"
              value={values?.emailUpdates}
              onChange={handleChange}
              options={[
                {label: `I'm In`, value: 'yes'},
                {label: `I'm Out`, value: 'no'},
              ]}
              label={'Opt in for email Updates'}
            />
          </Grid>
          <Grid item xs={12}>
            <Checkbox
              id="skills"
              value={values?.skills}
              onChange={handleChange}
              options={[
                {label: 'Frontend', value: 'frontend'},
                {label: 'Backend', value: 'backend'},
                {label: 'Devops', value: 'devops'},
              ]}
              isTouched={!!touched?.skills}
              label="Skills"
              errorMessage={errors?.skills}
              row
            />
          </Grid>
          <Grid item xs={12}>
            <Checkbox
              id="region"
              value={values?.region}
              onChange={handleChange}
              options={[
                {label: 'North', value: 'North'},
                {label: 'south', value: 'south'},
                {label: 'East', value: 'east'},
                {label: 'West', value: 'west'},
              ]}
              isTouched={!!touched?.region}
              label="Region"
              errorMessage={errors?.region}
              row
              singleSelect
            />
          </Grid>
          <Grid item xs={12}>
            <ToggleButton
              id="badge"
              value={values?.badge}
              onChange={handleChange}
              options={[
                {label: 'Badge1', value: 'badge1'},
                {label: 'Badge2', value: 'badge2'},
                {label: 'Badge3', value: 'badge3'},
              ]}
              isTouched={!!touched?.badge}
              label="Region"
              errorMessage={errors?.badge}
              row
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="flex-end" sx={{marginTop: 1}}>
          <Grid item>
            <Button type="button" color="primary" variant="outlined" onClick={resetForm}>
              Reset
            </Button>
          </Grid>
          <Grid item>
            <Button isLoading={isLoading} variant="outlined" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </PagePaper>
  );
}
