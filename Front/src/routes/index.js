import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EditUsers from '../components/editUsers';
import { RequireAuth } from '../contexts/Auth/RequireAuth';
import { AddPage } from '../pages';
import ConsultaMes from '../pages/consultaMes';
import CriarConta from '../pages/criarConta';
import Dashboard from '../pages/dashboard';
import Login from '../pages/login';
import Top10 from '../pages/top10';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login'       exact component={Login}/>
        <Route path='/'            exact component={Dashboard}/>
        <Route path='/criarConta'  exact component={CriarConta}/>
        <RequireAuth>
        <Route path='/top10'       exact component={Top10}/>
        </RequireAuth>
        <Route path='/consultaMes' exact component={ConsultaMes}/>
        <Route path='/addPage'     exact component={AddPage}/>
        <Route path='/editar'      exact component={EditUsers}/> 
      </Switch>
    </BrowserRouter>
  )
  }


