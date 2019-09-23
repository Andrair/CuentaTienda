import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Upperbar from "./Upperbar";
import Main from "./Main.js";
import { Route, Switch } from "react-router-dom";

import AgregarProducto from "./AgregarProducto";
import Productos from "./Productos";
import EditarProducto from "./EditarProducto";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  height: 100vh;
  @media (min-width: 220px) and (max-width: 425px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: 100vh;
  }
  @media (min-width: 426px) and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    height: 100vh;
  }
`;

const Content = styled.div`
  grid-column: 4 / 13;
  grid-row: 4 / max-content;
  margin: 0 40px 0 40px;
  padding: 4px;
  @media (min-width: 220px) and (max-width: 425px) {
    grid-column: 1 / 4;
  }
`;

const Dashboard = props => {
  return (
    <Container>
      <Sidebar />
      <Upperbar />
      <Content>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/productos/nuevo" component={AgregarProducto} />
          <Route exact path="/productos" component={Productos} />
          <Route
            exact
            path="/productos/editar/:id"
            component={EditarProducto}
          />
        </Switch>
      </Content>
    </Container>
  );
};

export default Dashboard;
