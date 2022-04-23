import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Home from "../components/Home";
import AddEditContact from "../components/AddEditContact";

const RouterProvider = ({ children }) => {
  return (
    <Router>
      {children}
      <Switch>
        <Container maxWidth="lg">
          <main>
            <Route path="/" exact component={Home} />
            <Route path="/contact" exact component={AddEditContact} />
            <Route path="/contact/:id" exact component={AddEditContact} />
          </main>
        </Container>
      </Switch>
    </Router>
  );
};

export default RouterProvider;
