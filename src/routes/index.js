import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';

import Dashboard from '~/pages/Dashboard';
import Students from '~/pages/Students';
import StudentsEdit from '~/pages/Students/edit';
import StudentsCreate from '~/pages/Students/create';
import Plans from '~/pages/Plans';
import PlansCreate from '~/pages/Plans/create';
import Enrollments from '~/pages/Enrollments';
import HelpOrders from '~/pages/HelpOrders';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/students" component={Students} isPrivate />
      <Route path="/students/create" component={StudentsCreate} isPrivate />
      <Route path="/students/edit" component={StudentsEdit} isPrivate />
      <Route path="/students/help-orders" component={HelpOrders} isPrivate />

      <Route exact path="/plans" component={Plans} isPrivate />
      <Route path="/plans/create" component={PlansCreate} isPrivate />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/enrollments" component={Enrollments} isPrivate />

      <Route axact path="/" component={SignIn} />
    </Switch>
  );
}
