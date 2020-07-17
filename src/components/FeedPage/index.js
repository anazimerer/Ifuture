import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import Header from "../Header";
import Footer from "../Footer";
import Menu from './menu'
import { getRestaurants } from '../../functions/axios';

import { makeStyles } from "@material-ui/core/styles";

import {
  CardActionArea,
  CardContent,
  Typography ,
  TextField,
  CardMedia ,
  Container,
  Card
}
from "@material-ui/core";

import {
  TitleBarContainer,
  InfoContainer,
  Form,
  Title,
} from './styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    border: "1px solid #b8b8b8",
    marginBottom: "2vh",
    boxShadow: "none",
    borderRadius: "10px",
  },

  title: {
    fontSize: '1rem',
    color: '#e8222e',
    fontFamily: 'Roboto, sans-serif',
    letterSpacing: '-0.39px',
  },

  description: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'space-between'
  },

  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },

  content: {
    fontSize: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    color: '#b8b8b8',
  }
});

const FeedPage = () => {
  const history = useHistory();
  const classes = useStyles();
  const [restaurants, setRestaurants] = useState([]);
  const title = 'Ifuture'
  const getTheRestaurants = () => {(async () => {		
    const response= await getRestaurants()
    setRestaurants(response)	
    })()}

  useEffect(() => {
    getTheRestaurants()
  }, [setRestaurants]);

  return (
    <>
      <Container maxWidth="xs">
        <Header title={title} />
          <TextField variant="outlined"
            style={{
              marginTop: '3rem',
              marginBottom: '0.5rem',
              width: '20.5rem',
              height: '3.5rem',
            }} />
            <Menu restaurants={restaurants} />
              {restaurants.map(rest => {
                return(
                  <Card key={rest.id} className={classes.root}>
                    <CardActionArea
                      onClick = { ( () => { history.push (`/restaurants/${rest.id}`) } ) }>
                    <CardMedia
                      component="img"
                      alt={rest.name}
                      height="140"
                      image={rest.logoUrl}
                      title={rest.name}
                    />
                  <CardContent>
                    <Typography className={classes.title}>
                      {rest.name}
                    </Typography>
                  </CardContent>
                  <CardContent className={classes.content}>
                    <Typography component="span"> {rest.deliveryTime} min </Typography>
                    <Typography component="span">Frete R${rest.shipping},00 </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            )
          })}
        <Footer />
      </Container>
    </>
  );
};

export default FeedPage;
