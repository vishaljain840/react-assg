import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import NoMatchPage from './NoMatchPage';
import Dashboard from './Dashboard';
import { HashRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import NavBar from './NavBar';
import { UserContext } from './UserContext';

function App() {
  let [user, setUser] = useState({
    isLoggedIn: false,
    currentUserId: null,
    currentUserName: null,
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <HashRouter>
        <NavBar />
        <div className="container-fluid">
          <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/register" exact={true} component={Register} />
            <Route path="/dashboard" exact={true} component={Dashboard} />
            <Route path="*" component={NoMatchPage} />
          </Switch>
        </div>
      </HashRouter>
    </UserContext.Provider>
  );
}

export default App;
