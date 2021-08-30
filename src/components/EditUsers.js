import { useContext, useState } from "react";
import CrudContext from "../context/CrudContext";

const initialForm = {
    firstName:"",
    lastName:"",
    userName:"",
    email:"",
    password:"",
    id:"",
};

const EditUsers = () => {
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

        if(!form.firstName || !form.lastName){
            alert("datos incompletos");
            return;
        }

        let indexOf;
        const newData = dataBase[2].users.find( (element, index) => {
            indexOf = index;
            return element.id === form.id
        } );
        const data = { firstName: form.firstName, lastName: form.lastName , userName: form.userName, email: form.email, password: newData.password, id: newData.id}
        const db = dataBase[2].users;
        db.splice(indexOf, 1, data); 
        const arrayObject = {users: db}
        createData(arrayObject, 'usuarios');

        handleReset();
        setDataToEdit(null);
    }

    const handleReset = () => {
        setForm(initialForm);
    }

    return (
        <div className="container mt-5 ">
            <h3>Editar Usuario</h3>
            <form onSubmit={handleSubmit}>
            <div className="col-md-6">
                    <label htmlFor="editFirstName" className="form-label">First name</label>
                    <input type="text" className="form-control" name="firstName" id="editFirstName" onChange={handleChange} value={form.firstName} required/>
                </div>
                <div className="col-md-6 mt-3">
                    <label htmlFor="editLastName" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="editLastName" name="lastName" onChange={handleChange} value={form.lastName} required/>
                </div>
                <div className="col-md-6 mt-3">
                    <label htmlFor="editUsername" className="form-label">Username</label>
                    <input type="text" className="form-control" id="editUsername" name="userName" onChange={handleChange} value={form.userName} required/>
                </div>
                <div className="col-md-8 mt-3">
                    <label htmlFor="editEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="editEmail" name="email" onChange={handleChange} value={form.email} required/>
                </div>
                <div className="col-12 mt-3 mb-5">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default EditUsers
