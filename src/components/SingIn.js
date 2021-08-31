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

const SingIn = () => {

    const {createData, dataBase} = useContext(CrudContext);
    const [form, setForm] = useState(initialForm);
    const [validForm, setValidForm] = useState(null);
    const [feedBack, setFeedBack] = useState(null);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setForm(form.id = Date.now());

        if(!form.userName || !form.password){
            return
        } if (!form.firstName || !form.lastName) {
            return
        } 

        const data = dataBase[2].users;
        data.push(form);
        const arrayObject = {users: data}

        createData(arrayObject, 'usuarios');
        handleReset();
        
    }

    const handleClick = () => {
        if(!form.userName || !form.password){
            setValidForm("is-invalid");
            setFeedBack("Formulario incompleto");
            return
        } if (!form.firstName || !form.lastName) {
            setValidForm("is-invalid");
            setFeedBack("Formulario incompleto");
            return
        } 
    }

    const handleReset = () => {
        setForm(initialForm);
    }


    return (
        <div className="centrador w-75 border border-secondary rounded-2">
            <form className="row g-2 mt-3 mb-3 ms-3 me-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="singInFirstName" className="form-label">First name</label>
                    <input type="text" className={`form-control ${validForm}`} name="firstName" id="singInFirstName" onChange={handleChange} value={form.firstName} required/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="singInLastName" className="form-label">Last name</label>
                    <input type="text" className={`form-control ${validForm}`} id="singInLastName" name="lastName" onChange={handleChange} value={form.lastName} required/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="singInUsername" className="form-label">Username</label>
                    <input type="text" className={`form-control ${validForm}`} id="singInUsername" name="userName" onChange={handleChange} value={form.userName} required/>
                </div>
                <div className="col-md-12">
                    <label htmlFor="singInEmail" className="form-label">Email</label>
                    <input type="text" className={`form-control ${validForm}`} id="singInEmail" name="email" onChange={handleChange} value={form.email} required/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="singInPassword" className="form-label">Password</label>
                    <input type="password" className={`form-control ${validForm}`} id="singInPassword" name="password" onChange={handleChange} value={form.password} required aria-describedby="validationFeedback"/>
                    {feedBack ? <div id="validationFeedback" className="invalid-feedback">{feedBack}</div> :<></>}
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit" onClick={() =>  { 
                        handleClick()
                        setTimeout(() => {
                            setValidForm(null);
                        }, 3000)
                    }
                    }>Submit form</button>
                </div>
            </form>
        </div>
    )
}

export default SingIn
