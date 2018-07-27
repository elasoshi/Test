import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './Components/Login';
import Home from './Components/Home';


const RouterComponent = () => {
  return (
    <Router>
    <Scene>
      <Scene key='home' component={Home} hideNavBar duration={0} />
      <Scene key="login" component={Login} hideNavBar />
    </Scene>



    </Router>
    );
  };


export default RouterComponent;
