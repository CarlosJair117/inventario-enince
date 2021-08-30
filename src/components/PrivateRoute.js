import { useContext } from "react";
import { Redirect, Route } from "react-router-dom"
import CrudContext from "../context/CrudContext";

const PrivateRoute = ({component:Component, ...rest}) => {

    const {auth} = useContext(CrudContext);

    return (
        <Route {...rest}> {auth ? <Component/> : <Redirect to="/"/>} </Route>
    );
}

export default PrivateRoute
