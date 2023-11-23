import {Box, Stack} from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from 'Components/Button/Button';
import PagePaper from 'Components/PagePaper';
import Form from 'Components/Forms/Form';
import {initialValues, validationSchema} from './utils';
import FormDropdown from 'Components/Forms/FormDropdown';
import FormInput from 'Components/Forms/FormInput';
import FormDatePicker from 'Components/Forms/FormDatePicker';
import FormRadioButton from 'Components/Forms/FormRadioButton';
import FormCheckbox from 'Components/Forms/FormCheckbox';
import FormToggleButton from 'Components/Forms/FormToggleButton';
import {FormikHelpers} from 'formik';

export default function FormPage() {
  return (
    <Stack direction="row">
      <Box sx={{flexGrow: 1}}>
        <PagePaper title="Form">
          <Form
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (val: typeof initialValues, actions: FormikHelpers<typeof initialValues>) => {
              actions.resetForm({
                values: initialValues,
              });
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={2}>
                <FormDropdown
                  id="salutation"
                  label="Salutation"
                  options={[
                    {label: 'Mr', value: 'mr'},
                    {label: 'Mrs', value: 'mrs'},
                    {label: 'Ms', value: 'ms'},
                  ]}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={5}>
                <FormInput id="firstName" label="First Name" />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={5}>
                <FormInput id="lastName" label="Last Name" />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormDatePicker id="dob" label="D.O.B" />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormDropdown
                  id="education"
                  label="Education"
                  options={[
                    {label: 'Graduation', value: 'graduation'},
                    {label: 'Post graduation', value: 'postGraduation'},
                    {label: 'Doctorate', value: 'doctorate'},
                  ]}
                  enableAutoComplete
                />
              </Grid>
              <Grid item xs={12}>
                <FormDropdown
                  id="hobby"
                  label="Hobby"
                  options={[
                    {label: 'Swimming', value: 'swimming'},
                    {label: 'Singing', value: 'singing'},
                    {label: 'Dancing', value: 'dancing'},
                  ]}
                  multiple
                />
              </Grid>
              <Grid item xs={12}>
                <FormRadioButton
                  id="emailUpdates"
                  options={[
                    {label: `I'm In`, value: 'yes'},
                    {label: `I'm Out`, value: 'no'},
                  ]}
                  label={'Opt in for email Updates'}
                />
              </Grid>
              <Grid item xs={12}>
                <FormCheckbox
                  id="skills"
                  options={[
                    {label: 'Frontend', value: 'frontend'},
                    {label: 'Backend', value: 'backend'},
                    {label: 'Devops', value: 'devops'},
                  ]}
                  label="Skills"
                  row
                />
              </Grid>
              <Grid item xs={12}>
                <FormCheckbox
                  id="region"
                  options={[
                    {label: 'North', value: 'North'},
                    {label: 'south', value: 'south'},
                    {label: 'East', value: 'east'},
                    {label: 'West', value: 'west'},
                  ]}
                  label="Region"
                  row
                  singleSelect
                />
              </Grid>
              <Grid item xs={12}>
                <FormToggleButton
                  id="badge"
                  options={[
                    {label: 'Badge1', value: 'badge1'},
                    {label: 'Badge2', value: 'badge2'},
                    {label: 'Badge3', value: 'badge3'},
                  ]}
                  label="Region"
                  row
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} justifyContent="flex-end" sx={{marginTop: 1}}>
              <Grid item>
                <Button type="reset" variant="outlined">
                  Reset
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Form>
        </PagePaper>
      </Box>
    </Stack>
  );
}
