import {useState,useReducer} from 'react';
import './App.css';
import AddTransection from './AddTransection';
import { TransectionContext,TransectionDispatchCntext } from './contexts';

import Transec from './Transec';
import Balance from './Balance';
import IElist from './IElist';

function App() {
  // const [balance,setBalance] = useState(0);
  // const [income,setIncome] = useState(0);
  const [state,dispatch] = useReducer(transections,history);

  // function handleadd(e,text,Amount){
  //   console.log("handleaddstart",state);
    
  //   dispatch({
  //     type: 'ADD',
  //     payload: {text: text,Amount:Amount},
  //   });
  //   e.preventDefault();
  //   console.log("here");
  // }

  
  console.log(state);
  return (
    <div className="App">
       <header className="App-header">
    <TransectionContext.Provider value={state}>
        <TransectionDispatchCntext.Provider value={dispatch}>
          
       <h1><b>Expense Tracker</b></h1>
         <h3>YOUR BALANCE</h3>
         <Balance ruppee={state}/>
         <IElist ruppee={state}/>
         <Transec transection={state}/>
         <AddTransection  />
        </TransectionDispatchCntext.Provider>
      </TransectionContext.Provider>
       </header>
    </div>
  );
}

function transections(state,action){
  if(action.type==="ADD"){
    state = [...state,
    {
      id: nextid++,
      text: action.payload.text,
      Amount: action.payload.Amount,
    }];
    return state;
  }
 console.log(state);

}

let nextid = 3;
    let history = [
      {id:0,text:"ashish",Amount:"+500"},
      {id:1,text:"ramzan",Amount:"-200"},
      {id:2,text:"dhyey",Amount:"-40"}
    ]
export default App;
