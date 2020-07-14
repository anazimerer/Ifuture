import styled from 'styled-components';
import { makeStyles } from "@material-ui/core/styles";

 export const useStyles = makeStyles((theme) => ({
  
  submit: {
    borderRadius: "0px",
    margin: theme.spacing(2, 0, 2),
    backgroundColor: "#e8222e",
    textTransform: "none",
    color: "black",
    "&:hover, &:focus": { backgroundColor: "red" },
  },
}));

export const ContainerCart = styled.div`
  border: 1px solid black;
  padding: 16px;
  display: grid;
  gap: 8px;
`;

export const CartList = styled.div`
  
  padding: 16px;
`;

export const SubTotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Roboto;
`;
