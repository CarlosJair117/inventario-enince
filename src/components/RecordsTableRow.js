import { useContext } from "react";
import CrudContext from "../context/CrudContext";

const RecordsTableRow = ({el}) => {

    const {setDataToEdit, deleteRecord} = useContext(CrudContext)
    let {description, number, product, id} = el;

    return (
        <tr>
            <td>{product}</td>
            <td>{number}</td>
            <td>{description}</td>
            <td>
                <button className="btn btn-outline-success" onClick={() => setDataToEdit(el)} >Editar</button>
                <button className="btn btn-outline-danger ms-2" onClick={() => deleteRecord(id)} >Eliminar</button>
            </td>
        </tr>
    )
}

export default RecordsTableRow
