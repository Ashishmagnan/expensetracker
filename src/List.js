import React,{useContext} from 'react'


function List({transection}) {
  return (
    <div id='list'>
      {transection.map((transfer)=>{
        return(
            <li>{transfer.text} {"  "} {transfer.Amount}</li>
        )
      })}
    </div>
  )
}

export default List
