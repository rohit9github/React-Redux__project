import React from "react";
import { useSelector } from "react-redux";
import "./Modal.css"

function View({ id, modalShow, setModalShow }) {

    const allUsers = useSelector((state) => state.app.users);

    const singleUser = allUsers.filter((v, i) => v.id === id)

    return (
        <>
            <div className="modalBackground">
                <div className="modalContainer">
                    <button onClick={()=>setModalShow(false)}>Close</button>
                    <h2>Name :- {singleUser[0].name}</h2>
                    <h3>Gender :- {singleUser[0].gender} </h3>
                    <h4>Age :- {singleUser[0].age} </h4>
                    <p>Email :- {singleUser[0].mail}</p>
                </div>
            </div>      
        </>

    )
}

export default View;