import './App.css';
import Authentication from './components/Authentication';
import { HashRouter, Route, Switch, } from "react-router-dom"
import Home from './components/Home';
import { CrudProvider } from './context/CrudContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div>
      <CrudProvider>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Authentication}/>
            <PrivateRoute path="/home" component={Home}/>
          </Switch>
        </HashRouter>
      </CrudProvider>
    </div>
  );
}

export default App;
