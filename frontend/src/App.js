import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import HomeScreen from './screens/HomeScreen';
import RHScreen from './screens/RHScreen';
import FinanceiroScreen from './screens/FinanceiroScreen';

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <NavBar />
        <div style={{ marginLeft: '64px' }}>
          <Switch>
            <Route exact path='/'>
              <HomeScreen />
            </Route>
            <Route exact path='/rh'>
              <RHScreen />
            </Route>
            <Route exact path='/financeiro'>
              <FinanceiroScreen />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
