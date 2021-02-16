import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Home from './page/Home';
import PageCarousel from './page/PageCarousel';

const RouterProvider = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="home" component={Home} title="Home" hideNavBar />
        <Scene
          key="pageCarousel"
          component={PageCarousel}
          navTransparent
          back
          backButtonTintColor="#FFF"
        />
      </Stack>
    </Router>
  );
};

export default RouterProvider;
