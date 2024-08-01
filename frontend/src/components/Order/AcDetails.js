import React from "react";

function AcDetails() {
  return (
    <>
      <div className="formMain">
        <form className="form" action="">
          <div className="olContent">
            <h3> Edit Account Details</h3>
          </div>
          <div className="customerName">
            <div className="firstname">
              <label htmlFor="">
                Name <span className="star">*</span>
              </label>
              <input type="text" placeholder="" />
            </div>
          </div>
          <div className="firstname">
            <label htmlFor="">
              Email Address <span className="star">*</span>
            </label>
            <input type="email" placeholder="" />
          </div>
          <div className="olContent">
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
          </div>
          <div className="saveChanges">
            <button>Save Changes</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AcDetails;
