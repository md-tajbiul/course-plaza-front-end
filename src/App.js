import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import CheckOut from "./Components/CheckOut/CheckOut";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Manage from "./Components/Manage/Manage";
import NavBar from "./Components/NavBar/NavBar";
import NotFound from "./Components/NotFound/NotFound";
import Orders from "./Components/Orders/Orders";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Upload from "./Components/Upload/Upload";


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: " ",
  });
  return (
  <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>
          <PrivateRoute path="/upload">
            <Upload />
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
            <CheckOut />
          </PrivateRoute>
          <PrivateRoute path="/manage">
            <Manage />
          </PrivateRoute>
          <Route path="*">
              <NotFound/>
          </Route>
        </Switch>
    </Router>
  </UserContext.Provider>
  );
}

export default App;
