import React from "react";
import { useState } from "react";
const User = () => {
   const [value, setValue] = useState(0);
  return (
    <div className="input-group" >
      <div id="user-input">
        <label htmlFor="initialInvestment">initialInvestment</label>
        <input type="number" name="user" id="initialInvestment" value={value} onChange={(e) => setValue(e.target.value)} />
        {console.log(value)}
        </div>
        <div id="user-input">
          <label htmlFor="annualInvestment">annualInvestment</label>
          <input type="number" name="user" id="annualInvestment" />
        </div>
        <div id="user-input">
          <label htmlFor="expectedReturn">expectedReturn</label>
          <input type="number" name="user" id="expectedReturn" />
        </div>
        <div id="user-input">
          <label htmlFor="duration">duration</label>
          <input type="number" name="user" id="duration" />
        </div>
      </div>
    
  );
};

export default User;
