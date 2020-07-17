import React from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";

import { addAddress } from "../../functions/axios";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { TextFieldWrapper } from "./styles";

import Header from "../Header";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
  },
  submit: {
    borderRadius: "0px",
    margin: theme.spacing(2, 0, 2),
    backgroundColor: "#e8222e",
    textTransform: "none",
    color: "black",
    "&:hover, &:focus": { backgroundColor: "red" },
  },
}));

const AddressPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [form, handleFormChange] = useForm({
    street: "",
    number: "",
    complement: "",
    password: "",
    neighbourhood: "",
    city: "",
    state: "",
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const response = await addAddress(form);
    if (response.token) {
      localStorage.setItem("labefood", JSON.stringify(response));
      history.push("/restaurants");
    } else {
      window.alert(response.message);
    }
  };

  const handleNumberChange = (event) => {
    const re = /[^0-9]/g;
    event.target.value = event.target.value.replace(re, "");
    handleFormChange(event);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Header back />

      <div className={classes.paper}>
        <Typography component="h1" style={{ marginTop: "0.5rem" }}>
          Meu endereço
        </Typography>
        <form className={classes.form} onSubmit={handleFormSubmit}>
          <TextFieldWrapper
            style={{ borderRadius: "0px", marginBottom: "0.5rem" }}
            onChange={handleFormChange}
            value={form.street}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Logradouro"
            placeholder="Rua / Av."
            name="street"
            type="text"
          />
          <TextFieldWrapper
            style={{ borderRadius: "0px", marginBottom: "0.5rem" }}
            onChange={handleNumberChange}
            value={form.number}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Número"
            placeholder="Número"
            name="number"
            type="text"
          />
          <TextFieldWrapper
            style={{ borderRadius: "0px", marginBottom: "0.5rem" }}
            onChange={handleFormChange}
            value={form.complement}
            variant="outlined"
            margin="normal"
            fullWidth
            label="Complemento"
            placeholder="Apto. / Bloco"
            name="complement"
            type="text"
          />
          <TextFieldWrapper
            style={{ borderRadius: "0px", marginBottom: "0.5rem" }}
            onChange={handleFormChange}
            value={form.neighbourhood}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Bairro"
            placeholder="Bairro"
            name="neighbourhood"
            type="text"
          />
          <TextFieldWrapper
            style={{ borderRadius: "0px", marginBottom: "0.5rem" }}
            onChange={handleFormChange}
            value={form.city}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Cidade"
            placeholder="Cidade"
            name="city"
            type="text"
          />
          <TextFieldWrapper
            style={{ borderRadius: "0px", marginBottom: "0.5rem" }}
            onChange={handleFormChange}
            value={form.state}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Estado"
            placeholder="Estado"
            name="state"
            type="text"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Salvar
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default AddressPage;
