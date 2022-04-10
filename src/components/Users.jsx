import React, { useEffect, useState } from 'react'

function Users() {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/users")
        .then((res)=>res.json())
        .then((res)=>setUsers(res))
        .catch((err)=>console.log(err))
    },[])
  return (
      <>
      {users.map((user)=>(
          <div>
        <p>{user.name}</p>
        <p>{user.age}</p>
        <p>{user.dateOfBirth}</p>
        <p>{user.stateOfResidence}</p>
        <p>{user.address}</p>
        <p>{user.pincode}</p>
        </div>

  ))}
  </> 
  )
}

export default Users