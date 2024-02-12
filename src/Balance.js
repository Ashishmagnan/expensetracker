import React from 'react'

function Balance({ruppee}) {
    
    let ans = ruppee.reduce((acc,curr,a) =>{
        a = curr.Amount;
        if(a[0] == '+'){ 
            acc += Number(a.slice(1));
        }
        if(a[0] == '-'){
            console.log("nega",a.slice(1));
            acc -= Number(a.slice(1)); 
        }
        
        return acc;
        
      },0);
    
  return (
    <div id='balance'>
        <h5 >YOUR BALANCE</h5>
      <p>${ans}</p>
    </div>
  )
}

export default Balance

// let positive = 0;
// let negative =0;
// {/* let a=0;
// let b = 0; */}
// if(money[0]=='+'){
//     let a= money.slice(1);
//     positive += Number(a);
// }
// if(money[0]=='-'){
//     let b= money.slice(1);
//     negative += Number(b);
// }
// let c = a-b;
// return (
//     <p>{`$ ${c}`}</p>
// )