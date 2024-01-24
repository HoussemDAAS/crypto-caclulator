import { useState } from "react"
import Result from "./compnents/Result"
import User from "./compnents/User"
import {calculateInvestmentResults, formatter} from "./util/investment"


function App() {

  
const [initialInvestment, setinitialInvestment] = useState(10000);
const [annualInvestment, setannualInvestment] = useState(1200);
const [expectedReturn, setexpectedReturn] = useState(6);
const [duration, setduration] = useState(10);
const valide=initialInvestment>=1 && annualInvestment>=1 && expectedReturn>=1 && duration>=1;
console.log(valide);
const Data = calculateInvestmentResults({  initialInvestment: parseFloat(initialInvestment) || 0,
  annualInvestment: parseFloat(annualInvestment) || 0,
  expectedReturn: parseFloat(expectedReturn) || 0,
  duration: parseInt(duration) || 0,});
  // const valide=false;
  // const validate = (initialInvestment, annualInvestment, expectedReturn, duration) => {
  //  if (!initialInvestment || !annualInvestment || !expectedReturn || !duration) {
  //    return false;
  //  }else {
  //    return true;
  //  }
  // }
  return (
    <div>
 <div id="input-group" className="center">
      <div id="user-input">
        <label htmlFor="initialInvestment">initialInvestment</label>
        <input type="number" name="user" id="initialInvestment" value={initialInvestment} onChange={(e) => setinitialInvestment(e.target.value)} />
       
        </div>
        <div id="user-input">
          <label htmlFor="annualInvestment">annualInvestment</label>
          <input type="number" name="user" id="annualInvestment" value={annualInvestment} onChange={(e) => setannualInvestment(e.target.value)} />
        </div>
        <div id="user-input">
          <label htmlFor="expectedReturn">expectedReturn</label>
          <input type="number" name="user" id="expectedReturn"   value={expectedReturn} onChange={(e) => setexpectedReturn(e.target.value)}/>
        </div>
        <div id="user-input">
          <label htmlFor="duration">duration</label>
          <input type="number" name="user" id="duration" value={duration} onChange={(e) => setduration(e.target.value)}/>
        </div>
      </div>

    {valide ? <Result Result={Data} /> : <p className="center">please enter valid data</p>}
    {/*  */}
    </div>
  )
}

export default App
