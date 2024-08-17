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
      const response = await fetch(`https://harsh-project-4-kmzz.onrender.com/users/getuserbyid/${id}`)
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

  const updateUserDetails = (newUserData) => {
    // Step 1: Retrieve the existing user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
        // Step 2: Update only the user details, keeping other properties intact
        storedUser.user = { ...storedUser.user, ...newUserData };

        // Step 3: Save the updated user object back to localStorage
        localStorage.setItem('user', JSON.stringify(storedUser));

        console.log("User details updated:", storedUser.user);
    } else {
        console.error('No user found in localStorage.');
    }
};

// Example usage
const newUserData = {
    username: name,
    email: email
    // Other user details you want to update...
};




  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      const userData = {
        username: name,
        email
      }
      const response = await fetch(`https://harsh-project-4-kmzz.onrender.com/users/updateuser/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify(userData)
      })
      const json = await response.json();
      console.log('User Details Updated Successfully', json)
      updateUserDetails(newUserData);
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
