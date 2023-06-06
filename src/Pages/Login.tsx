import {Box, Grid, Typography} from '@mui/material';
import arcLogo from 'Assets/ARC_logo.png';
import heroLogo from 'Assets/hero.jpg';
import Button from 'Components/Button';
import Form from 'Components/Forms/Form';
import FormInput from 'Components/Forms/FormInput';
import FormPasswordInput from 'Components/Forms/FormPasswordInput';
import useAuth from 'Hooks/useAuth';
import {LoginForm} from 'Providers/AuthProvider';
import {FormikHelpers} from 'formik';
import {useLocation, useNavigate} from 'react-router-dom';
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
  // const handleAzureLogin = async () => {
  //   try {
  //     setAzButtonLoading(true);
  //     const data = {
  //       client_id: clientId,
  //       client_secret: clientSecret,
  //     };
  //     const form = document.createElement('form');
  //     document.body.appendChild(form);
  //     form.method = 'post';
  //     form.action = `${appConfig.auth_api_base_url}/auth/azure`;
  //     for (const name in data) {
  //       const input = document.createElement('input');
  //       input.type = 'hidden';
  //       input.name = name;
  //       input.value = data[name];
  //       form.appendChild(input);
  //     }
  //     form.submit();
  //   } catch (err) {
  //     console.error('error while login using Azure => ', err);
  //     setAzButtonLoading(false);
  //   }
  // };

  return (
    <>
      <Grid container>
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
              {/* <Divider orientation="horizontal" flexItem>
                  You can also login via
                </Divider>
                <Button
                  size="small"
                  onClick={handleAzureLogin}
                  variant="outlined"
                  sx={{mt: 4, color: '#525252', borderColor: '#525252'}}
                  isLoading={azButtonLoading}
                >
                  <img src={azureLogo} alt="azure" width="30px" /> &nbsp; Continue With Azure AD
                </Button> */}
              {/* <Grid item xs={12} textAlign="center">
                <Typography variant="subtitle2" component="div" sx={{mt: 15}}>
                  I already have an account in ARC by SourceFuse, 
                </Typography>
              </Grid> */}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
