import { useContext } from "react";
import CrudContext from "../context/CrudContext";
import ReportsTableRow from "./ReportsTableRow";

const Reports = () => {

    const {dataBase} = useContext(CrudContext);

    const db = dataBase;


    return (
        <div className="container mt-5">
            <h3>Registro de salidas</h3>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Cantidad de Salidas</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Hora</th>
                    </tr>
                </thead>
                <tbody>
                   {db ? db[1].sales.map( el => <ReportsTableRow key={el.id} el={el}/>) : <tr><td colSpan="3">Sin datos</td></tr>}
                </tbody>
            </table>
        </div>
    )
}

export default Reports
