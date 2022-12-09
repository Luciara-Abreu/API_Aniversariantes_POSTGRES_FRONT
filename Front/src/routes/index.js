import { BrowserRouter, Route,  Switch } from 'react-router-dom';

import Login from '../pages/login';
import EditUsers from '../components/editUsers';
import ConsultaMes from '../pages/consultaMes';
import AddAniver from '../pages/addAniver';
import CriarConta from '../pages/criarConta';
import Dashboard from '../pages/dashboard';
import Top10 from '../pages/top10';


export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login'  exact component={Login}/>;
        <Route path='/'            exact component={Dashboard}/>
        <Route path='/top10'             component={Top10}/>
        <Route path='/consultaMes'       component={ConsultaMes}/>

        <Route path="/addAniver"         component={AddAniver} />
        <Route path='/criarConta'        component={CriarConta}/>
        <Route path='/editar'            component={EditUsers}/> 
      </Switch>
    </BrowserRouter>
  )
  }

/**
 *       <RequireAuth>
        <Route path='/addAniver'   exact component={AddAniver}/>
        </RequireAuth>

       <Route path='/login'       exact component={Login}/>
 */
