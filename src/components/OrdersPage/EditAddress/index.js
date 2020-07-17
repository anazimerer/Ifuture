import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../Header';

import { getFullAddress } from '../../../functions/axios';
import { addAddress } from '../../../functions/axios';

import {
  Container,
  Toolbar,
  Grid,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';

import { useStyles } from './styles';

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
    <Container maxWidth='md' className={classes.container}>
      <Header back={true} title='Editar Perfil' />

      {/* Para Espaçamento */}
      <Toolbar />

      <Grid container>
        <Grid item xs={12}>
          {loading ? (
            <Typography className={classes.loadingText}>
              Carregando...
            </Typography>
          ) : (
            <form onSubmit={handleFormSubmit} className={classes.form}>
              <TextField
                className={classes.formText}
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
              <TextField
                className={classes.formText}
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
              <TextField
                className={classes.formText}
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
              <TextField
                className={classes.formText}
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
              <TextField
                className={classes.formText}
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
              <TextField
                className={classes.formText}
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
