import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import Login from './components/Login';
import Register from './components/Register';
import ErrorBoundary from './ErrorBoundary'
import Header from './components/Header'
import LoginContext from './context/LoginContext'
import ListClassifieds from './components/ListClassifieds'
import DetailClassifieds from './components/DetailClassified'
import EditClassifieds from './components/EditClassified'
import NewClassified from './components/NewClassified'


export default function App({ store }) {
  return (
    <Provider store={store}>
      <Router>
        <ErrorBoundary>
          <LoginContext>
            <div className='App bg-light'>
              <Header />
              <main className=''>
                <Switch>
                  <Route path='/login' component={Login} />
                  <Route path='/register' component={Register} />
                  <Route path='/listClassifieds/' component={ListClassifieds} />
                  <Route path='/detailClassifieds/:id' component={DetailClassifieds} />
                  <Route path='/editClassifieds/:id' component={EditClassifieds} />
                  <Route path='/newClassified' component={NewClassified} />
                  <Redirect to='/login' />
                </Switch>
              </main>
            </div>
          </LoginContext>
        </ErrorBoundary>
      </Router>
    </Provider>
  );
}



