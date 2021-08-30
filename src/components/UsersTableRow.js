import { useContext } from "react";
import CrudContext from "../context/CrudContext";

const UsersTableRow = ({el}) => {

    const {setDataToEdit, deleteUser} = useContext(CrudContext)
    let {firstName, lastName, userName, email, id } = el;

    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{userName}</td>
            <td>{email}</td>
            <td>
                <button className="btn btn-outline-success" onClick={() => setDataToEdit(el)} >Editar</button>
                <button className="btn btn-outline-danger ms-2" onClick={() => deleteUser(id)} >Eliminar</button>
            </td>
        </tr>
    )
}

export default UsersTableRow
