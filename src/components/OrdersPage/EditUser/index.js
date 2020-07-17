import React from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../Header';

import useForm from '../../../hooks/useForm';

import { updateProfile } from '../../../functions/axios';

import { Container, Toolbar, Grid, TextField, Button } from '@material-ui/core';

import { useStyles } from './styles';

const EditUser = () => {
  const history = useHistory();

  const classes = useStyles();

  const user = JSON.parse(window.localStorage.getItem('labefood')).user;

  const [form, handleFormChange] = useForm({
    name: user.name,
    email: user.email,
    cpf: user.cpf,
  });

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
    <Container maxWidth='md' className={classes.container}>
      <Header back={true} title='Editar Perfil' />

      {/* Para Espaçamento */}
      <Toolbar />

      <Grid container>
        <Grid item xs={12}>
          <form onSubmit={handleFormSubmit} className={classes.form}>
            <TextField
              className={classes.formText}
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
            <TextField
              className={classes.formText}
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
            <TextField
              className={classes.formText}
              onChange={handleFormChange}
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
