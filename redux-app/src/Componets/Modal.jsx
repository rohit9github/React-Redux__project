import React from "react";
import "./Modal.css"
import { useSelector } from "react-redux";

function Modal({id,showModal,setShowModal}) {

    const allUsers = useSelector((state)=>state.app.users);

    const singleUser = allUsers.filter((v,i)=>v.id==id)

    return (
        <>
            
            <div className="modalBackground">
                <div className="modalContainer">

                <button onClick={()=>setShowModal(!showModal)}>Close</button>
                <h2>Username:- {singleUser[0].name}</h2>
                <h3>Gender :- {singleUser[0].gender}</h3>
                <h4>Age :- {singleUser[0].age}</h4>
                <p>Email :- {singleUser[0].mail}</p>
                </div>
            </div>
        </>

    )
}

export default Modal;