import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    padding: 0,
  },

  userListItem: {
    borderBottom: '1px solid #b8b8b8',
  },

  addressListItem: {
    backgroundColor: '#eeeeee',
  },

  listBox: {
    display: 'flex',
    flexDirection: 'column',
  },

  imgEditIcon: {
    width: '1.5rem',
    height: '1.5rem',
    objectFit: 'contain',
  },

  adressText: {
    color: '#b8b8b8',
  },

  ordersOutterGrid: {
    marginTop: '0',
    paddingLeft: '16px',
    paddingRight: '16px',
  },

  ordersInnerGrid: {
    paddingBottom: '2rem',
    marginTop: '0.5rem',
  },

  orderGridItem: {
    marginTop: '.5rem',
  },

  historyText: {
    fontSize: '1rem',
    letterSpacing: '-0.39px',
    padding: '0.5rem 0',
  },

  restaurantText: {
    color: '#e8222e',
    fontSize: '1rem',
    letterSpacing: '-0.39px',
  },

  dateText: {
    fontSize: '0.75rem',
    letterSpacing: '-0.29px',
    margin: '0.5rem 0',
  },

  totalPriceText: {
    fontSize: '1rem',
    fontWeight: 'bold',
    letterSpacing: '-0.29px',
  },

  noMargin: {
    margin: 0,
  },

  withBorderBottom: {
    borderBottom: '1px solid black',
  },

  withPadding: {
    padding: '1rem',
  },
}));
