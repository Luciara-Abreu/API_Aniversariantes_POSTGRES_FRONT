
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from '../pages';
import AddUsers from '../pages/addUsers';
import consultaMes from '../pages/consultaMes';
import { Dashboard } from '../pages/dashboard';
import Top10 from '../pages/top10';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>

        <Route path='/' exact component={Dashboard} />
        <Route path='/entrar' exact component={Login} />
        <Route path='/addUsers' exact component={AddUsers} />
        <Route path='/top10' exact component={Top10} />
        <Route path='/consultaMes' exact component={consultaMes} />


      </Switch>
    </BrowserRouter>
  );
}