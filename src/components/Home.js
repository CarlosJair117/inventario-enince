import {  Route, Switch, useRouteMatch, NavLink} from "react-router-dom"
import InsertRecords from "./InsertRecords"
import Records from "./Records"
import Reports from "./Reports";
import Sales from "./Sales";
import Users from "./Users";
import logo from '../assets/img/logo.png'

const Home = () => {

    let {path, url} = useRouteMatch();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="" width="50" height="24"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <NavLink to={`${url}/records`} className="nav-link" activeClassName="active">Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to={`${url}/insertRecords`} className="nav-link" activeClassName="active">Insertar</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to={`${url}/sales`} className="nav-link" activeClassName="active">Salidas</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to={`${url}/reportes`} className="nav-link" activeClassName="active">Reportes</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to={`${url}/usuarios`} className="nav-link" activeClassName="active">Usuarios</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>            
            <Switch>
                <Route exact path={path} component={Records}/>
                <Route path={`${path}/records`} component={Records}/>
                <Route path={`${path}/insertRecords`} component={InsertRecords}/>
                <Route path={`${path}/sales`} component={Sales}/>
                <Route path={`${path}/reportes`} component={Reports}/>
                <Route path={`${path}/usuarios`} component={Users}/>
            </Switch>
        </div>
    )
}

export default Home
