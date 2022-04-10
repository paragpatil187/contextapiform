import React, { useContext } from 'react'

import { Navigate } from 'react-router-dom';
import { RegistrationContext } from './RegistrationContext';

function Form2() {
  const{
    dispatch,
    stateOfResidence,
    address,
    pincode,
    name,
    age,dateOfBirth,
    handleSubmit

  }=useContext(RegistrationContext);
  if(!name || !age || !dateOfBirth){
    return <Navigate to="/registeration/one"/>;
  }
   
  return (
    <div>
    <form style={{
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
    <input  onChange={(e)=>dispatch({
      type:"CHANGE_STATE_OF_RESIDENCE",
      payload:e.target.value
    })} type="text" value={stateOfResidence} placeholder='residence' />
    <input onChange={(e)=>dispatch({
      type:"CHANGE_ADDRESS",payload:e.target.value
    })} type="text" value={address} placeholder='address' />
    <input  onChange={(e)=>dispatch({
      type:"CHANGE_PINCODE",payload:e.target.value
    })} type="number" value={pincode} placeholder='pincode'/>
    <button disabled={
      !stateOfResidence || !address || !pincode || !name ||!age || !dateOfBirth
    } style={{ backgroundColor: "#086E7D", color: "white" }} onClick={handleSubmit}>submitt</button>
    </form>
</div>
  )

}

export default Form2