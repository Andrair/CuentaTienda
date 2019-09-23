import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./Componentes/Dashboard.js";
//redux
import { Provider } from "react-redux";
import store from "./Componentes/store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </Router>
  );
}

export default App;
