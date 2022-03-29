import { BrowserRouter,Route,Switch } from 'react-router-dom';
import './App.css';
import Payroll from './components/payroll-form/Payroll-form';
import Dashboard from './components/dashboard/Dashboard';


function App() {
  return (
    <BrowserRouter>
       <Switch>
         <Route path='/form' component={Payroll}></Route>
         <Route path='/' component={Dashboard}></Route>
       </Switch>
    </BrowserRouter>
  );
}

export default App;
