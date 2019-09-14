import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar.js";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
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

const Dashboard = props => {
  return (
    <Container>
      <Sidebar />
    </Container>
  );
};

export default Dashboard;
