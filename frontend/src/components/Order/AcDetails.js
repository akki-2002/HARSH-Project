import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useNavigate, useParams } from "react-router-dom";

function AcDetails() {
  const {user} = useAuthContext();
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const navigate = useNavigate()
  const {id} = useParams();
  useEffect(()=>{
    const fetchData = async()=>{
      const response = await fetch(`http://localhost:5000/users/getuserbyid/${id}`)
      const json = await response.json()
      if(response.ok)
      {
        console.log("User Details", json)
        setName(json.username)
        setEmail(json.email)
      }
    }
    if(user)
    {
      fetchData()
    }
  },[user])

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      const userData = {
        username: name,
        email
      }
      const response = await fetch(`http://localhost:5000/users/updateuser/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify(userData)
      })
      const json = await response.json();
      console.log('User Details Updated Successfully', json)
      if(response.ok)
      {
        alert('User Details Updated Successfully')
        navigate(`/`)
      }
    }catch(error)
    {
      console.error('Failed to update user details:', error);
    }
  }


  return (
    <>
      <div className="formMain">
        <form className="form1" action="" onSubmit={handleSubmit}>
          <div className="olContent">
            <h3> Edit Account Details</h3>
          </div>
          <div className="customerName">
            <div className="firstname">
              <label htmlFor="">
                Name <span className="star">*</span>
              </label>
              <input type="text" placeholder="" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
          </div>
          <div className="firstname">
            <label htmlFor="">
              Email Address <span className="star">*</span>
            </label>
            <input type="email" placeholder="" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          {/* <div className="olContent">
            <h3>Change Password</h3>
          </div>
          <div className="firstname">
            <label htmlFor="">
              Enter New Password <span className="star">*</span>
            </label>
            <input type="password" placeholder="" />
          </div>
          <div className="firstname">
            <label htmlFor="">
              Re-Enter New Password <span className="star">*</span>
            </label>
            <input type="password" placeholder="" />
          </div> */}
          <div className="saveChanges">
            <button>Save Changes</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AcDetails;
