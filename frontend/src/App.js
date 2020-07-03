import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';

import NavBar from './components/core/NavBar';
import HomeScreen from './screens/HomeScreen';
import RHScreen from './screens/RHScreen';
import FinanceiroScreen from './screens/FinanceiroScreen';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div
          style={{
            display: 'flex',
            backgroundColor: '#F8F8FB',
            height: '100vh',
            width: '100vw',
          }}
        >
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
    </Provider>
  );
}

export default App;
