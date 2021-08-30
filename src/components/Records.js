import { useContext } from "react";
import CrudContext from "../context/CrudContext";
import EditRecords from "./EditRecords";
import RecordsTableRow from "./RecordsTableRow";

const Records = () => {

    const {dataBase, dataToEdit} = useContext(CrudContext);

    const db = dataBase;
    return (
        <div className="container mt-5">
            <h3>Inventario</h3>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Descripción</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                   {db ? db[0].product.map( el => <RecordsTableRow key={el.id} el={el}/>) : <tr><td colSpan="3">Sin datos</td></tr>}
                </tbody>
            </table>
            {dataToEdit ? <EditRecords/> :<></>}
        </div>
    )
}

export default Records
