import { useState } from 'react';
import logo from '../assets/img/logo.png'
import LogIn from './LogIn'
import SingIn from './SingIn';

const Authentication = () => {

    const [account, setAccount] = useState(true);

    const confirm = () => {
        if(account) {
            setAccount(false);
        } else{
            setAccount(true);
        };
    }

    return (
            <div className="row" style={{height: "44rem"}}>
                <div className="col azul d-flex align-items-center" >
                    <img src={logo} alt="img" className="centrador"  style={{width:"70%",}}/>
                </div>
                <div className="col d-flex align-items-center">
                    <div className="row ">
                        <div className="col-12">{account ? <LogIn/> : <SingIn/>}</div>
                        <div className="col-12">
                        <button type="button" className="btn btn-link btn-sm mt-3" onClick={confirm}> {account ? "Create account" : "LogIn"}</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Authentication
