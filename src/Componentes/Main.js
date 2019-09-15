import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  height: 100%;
  @media (min-width: 220px) and (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #343a40;
  margin: 60px 15px 60px 15px;
  box-shadow: 10px 10px 5px 1px rgba(0, 0, 0, 0.23);

  :hover {
    background: black;
    cursor: pointer;
  }
  @media (min-width: 220px) and (max-width: 425px) {
    margin: 0px 4px 0px 4px;
  }
`;

const LinkBox = styled(Link)`
  font-size: calc(1vw + 2em);
  font-weight: bold;
  color: #f8f9fa;
  text-decoration: none;
  text-align: center;
  width: 100%;
`;

function Main() {
  return (
    <Content>
      <Box>
        <LinkBox>Ventas</LinkBox>
      </Box>
      <Box>
        <LinkBox to="/Productos">Productos</LinkBox>
      </Box>
      <Box>
        <LinkBox>Inventario</LinkBox>
      </Box>
      <Box>
        <LinkBox>Estadisticas</LinkBox>
      </Box>
    </Content>
  );
}

export default Main;
