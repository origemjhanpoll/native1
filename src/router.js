import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Home from './page/Home';

const RouterProvider = () => {
  return (
    <Router>
      <Stack key="root">
        {/* <Scene key="login" component={Login} title="Login" /> */}
        {/* <Scene key="register" component={Register} title="Register" /> */}
        <Scene key="home" component={Home} title="Home" />
      </Stack>
    </Router>
  );
};

export default RouterProvider;
