import React,{useContext, useState} from 'react'
import { TransectionDispatchCntext } from './contexts';

function AddTransection({add,cut}) {
    const [text,setText] = useState('');
    const [Amount,setAmount] = useState('');
    const dispatch = useContext(TransectionDispatchCntext)
  return (
    <div>
      <h5 id='addtitle'>Add new transection</h5>
      <hr />
      <form onSubmit={(e) =>{
        e.preventDefault();
        dispatch({
            type: "ADD",
            payload: {text,Amount},
        });
        setText('');
        setAmount('');
        }}>
      <p id='addlebel'>Text</p>
      <input type="text" value={text} onChange={(e)=> setText(e.target.value)} id='i1'/>
      <p id='addlebel'>{`Amount (negative-expence,positive-income)`}</p>
      <input type="text" value={Amount} onChange={(e)=>setAmount(e.target.value)} id='i2'/><br/>
      <input type='submit' value="submit" id='btnn'/>
      </form>
    </div>
  )
}

export default AddTransection
