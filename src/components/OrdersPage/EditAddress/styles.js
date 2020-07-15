import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    padding: 0,
  },
  loadingText: {
    marginTop: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '100%',
    padding: '1rem',
  },
  formText: {
    borderRadius: '0px',
    marginBottom: '0.5rem',
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
