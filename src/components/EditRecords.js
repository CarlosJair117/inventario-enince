import { useContext, useState } from "react";
import CrudContext from "../context/CrudContext";

const initialForm = {
    product:"",
    number:0,
    description:"",
    id:null,
};

const EditRecords = () => {

    const {createData, dataBase, dataToEdit, setDataToEdit} = useContext(CrudContext);
    const [form, setForm] = useState(dataToEdit);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.product || !form.number){
            alert("datos incompletos");
            return;
        }

        let indexOf;
        const newData = dataBase[0].product.find( (element, index) => {
            indexOf = index;
            return element.id === form.id
        } );
        const data = { product: form.product, number: newData.number , description: form.description, id: newData.id }
        const db = dataBase[0].product;
        db.splice(indexOf, 1, data); 
        const arrayObject = {product: db}
        createData(arrayObject, 'productos');

        handleReset();
        setDataToEdit(null);
    }

    const handleReset = () => {
        setForm(initialForm);
    }

    return (
        <div className="container mt-3">
            <h3>Editar Producto</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 mt-4">
                    <label htmlFor="editRecordsPruduct" className="form-label">Producto</label>
                    <input type="text" className="form-control" name="product" id="editRecordsPruduct" placeholder="Nombre de producto" onChange={handleChange} value={form.product} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="EditRecordsDescription" className="form-label">Descripcion de producto</label>
                    <textarea className="form-control" id="EditRecordsDescription" name="description" rows="3" onChange={handleChange} value={form.description} required></textarea>
                </div>
                <div>
                    <input className="btn btn-primary" type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    )
}

export default EditRecords
