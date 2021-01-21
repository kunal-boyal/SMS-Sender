import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Route, Switch,NavLink } from "react-router-dom"

import HomePage from './containers/HomePage'
import Contacts from './containers/Contacts'
import DetailedInfo from './containers/DetailedInfo'
import SendMessage from './containers/SendMessage'
import SentMessages from './containers/SentMessages'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <NavLink style={{ color: "white",fontSize:"25px",paddingRight:"3rem",textDecoration:'none' }} to="/">Kisan Network</NavLink>
          <Nav className="mr-auto">
            <NavLink style={{ color: "white",paddingRight:"1rem" }} to="/contacts">Contacts</NavLink>
            <NavLink style={{ color: "white" }} to="/sentMessages">Sent Messages</NavLink>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/contacts" exact component={Contacts} />
          <Route path="/contacts/detailedInfo" exact component={DetailedInfo} />
          <Route path="/contacts/sendMessage" exact component={SendMessage} />
          <Route path="/sentMessages" exact component={SentMessages} />
        </Switch>
      </div>
    );
  }
}

export default App;
