import './App.css';
import {Route,Switch} from 'react-router'
import Login from './components/Login/Login'
import DashBoard from './components/DashBoard/DashBoard'

function App() {
  return (
    <div className="App">
     <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/dashboard' component={DashBoard} />
      </Switch>
    </div>
  );
}

export default App;
