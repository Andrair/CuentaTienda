import React from "react";
import styled from "styled-components";
import Logo from "../Imagenes/Logo.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  grid-column: 1 / 4;
  grid-row: 1 / 13;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  align-items: center;
  background: #343a40;
  box-shadow: 3px 0px 5px 1px rgba(0, 0, 0, 0.23);
`;

const ImgLogo = styled.img`
  width: 90px;
  height: 90px;
  margin: 30px 0 50px 0;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Item = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  :hover {
    background: black;
    cursor: pointer;
  }
`;

const LinkItem = styled(Link)`
  font-size: calc(1vw + 1em);
  margin: 5px 0 5px 30px;
  font-weight: bold;
  color: #f8f9fa;
  text-decoration: none;
`;

const Sidebar = () => {
  return (
    <Container>
      <ImgLogo src={Logo} />
      <ContentBox>
        <Item>
          <LinkItem to="/productos">Productos</LinkItem>
        </Item>
        <Item>
          <LinkItem>Inventario</LinkItem>
        </Item>
        <Item>
          <LinkItem>Ventas</LinkItem>
        </Item>
        <Item>
          <LinkItem>Estadisticas</LinkItem>
        </Item>
      </ContentBox>
    </Container>
  );
};

export default Sidebar;
