import {Visibility, VisibilityOff} from '@mui/icons-material';
import {Box, Divider, Grid, IconButton, InputAdornment, Typography} from '@mui/material';
import Button from 'Components/Button';
import Input from 'Components/Input';
import {getAppConfiguration} from 'Configuration';
import {useFormik} from 'formik';
import axiosFactory from 'Helpers/axios';
import useAuth from 'Hooks/useAuth';
import arcLogo from 'Images/ARC_logo.png';
import azureLogo from 'Images/azure_ad.png';
import heroLogo from 'Images/hero.jpg';
import {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import * as yup from 'yup';

const initialState = {
  username: '',
  password: '',
};

const formValidation = yup.object().shape({
  username: yup.string().required('UserName is Required'),
  password: yup.string().required('Password is Required'),
});

const appConfig = getAppConfiguration();
const clientId = appConfig.client_id;
const clientSecret = appConfig.client_secret;
const Login = () => {
  const {doLogIn, isLoggedIn} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const submitLogin = async (formValue) => {
    try {
      const data = JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        ...formValue,
      });
      const axios = axiosFactory(appConfig.auth_api_base_url);
      const config = {
        method: 'post',
        url: '/auth/login-token',
        data,
      };
      setFormCTALoading(true);
      const response = await axios(config);
      const responseData = response.data;
      doLogIn(responseData.accessToken, responseData.refreshToken);
      navigate(from, {replace: true});
    } catch (err) {
      console.error('error while login => ', err);
      setFormCTALoading(false);
    }
  };
  const {errors, touched, values, handleSubmit, handleChange} = useFormik({
    initialValues: {...initialState},
    validationSchema: formValidation,
    onSubmit: submitLogin,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [azButtonLoading, setAzButtonLoading] = useState(false);
  const [formCTALoading, setFormCTALoading] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const locationState = location.state as {from: {pathname: string | null} | null};
  const from = locationState?.from?.pathname ?? '/';
  const handleAzureLogin = async () => {
    try {
      setAzButtonLoading(true);
      const data = {
        client_id: clientId,
        client_secret: clientSecret,
      };
      const form = document.createElement('form');
      document.body.appendChild(form);
      form.method = 'post';
      form.action = `${appConfig.auth_api_base_url}/auth/azure`;
      for (const name in data) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = data[name];
        form.appendChild(input);
      }
      form.submit();
    } catch (err) {
      console.error('error while login using Azure => ', err);
      setAzButtonLoading(false);
    }
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/', {replace: true});
    }
  }, []);
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
              <Grid item xs={12}>
                <Box component="form" noValidate>
                  <Input
                    id="username"
                    label="Email or Username"
                    value={values?.username}
                    isTouched={!!touched?.username}
                    errorMessage={errors?.username as string}
                    onChange={handleChange}
                    sx={{my: 2, color: '#525252'}}
                  />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={values?.password}
                    isTouched={!!touched?.password}
                    errorMessage={errors?.password as string}
                    label="Password"
                    onChange={handleChange}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          size="large"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    sx={{my: 2}}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} textAlign="left">
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  sx={{mt: 2, mb: 4, background: '#F4001F', borderRadius: 6}}
                  isLoading={formCTALoading}
                >
                  SUBMIT
                </Button>
                <Divider orientation="horizontal" flexItem>
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
                </Button>
              </Grid>
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
