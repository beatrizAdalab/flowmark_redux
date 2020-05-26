import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import PrivateRoute from '../../PrivateRoute'
import Login from '../Login'
import Register from '../Register'
import ErrorBoundary from '../../ErrorBoundary'
import Header from '../Header'
import LoginContext from '../../context/LoginContext'
import ListClassifieds from '../ListClassifieds'
import DetailClassifieds from '../DetailClassified'
import EditClassifieds from '../EditClassified'
import NewClassified from '../NewClassified'


export default function App({ user }) {
  return (
    <ErrorBoundary>
      <LoginContext>
        <div className='App bg-light'>
          <Header />
          <main className=''>
            <Switch>
              <Route path='/register' component={Register} />
              <Route path='/login' component={Login} />
              <PrivateRoute path='/listClassifieds/' component={ListClassifieds} />
              <PrivateRoute path='/detailClassifieds/:id' component={DetailClassifieds} />
              <PrivateRoute path='/editClassifieds/:id' component={EditClassifieds} />
              <PrivateRoute path='/newClassified' component={NewClassified} />
              <Redirect to='/login' />
            </Switch>
          </main>
        </div>
      </LoginContext>
    </ErrorBoundary>
  )
}


