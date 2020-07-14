import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { getFullAddress } from '../../../functions/axios';
import { addAddress } from '../../../functions/axios';

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

const EditAddress = () => {
  const classes = useStyles();

  const history = useHistory();

  const [address, setAddress] = useState({});
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    street: address.name || '',
    number: address.email || '',
    neighbourhood: address.cpf || '',
    city: address.city || '',
    state: address.state || '',
    complement: address.complement || '',
  });

  useEffect(() => {
    (async () => {
      const res = await getFullAddress();
      setAddress(res);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    setForm({
      street: address.street || '',
      number: address.number || '',
      neighbourhood: address.neighbourhood || '',
      city: address.city || '',
      state: address.state || '',
      complement: address.complement || '',
    });
  }, [address]);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleBackIcon = () => {
    history.replace('/orders');
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const response = await addAddress(form);
    if (response.token) {
      window.localStorage.setItem('labefood', JSON.stringify(response));
      history.replace('/orders');
    } else {
      console.log(response.message);
    }
  };

  return (
    <Container style={{ height: '100vh', padding: 0 }} maxWidth='md'>
      <AppBar color='transparent' elevation={1}>
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
            Editar Endereço
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Para Espaçamento */}
      <Toolbar />

      <Grid container>
        <Grid item xs={12}>
          {loading ? (
            <Typography
              style={{
                marginTop: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Carregando...
            </Typography>
          ) : (
            <form
              onSubmit={handleFormSubmit}
              className={classes.form}
              style={{ padding: '1rem' }}
            >
              <TextFieldWrapper
                style={{ borderRadius: '0px', marginBottom: '0.5rem' }}
                onChange={handleFormChange}
                value={form.street}
                variant='outlined'
                margin='normal'
                required
                fullWidth
                label='Logradouro'
                placeholder='Rua Exemplo'
                name='street'
                type='text'
              />
              <TextFieldWrapper
                style={{ borderRadius: '0px', marginBottom: '0.5rem' }}
                onChange={handleFormChange}
                value={form.number}
                variant='outlined'
                margin='normal'
                required
                fullWidth
                label='Número'
                placeholder='00'
                name='number'
                type='text'
              />
              <TextFieldWrapper
                style={{ borderRadius: '0px', marginBottom: '0.5rem' }}
                onChange={handleFormChange}
                value={form.complement}
                variant='outlined'
                margin='normal'
                required
                fullWidth
                label='Complemento'
                placeholder='Apto. / Bloco'
                name='complement'
                type='text'
              />
              <TextFieldWrapper
                style={{ borderRadius: '0px', marginBottom: '0.5rem' }}
                onChange={handleFormChange}
                value={form.neighbourhood}
                variant='outlined'
                margin='normal'
                required
                fullWidth
                label='Bairro'
                placeholder='Bairro Exemplo'
                name='neighbourhood'
                type='text'
              />
              <TextFieldWrapper
                style={{ borderRadius: '0px', marginBottom: '0.5rem' }}
                onChange={handleFormChange}
                value={form.city}
                variant='outlined'
                margin='normal'
                required
                fullWidth
                label='Cidade'
                placeholder='Cidade'
                name='city'
                type='text'
              />
              <TextFieldWrapper
                style={{ borderRadius: '0px', marginBottom: '0.5rem' }}
                onChange={handleFormChange}
                value={form.state}
                variant='outlined'
                margin='normal'
                required
                fullWidth
                label='Estado'
                placeholder='Estado'
                name='state'
                type='text'
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
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default EditAddress;
