import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import {Home} from './Home'
import {NotFound} from './NotFound'

import {Header} from './Header'


export const App = () => (
  <div>

    <Header />



    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  component={NotFound} />
      </Switch>
    </main>
  </div>
)