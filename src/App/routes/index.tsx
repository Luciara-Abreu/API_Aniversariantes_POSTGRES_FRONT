
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from '../pages';
import AddUsers from '../pages/addUsers';
import { Dashboard } from '../pages/dashboard';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>

        <Route path='/' exact component={Dashboard} />
        <Route path='/entrar' exact component={Login} />
          <Route path='/addUsers' exact component={AddUsers} />


      </Switch>
    </BrowserRouter>
  );
}