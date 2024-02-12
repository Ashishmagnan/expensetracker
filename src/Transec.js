import React from 'react'


function Transec({transection}) {
  return (
    <div id='list'>
    <h5>History</h5>
    <hr />
      {transection.map((transfer)=>{
        return(
            <div id='lisitem'>
            <li key={transfer.id}>{transfer.text}{"    "}{transfer.Amount}</li>
            </div>
        )
      })}
    </div>
  )
}

export default Transec
