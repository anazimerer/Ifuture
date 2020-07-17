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
  height: 100vh;
  padding: 15px;
  display: grid;
  gap: 8px;
`;

export const AddressUser = styled.div`
  padding-top: 50px;
  padding-left: 15px;
  background: #e6e5e5;

  .gray {
    color: gray;
  }
`;

export const AddressRest = styled.div`

  .gray {
    color: gray;
  }
  .red {
    color: red;
  }
  .center {
    text-align: center;
  }
`;

export const ProductsList = styled.div`
  
`;



export const Payments = styled.div`
  display: flex;
  margin-bottom: 50px;
  flex-direction: column;
  font-family: Roboto;
`;

export const Frete = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Roboto;
  align-items: center;
  width: 100px;
`;

export const SubTotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Roboto;
`;
