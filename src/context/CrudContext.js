import { createContext, useEffect, useState } from "react";
import { db } from "../components/FireBase";

const CrudContext = createContext();

const CrudProvider = ({children}) => {

    const [dataBase, setDataBase] = useState(null);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [auth, setAuth] = useState(null);

    const getDb = async () =>{

        await db.collection('db').get().then((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach( (doc) => {
                docs.push(doc.data());
                console.log(doc.data());
            });
            setDataBase(docs);
        });
    }

    useEffect(() => {
        getDb();
    }, [])

    const createData = async (object, document) =>{
        await db.collection('db').doc(document).set(object);
    }

    const deleteRecord = (id) => {
        let indexOf;
        dataBase[0].product.find( (element, index) => {
            indexOf = index;
            return element.id === id;
        } );
        const db = dataBase[0].product;
        db.splice(indexOf, 1); 
        const arrayObject = {product: db}
        createData(arrayObject, 'productos');
        getDb();
    }

    const deleteUser = (id) => {
        let indexOf;
        dataBase[2].users.find( (element, index) => {
            indexOf = index;
            return element.id === id;
        } );
        const db = dataBase[2].users;
        db.splice(indexOf, 1); 
        const arrayObject = {users: db}
        createData(arrayObject, 'usuarios');
        getDb();
    }

    const data = {createData, dataBase, setDataToEdit, dataToEdit, deleteRecord, deleteUser, setAuth, auth};

    return( <CrudContext.Provider value={data}>{children}</CrudContext.Provider>)
}

export {CrudProvider};
export default CrudContext;