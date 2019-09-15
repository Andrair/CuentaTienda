import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;
const Linksito = styled(Link)`
  text-decoration: none;
`;

function Productos() {
  return (
    <Container>
      <Linksito to="/nuevo-producto">Nuevo Producto</Linksito>
    </Container>
  );
}

export default Productos;
