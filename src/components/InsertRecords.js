import { useContext, useState } from "react";
import CrudContext from "../context/CrudContext";

const initialForm = {
    product:"",
    number:0,
    description:"",
    id:null,
};


const InsertRecords = () => {

    const {createData, dataBase} = useContext(CrudContext);
    const [form, setForm] = useState(initialForm);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }

    const add = () => {
        let indexOf;
        const newData = dataBase[0].product.find( (element, index) => {
            indexOf = index;
            return element.product === form.product
        } );
        const data = { product: newData.product, number: parseInt(newData.number) + parseInt(form.number), description: form.description, id: newData.id }
        const db = dataBase[0].product;
        db.splice(indexOf, 1, data); 
        const arrayObject = {product: db}
        createData(arrayObject, 'productos');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setForm(form.id = Date.now());

        const newData = dataBase[0].product.find( element =>  element.product === form.product);

        if(!form.product || !form.number){
            alert("datos incompletos");
            return;
        }

        if(newData){
            add();
        } else {
            const data = dataBase[0].product;
            data.push(form);
            const arrayObject = {product: data}
            // dataBase.splice(0,1,arrayObject)

            createData(arrayObject, 'productos');
        }
            handleReset();
    }

    const handleReset = () => {
        setForm(initialForm);
    }

    return (
        <div className="container mt-3">
            <h3>Insertar Producto</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 mt-4">
                    <label htmlFor="insertRecordsPruduct" className="form-label">Producto</label>
                    <input type="text" className="form-control" name="product" id="insertRecordsPruduct" placeholder="Nombre de producto" onChange={handleChange} value={form.product}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="insertRecordsNumber" className="form-label">Numero de producto</label>
                    <input type="number" className="form-control" name="number" id="insertRecordsNumber" placeholder="Numero de producto" onChange={handleChange} value={form.number}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="insertRecordsDescription" className="form-label">Descripcion de producto</label>
                    <textarea className="form-control" id="insertRecordsDescription" name="description" rows="3" onChange={handleChange} value={form.description}></textarea>
                </div>
                <div>
                    <input className="btn btn-primary" type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    )
}

export default InsertRecords
