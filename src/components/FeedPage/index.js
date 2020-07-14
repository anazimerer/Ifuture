import React from "react";

import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Card from "@material-ui/core/Card";

import Header from "../Header";
import Footer from "../Footer";

const FeedPage = () => {
  return (
    <Container
      style={{ border: "1px solid red", height: "100vh" }}
      maxWidth="md"
    >
      <Header title="Ifuture" />

      <Card>Restaurante1</Card>
      <Card>Restaurante</Card>
      <Card>Restaurante</Card>
      <Card>Restaurante</Card>
      <Card>Restaurante</Card>
      <Card>Restaurante</Card>
      <Card>Restaurante</Card>
      <Card>Restaurante</Card>
      <Card>Restaurante</Card>
      <Card>Restaurante</Card>
      <Card>Restaurante</Card>
      <Card>Restaurante</Card>
      <Card>Restaurante</Card>
      <Card>Restaurante</Card>
      <Card>Restaurante</Card>
      <Card>Restaurante</Card>
      <Card>Restaurante</Card>
      <Card>Restaurante</Card>

      <Footer />
    </Container>
  );
};

export default FeedPage;
