import { useContext, useState } from "react"
import { useHistory } from "react-router-dom";
import CrudContext from "../context/CrudContext";

const initialForm = {
    userName:"",
    password:"",
    id:"",
};

const LogIn = () => {

    const {dataBase, setAuth} = useContext(CrudContext);
    const [form, setForm] = useState(initialForm);
    const history = useHistory();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.userName || !form.password){
            alert("datos incompletos");
            return;
        }

        const authUser = dataBase[2].users.find( (element) => {
            return element.userName === form.userName && element.password === form.password;
        } );
        
        setAuth(authUser);

        handleReset();
    }

    const handleReset = () => {
        setForm(initialForm);
    }

    return (
        <div className="centrador w-75 border border-secondary rounded-2">
            <form className="row mt-4 mb-4 ms-4 me-4" onSubmit={handleSubmit}>
                <div className="col-md-12 mb-3">
                    <label htmlFor="logInUserName" className="form-label">User Name</label>
                    <input type="text" className="form-control" name="userName" id="logInUserName" onChange={handleChange} value={form.userName}/>
                </div>
                <div className="col-md-12 mb-3">
                    <label htmlFor="logInPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" id="logInPassword" onChange={handleChange} value={form.password}/>
                </div>
                <button type="submit" className="btn btn-primary w-25" onClick={() => {
                    setTimeout(() => {
                        history.push("/home")
                    }, 2000);
                }}>submit</button>
            </form>
        </div>
    )
}

export default LogIn
