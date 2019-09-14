import React from "react";
import styled from "styled-components";
import Logo from "./logo.svg";

const Container = styled.div`
  grid-column: 1 / 4;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #343a40;
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

const TextItem = styled.p`
  font-size: calc(1vw + 0.8em);
  margin: 5px 0 5px 20px;
  font-weight: bold;
  color: #f8f9fa;
`;

const Sidebar = () => {
  return (
    <Container>
      <ImgLogo src={Logo} />
      <ContentBox>
        <Item>
          <TextItem>Productos</TextItem>
        </Item>
        <Item>
          <TextItem>Inventario</TextItem>
        </Item>
        <Item>
          <TextItem>Ventas</TextItem>
        </Item>
        <Item>
          <TextItem>Estadisticas</TextItem>
        </Item>
        <Item>
          <TextItem>Pedidos</TextItem>
        </Item>
      </ContentBox>
    </Container>
  );
};

export default Sidebar;
