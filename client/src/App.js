import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import {Home} from './Home'
import {NotFound} from './NotFound'

import {Header} from './Header'
import {Foot} from './Footer'
import {StepOne} from './StepOne'
import {StepTwo} from './StepTwo'

export const App = () => (
  <div>

    <Header />
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/stepone" component={StepOne} />
        <Route exact path="/steptwo" component={StepTwo} />
        <Route  component={NotFound} />
      </Switch>
    </main>



  </div>
)