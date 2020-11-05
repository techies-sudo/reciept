import './App.css';
import {Route,Switch} from 'react-router'
import Login from './components/Login/Login'
import DashBoard from './components/DashBoard/DashBoard'
import Retrieved from './components/Retrieved/Retrieved'

function App() {
  return (
    <div className="App">
     <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/dashboard' component={DashBoard} />
        <Route exact path='/retrieved' component={Retrieved} />
      </Switch>
    </div>
  );
}

export default App;
