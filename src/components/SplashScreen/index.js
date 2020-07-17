import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Grow } from '@material-ui/core';

import logoIcon from '../../img/logo.svg';

const SplashScreen = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.replace('/login');
    }, 3000);
  }, [history]);

  return (
    <Container
      style={{
        height: '100vh',
        padding: 0,
        backgroundColor: '#e8222e',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      maxWidth='md'
    >
      <Grow in={true} timeout={1500}>
        <img src={logoIcon} alt='ifuture' />
      </Grow>
    </Container>
  );
};

export default SplashScreen;
