import { BrowserRouter, Route,  Switch } from 'react-router-dom';

import Login from '../pages/login';
import EditUsers from '../shared/components/editUsers';
import ConsultaMes from '../pages/consultaMes';
import AddAniver from '../pages/addAniver';
import CriarConta from '../pages/criarConta';
import Dashboard from '../pages/dashboard';
import Top10 from '../pages/top10';
import { RequireAuth } from '../shared/contexts/Auth/RequireAuth';


export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/'             exact component={Login}/>;
        <RequireAuth>
        <Route path='/Dashboard'         component={Dashboard}/>
        <Route path='/top10'             component={Top10}/>
        <Route path='/consultaMes'       component={ConsultaMes}/>
        <Route path="/addAniver"         component={AddAniver} />
        <Route path='/criarConta'        component={CriarConta}/>
        <Route path='/editar'            component={EditUsers}/> 
        </RequireAuth>
      </Switch>
    </BrowserRouter>
  )
  }
