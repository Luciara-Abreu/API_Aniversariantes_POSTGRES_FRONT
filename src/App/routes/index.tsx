import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from '../pages';
import consultaMes from '../pages/consultaMes';
import { Dashboard } from '../pages/dashboard';
import EditUsers from '../pages/editAniver';
import Top10 from '../pages/top10';
import AddPage from '../pages/addAniver';
import criarConta from '../pages/criarConta';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/criarConta' exact component={criarConta} />
        <Route path='/entrar' exact component={Login} />
        <Route path='/top10' exact component={Top10} />
        <Route path='/consultaMes' exact component={consultaMes} />
        <Route path='/addPage' exact component={AddPage} />
        <Route path='/editar' exact component={EditUsers} />
 
      </Switch>
    </BrowserRouter>
  );
}