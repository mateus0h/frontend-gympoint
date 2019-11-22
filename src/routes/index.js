import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';

import Dashboard from '~/pages/Dashboard';
import Students from '~/pages/Students';
import Plans from '~/pages/Plans';
import Enrollments from '~/pages/Enrollments';
import HelpOrders from '~/pages/HelpOrders';

export default function Routes() {
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route exact path="/students" component={Students} isPrivate />
      <Route path="/plans" component={Plans} isPrivate />
      <Route path="/enrollments" component={Enrollments} isPrivate />
      <Route path="/students/help-orders" component={HelpOrders} isPrivate />
      <Route axact path="/" component={SignIn} />
    </Switch>
  );
}
