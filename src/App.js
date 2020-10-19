import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "./styles/App.css";
import Home from "./components/Home";
import { LinkContainer } from "react-router-bootstrap";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Scratch</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/signup">
                <NavItem>Signup</NavItem>
              </LinkContainer>
              <LinkContainer to="/login">
                <NavItem>Login</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
