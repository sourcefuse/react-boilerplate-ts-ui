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
import {ILoginForm} from 'redux/auth/authApiSlice';
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

  const handleSubmit = async (values: ILoginForm, {setSubmitting}: FormikHelpers<ILoginForm>) => {
    await login(values);
    handleNavigation();
    setSubmitting(false);
  };

  return (
    <Grid container data-testid="LoginPage" sx={{height: '100vh'}}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${heroLogo})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      <Grid item xs={12} sm={8} md={5}>
        <Box
          component="div"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            px: '15px',
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
                <FormInput id="username" label="Username" />
              </Grid>
              <Grid item xs={12} sx={{mt: 1}}>
                <FormPasswordInput id="password" label="Password" />
              </Grid>
              <Grid container item xs={12}>
                <Button
                  variant="contained"
                  sx={{mt: 2, mb: 4, borderRadius: 6, fontWeight: 'bold'}}
                  isLoading={loginLoading}
                  color="secondary"
                  type="submit"
                >
                  Login
                </Button>
              </Grid>
            </Form>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
