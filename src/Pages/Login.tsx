import {Box, Grid, Typography} from '@mui/material';
import arcLogo from 'Assets/ARC_logo.png';
import heroLogo from 'Assets/hero.jpg';
import Button from 'Components/Button';
import Form from 'Components/Forms/Form';
import FormInput from 'Components/Forms/FormInput';
import FormPasswordInput from 'Components/Forms/FormPasswordInput';
import useAuth from 'Hooks/useAuth';
import {FormikHelpers} from 'formik';
import {useLocation, useNavigate} from 'react-router-dom';
import type {LoginForm} from 'redux/auth/authApiSlice';
import * as yup from 'yup';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object({
  username: yup.string().required().label('UserName'),
  password: yup.string().required().label('Password'),
});

const Login = () => {
  const {login, loginLoading} = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleNavigation = () => {
    navigate(from, {replace: true});
  };

  const handleSubmit = async (values: LoginForm, {setSubmitting}: FormikHelpers<LoginForm>) => {
    await login(values);
    handleNavigation();
    setSubmitting(false);
  };

  return (
    <>
      <Grid container data-testid="LoginPage">
        <Grid item xs={8}>
          <Box
            component="img"
            sx={{
              height: '99.2vh',
              width: '100%',
            }}
            src={heroLogo}
            alt="hero"
          />
        </Grid>
        <Grid item xs={4}>
          <Box
            component="div"
            sx={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Grid container maxWidth="25em">
              <Box
                component="img"
                sx={{
                  width: 'auto',
                }}
                src={arcLogo}
                alt="hero"
              />
              <Grid item xs={12}>
                <Typography variant="h4" sx={{mt: 13}}>
                  <b> Welcome to ARC </b>
                </Typography>
                <Typography variant="h4" sx={{mb: 1}}>
                  <b> by SourceFuse </b>
                </Typography>
                <Typography variant="subtitle2" component="div" sx={{mt: 2, mb: 3, color: '#525252'}}>
                  <i>Cut down your application development process to 60%,</i> with a huge amount of components & APIs.
                  Create your account now!
                </Typography>
              </Grid>
              <Form initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                <Grid item xs={12}>
                  <FormInput id="username" label="UserName" />
                </Grid>
                <Grid item xs={12} sx={{mt: 1}}>
                  <FormPasswordInput id="password" label="Password" />
                </Grid>
                <Grid container item xs={12}>
                  <Button
                    variant="contained"
                    sx={{mt: 2, mb: 4, borderRadius: 6}}
                    isLoading={loginLoading}
                    color="secondary"
                    type="submit"
                  >
                    SUBMIT
                  </Button>
                </Grid>
              </Form>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
