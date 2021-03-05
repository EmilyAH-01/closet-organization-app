import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Clothing from "./pages/Clothing";
import AddItem from "./pages/AddItem";
import MyOutfits from "./pages/MyOutfits";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Detail from "./pages/Detail";
import Nav from "./components/Nav";

import Login from './components/login-form';
import axios from "axios";

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: true,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact path={["/", "/signup"]}
            render={() =>
              <Signup  >
                <Login
                  updateUser={this.updateUser}
                />
              </Signup>}
          />
          
            <div>
              <Nav />
              <Route
                exact path="/closet"
                component={Clothing} 
              />
              <Route exact path="/closet/:id">
                <Detail />
              </Route>
              <Route exact path="/additem">
                <AddItem />
              </Route>
              <Route exact path="/myoutfits">
                <MyOutfits />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </div>
          
        </div>
      </Router>


    );
  }
}

export default App;
