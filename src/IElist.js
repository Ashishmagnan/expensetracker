import React from 'react'

function IElist({ruppee}) {
    
    let ans = ruppee.reduce((acc,curr,a) =>{
        a = curr.Amount;
        if(a[0] == '+'){ 
            acc[0] += Number(a.slice(1));
        }
        if(a[0] == '-'){
           
            acc[1] += Number(a.slice(1)); 
        }
        
        return acc;
        
      },[0,0]);
      console.log(ans);
  return (
    <div>
      <table border={'1px '} id='tableofie'>
      <tr>
        <td>Income</td>
        <td>Expance</td>
      </tr>
        <tr>
        <td id='greenvala'>${ans[0]}</td>
        <td id='redvala'>${ans[1]}</td>
        </tr>
      </table>
    </div>
  )
}

export default IElist
