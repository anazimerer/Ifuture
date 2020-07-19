import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  submit: {
    borderRadius: "0px",
    backgroundColor: "#e8222e",
    marginBottom: "1rem",
    margimTop: "1rem",

    textTransform: "none",
    color: "black",
    "&:hover, &:focus": { backgroundColor: "red" },
  },
}));

export const AddressUser = styled.div`
  padding-top: 50px;
  padding-left: 15px;
  background: #e6e5e5;

  .gray {
    color: gray;
  }
`;

export const ContainerCart = styled.div`
  height: 100%;
  padding: 15px;
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: calc(100vh - 10rem);
  gap: 8px;
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
  min-height: 4rem;
`;

export const ProductsList = styled.div``;

export const Frete = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Roboto;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;

export const SubTotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Roboto;
`;

export const Payments = styled.div`
  margin-top: 1.5rem;
  display: flex;
  margin-bottom: 50px;
  flex-direction: column;
  font-family: Roboto;
`;
