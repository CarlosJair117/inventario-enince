import { useContext, useState } from "react";
import CrudContext from "../context/CrudContext";

const initialForm = {
    salesProduct:"",
    salesNumber:0,
    salesDescription:"",
    id:null,
    salesDate:"",
    salesHour:"",
};

const Sales = () => {

    const {createData, dataBase} = useContext(CrudContext);
    const [form, setForm] = useState(initialForm);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }

    const subtract = () => {
        let indexOf;
        const newData = dataBase[0].product.find( (element, index) => {
            indexOf = index;
            return element.product === form.salesProduct
        } );
        const data = { product: newData.product, number: newData.number - form.salesNumber, description: newData.description, id: newData.id }
        const db = dataBase[0].product;
        db.splice(indexOf, 1, data); 
        const arrayObject = {product: db}
        createData(arrayObject, 'productos');
    }

    const date = () => {
        const hoy = new Date();

        const day = hoy.getDate();
        const month = hoy.getMonth() + 1;
        const year = hoy.getFullYear();

        const dateToday = `${day}/${month}/${year}`;

        const hour = hoy.getHours();
        const minutes = hoy.getMinutes();
        const seconds = hoy.getSeconds();

        const hourToday = `${hour}:${minutes}:${seconds}`;
        
        return [dateToday, hourToday];
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        setForm(form.id = Date.now());
        const dateSale = date();
        setForm(form.salesDate = dateSale[0]);
        setForm(form.salesHour = dateSale[1])

        if(!form.salesProduct || !form.salesNumber){
            alert("datos incompletos");
            return;
        }

        const data = dataBase[1].sales;
        data.push(form);
        const arrayObject = {sales: data}
        // dataBase.splice(0,1,arrayObject)

        createData(arrayObject, 'salidas');
        subtract();

        handleReset();
    }

    const handleReset = () => {
        setForm(initialForm);
    }

    return (
        <div className="container mt-3">
            <h3>Registrar Salida</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 mt-4">
                    <label htmlFor="salesProduct" className="form-label">Producto</label>
                    <input type="text" className="form-control" name="salesProduct" id="salesProduct" placeholder="Nombre de producto" onChange={handleChange} value={form.salesProduct}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="salesNumber" className="form-label">Numero de salidas</label>
                    <input type="number" className="form-control" name="salesNumber" id="salesNumber" placeholder="Numero de salidas" onChange={handleChange} value={form.salesNumber}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="salesDescription" className="form-label">Descripcion de salida</label>
                    <textarea className="form-control" name="salesDescription" id="salesDescription" rows="3" onChange={handleChange} value={form.salesDescription}></textarea>
                </div>
                <div>
                    <input className="btn btn-primary" type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    )
}

export default Sales
