import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import {RegistrationContext} from "./RegistrationContext"

function Form1() {
    const{name,age,dateOfBirth,dispatch}=useContext(RegistrationContext);
    const navigate=useNavigate();
    
    
   
  return (
    <div>
    
    <form  style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        margin: "auto",
        marginTop: "30px",
        gap: "10px",
        border: "1px solid black",
        padding: "10px",
        backgroundColor: "#FFF89A"
      }}>
    <input onChange={(e)=>dispatch({type:"CHANGE_NAME",payload:e.target.value})} type="text" value={name} placeholder='name' required />
    <input onChange={(e)=>dispatch({type:"CHANGE_AGE",payload:e.target.value})} type="number" value={age} placeholder='age' required/>
    <input  onChange={(e)=>dispatch({type:"CHANGE_DATE_OF_BIRTH",payload:e.target.value})} type="date" value={dateOfBirth} placeholder='date' required/>
    <button disabled={!name&& !age && !dateOfBirth} style={{ backgroundColor: "#086E7D", color: "white" }} onClick={()=>{navigate("/registeration/two")}}>next</button>
    </form>
</div>
  )
}

export default Form1