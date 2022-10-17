import {Visibility, VisibilityOff} from '@mui/icons-material';
import {Box, Divider, Grid, IconButton, InputAdornment, Typography} from '@mui/material';
import {useFormik} from 'formik';
import axiosFactory from 'Helpers/axios';
import useAuth from 'Hooks/useAuth';
import {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import * as yup from 'yup';
import Button from '../Components/Button/Button';
import Input from '../Components/Input/Input';
import {getAppConfiguration} from '../Configuration';
import azurelogo from '../Images/azure_ad.png';
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
  const {doLogIn, loggedIn} = useAuth();
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
        data: data,
      };
      setFormCTALoading(true);
      const response = await axios(config);
      const responseData = response.data;
      doLogIn(responseData.accessToken, responseData.refreshToken);
      navigate(from, {replace: true});
    } catch (err) {
      console.log('error while login => ', err);
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
    if (loggedIn) {
      navigate('/', {replace: true});
    }
  }, []);
  return (
    <Box component="div" sx={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Grid container maxWidth="20em">
        <Grid item xs={12}>
          <Typography variant="caption" component="div" sx={{mt: 2, mb: 3}}>
            Please enter your details to login
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
              sx={{my: 2}}
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
        <Grid item xs={12} textAlign="center">
          <Button onClick={handleSubmit} variant="contained" sx={{my: 2}} isLoading={formCTALoading}>
            Login
          </Button>
          <Divider orientation="horizontal" flexItem>
            OR
          </Divider>
          <Button onClick={handleAzureLogin} variant="outlined" sx={{my: 2}} isLoading={azButtonLoading}>
            <img src={azurelogo} alt="Azure" width="30px" /> Continue With Azure AD
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
