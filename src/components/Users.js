import { useContext } from "react";
import CrudContext from "../context/CrudContext";
import EditUsers from "./EditUsers";
import UsersTableRow from "./UsersTableRow";

const Users = () => {
    const {dataBase, dataToEdit, setAuth} = useContext(CrudContext);

    const db = dataBase;


    return (
        <div className="container mt-5">
            <h3>Usuarios</h3>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Usuario</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                   {db ? db[2].users.map( el => <UsersTableRow key={el.id} el={el}/>) : <tr><td colSpan="3">Sin datos</td></tr>}
                </tbody>
        </table>
        <button type="button" className="btn btn-danger" onClick={() => setAuth(null)}>Log out</button>
        { dataToEdit ? <EditUsers/> :<></>}
        </div>
    )
}

export default Users
