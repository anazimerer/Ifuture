import React from 'react';
import { useHistory } from 'react-router-dom';

import useForm from '../../../hooks/useForm';

import { updateProfile } from '../../../functions/axios';

import { makeStyles } from '@material-ui/core/styles';

import styled from 'styled-components';

import {
  Container,
  AppBar,
  Toolbar,
  Grid,
  Typography,
  IconButton,
  TextField,
  Button,
} from '@material-ui/core';

import backIcon from '../../../img/back.svg';

export const TextFieldWrapper = styled(TextField)`
  fieldset {
    border-radius: 0px;
  }
`;

const useStyles = makeStyles((theme) => ({
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
    fontSize: '1rem',
    letterSpacing: '-0.39px',
  },
}));

const EditUser = () => {
  const classes = useStyles();

  const history = useHistory();

  const user = JSON.parse(window.localStorage.getItem('labefood')).user;

  const [form, handleFormChange] = useForm({
    name: user.name,
    email: user.email,
    cpf: user.cpf,
  });

  const handleCPFChange = (event) => {
    handleFormChange(event);
  };

  const handleBackIcon = () => {
    history.replace('/orders');
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const response = await updateProfile(form);
    if (response.hasAddress) {
      const labefood = JSON.parse(window.localStorage.getItem('labefood'));
      const { user } = labefood;

      const updatedUser = {
        ...user,
        name: response.name,
        email: response.email,
        cpf: response.cpf,
      };
      const updatedLabefood = { ...labefood, user: updatedUser };

      window.localStorage.setItem('labefood', JSON.stringify(updatedLabefood));
      history.replace('/orders');
    } else {
      console.log(response.message);
    }
  };

  return (
    <Container style={{ height: '100vh', padding: 0 }} maxWidth='md'>
      <AppBar color='secundary' elevation={1}>
        <Toolbar>
          <IconButton onClick={handleBackIcon}>
            <img
              src={backIcon}
              alt='Go Back'
              style={{
                width: '1.44rem',
                height: '1.5rem',
                objectFit: 'contain',
              }}
            />
          </IconButton>
          <Typography
            style={{ margin: '0 auto', transform: 'translateX(-23.5px)' }}
          >
            Editar Perfil
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Para Espaçamento */}
      <Toolbar />

      <Grid container>
        <Grid item xs={12}>
          <form
            onSubmit={handleFormSubmit}
            className={classes.form}
            style={{ padding: '1rem' }}
          >
            <TextFieldWrapper
              style={{ borderRadius: '0px', marginBottom: '0.5rem' }}
              onChange={handleFormChange}
              value={form.name}
              variant='outlined'
              margin='normal'
              required
              fullWidth
              label='Nome'
              placeholder='Nome e sobrenome'
              name='name'
              type='text'
            />
            <TextFieldWrapper
              style={{ borderRadius: '0px', marginBottom: '0.5rem' }}
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
            <TextFieldWrapper
              style={{ borderRadius: '0px', marginBottom: '0.5rem' }}
              onChange={handleCPFChange}
              value={form.cpf}
              variant='outlined'
              margin='normal'
              required
              fullWidth
              label='CPF'
              placeholder='000.000.000-00'
              name='cpf'
              type='text'
              // inputProps={{ pattern: "[2]{11}" }}
            />

            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Salvar
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EditUser;
