import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import PrivateRoute from './components/PrivateRoute';
import './index.css';



function App() {
  return (
    <AuthContextProvider>
    <div className="App">
      <Header />
      <Switch>
        <Route path="/login" component={LoginForm} />
        <PrivateRoute path="/friends/add" component={AddFriend} />
        <PrivateRoute path="/friends" component={FriendsList} />
        <PrivateRoute path="/" exact component={FriendsList} />
      </Switch>
    </div>
    </AuthContextProvider>
  );
}

export default App;
