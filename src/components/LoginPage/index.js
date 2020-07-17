import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';

import { login } from '../../functions/axios';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import { TextFieldWrapper } from './styles';
import Logo from './logo.svg';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  submit: {
    borderRadius: '0px',
    margin: theme.spacing(2, 0, 2),
    backgroundColor: '#e8222e',
    textTransform: 'none',
    color: 'black',
    '&:hover, &:focus': { backgroundColor: 'red' },
  },
}));

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  const [form, handleFormChange] = useForm({ email: '', password: '' });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const response = await login(form);
    if (response.token) {
      localStorage.setItem('labefood', JSON.stringify(response));
      history.push('/restaurants');
    } else {
      window.alert(response.message);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <img src={Logo} alt='iFuture logo' />
        <Typography component='h1' style={{ marginTop: '2rem' }}>
          Entrar
        </Typography>
        <form className={classes.form} onSubmit={handleFormSubmit}>
          <TextFieldWrapper
            style={{ marginBottom: '0.5rem' }}
            onChange={handleFormChange}
            value={form.email}
            variant='outlined'
            margin='normal'
            required
            fullWidth
            label='E-mail'
            placeholder='email@email.com'
            name='email'
            type='email'
          />
          <FormControl
            variant='outlined'
            required
            fullWidth
            style={{ marginTop: '0.5rem' }}
          >
            <InputLabel htmlFor='login-password'>Senha</InputLabel>
            <OutlinedInput
              style={{ borderRadius: '2px' }}
              id='login-password'
              labelWidth={60}
              onChange={handleFormChange}
              value={form.password}
              required
              name='password'
              placeholder='Mínimo 6 caracteres'
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    edge='end'
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            style={{ borderRadius: '2px' }}
          >
            Entrar
          </Button>
        </form>
        <Typography
          onClick={() => history.push('/signup')}
          variant='body2'
          style={{ cursor: 'pointer' }}
        >
          Não possui cadastro? Clique aqui.
        </Typography>
      </div>
    </Container>
  );
};

export default LoginPage;
