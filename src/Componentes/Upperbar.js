import React from "react";
import styled from "styled-components";

const Container = styled.div`
  grid-column: 9 / 13;
  grid-row: 2 / 3;
  margin: 0 40px 0 0;
  background: red;
  @media (min-width: 220px) and (max-width: 425px) {
    grid-column: 2 / 5;
    margin: 0 20px 0 0;
  }
`;
function Upperbar() {
  return <Container></Container>;
}

export default Upperbar;
