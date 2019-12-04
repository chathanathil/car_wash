import React from 'react';
import './App.css';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import {setCurrentUser} from './actions/authActions';
import {clearCurrentWork} from './actions/workActions';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import PrivateRoute from './components/common/PrivateRoute';
import {Provider} from 'react-redux';
import Home from '../src/components/Home';
// import History from '../src/components/History';
// import Login from '../src/components/auth/Login';
import {logoutUser} from './actions/authActions';
import HomeB from '../src/components/HomeB';
import HistoryB from '../src/components/HistoryB';
import LoginB from '../src/components/auth/LoginB';
import CarSearch from '../src/components/CarSearch';
//Check for token
if(localStorage.jwtToken){
  //set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //Decode token and get user info and exp
  const decoded=jwt_decode(localStorage.jwtToken);
  //set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  
  //Check for expired token
  const currentTime=Date.now()/1000
  if(decoded.exp<currentTime){
    //Logout user
    store.dispatch(logoutUser());
    //TODO:Clear current Work
    store.dispatch(clearCurrentWork);
    //Redirect to Login
    window.location.href='/login';
  }
}
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
        </Switch>
        {/* <Switch>
          <PrivateRoute exact path="/home" component={HomeB} />
        </Switch>
        <Switch>
          <PrivateRoute exact path="/history" component={HistoryB} />
        </Switch> */}
        <Route exact path="/history" component={HistoryB} />
        <Route exact path="/home" component={HomeB} />
        <Route exact path="/login" component={LoginB} />
        <Switch>
                <PrivateRoute
                  exact
                  path="/search/:query"
                  component={CarSearch}
                />
              </Switch>
        {/* <Switch>
          <PrivateRoute exact path="/history" component={History} />
        </Switch> 
         <Route exact path="/login" component={Login} /> */}
      </Router>
    </Provider>
  );
}

export default App;
