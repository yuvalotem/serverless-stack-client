import React, { useEffect, useState } from "react";
import { Link, Redirect, Route, Switch, useHistory } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "./styles/App.css";
import Home from "./components/Home";
import { LinkContainer } from "react-router-bootstrap";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import { AppContext } from "./libs/contextLib";
import { Auth } from "aws-amplify";
import { onError } from "./libs/errorLib";
import Signup from "./components/Signup";
import NewNote from "./components/NewNote";
import Notes from "./components/Notes";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const history = useHistory();

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch (e) {
      if (e !== 'No current user') {
        onError(e)
      }
    }

    setIsAuthenticating(false);
  }

  async function handleLogout() {
    await Auth.signOut();

    history.push('/')
    userHasAuthenticated(false);
  }

  return (
      !isAuthenticating &&
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
                {isAuthenticated
                  ? <NavItem onClick={handleLogout}>Logout</NavItem>
                  : <>
                    <LinkContainer to="/signup">
                      <NavItem>Signup</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/login">
                      <NavItem>Login</NavItem>
                    </LinkContainer>
                  </>
                }
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
            <Switch>
              <Route exact path="/">
                {isAuthenticated ? <Home /> : <Redirect to='/login' />}
              </Route>
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/notes/new" component={NewNote} />
              <Route exact path="/notes/:id" component={Notes} />
              <Route component={NotFound} />
            </Switch>
          </AppContext.Provider>
        </div>
  );
}

export default App;
