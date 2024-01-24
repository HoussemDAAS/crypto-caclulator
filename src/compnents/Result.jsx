import React from 'react';
import { formatter } from '../util/investment';
const Result = ({ Result }) => {

  const initialInvestment=Result[0].valueEndOfYear-Result[0].interest-Result[0].annualInvestment;
  return (
    <table id='result' className='center'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th>Interest (Year)</th> {/* Corrected typo here */}
          <th>Total interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {Result.map((data) => {
             const totalintrest = data.valueEndOfYear-data.annualInvestment * data.year-initialInvestment;
             const capital=data.valueEndOfYear-totalintrest;
         return( <tr key={data.year}>
           
            <td>{data.year}</td>
            <td>{formatter.format(data.valueEndOfYear)}</td>
            <td>{formatter.format(data.interest)}</td>
            <td>{formatter.format(totalintrest)}</td>
            <td>{formatter.format(capital)}</td>
          </tr>)
        ;
      })
      }
      </tbody>
    </table>
  );
};

export default Result;
