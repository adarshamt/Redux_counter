

import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import { add, minus, reset } from './Store/Super_Counter_Slice'

function App() {
  const value = useSelector((state)=>state.reducer)
  const dispatch= useDispatch()
  

  return (
    <>
  
  <h2> Counter </h2>

<div className="main_container" style={{display:'flex',justifyContent:'space-between',rowGap:'100px',width:'50%'}}>

    <button style={{color:'red',backgroundColor:'yellow'} } onClick={()=>dispatch(minus())}> - </button>
      <h2>{value}</h2>
      <button style={{backgroundColor:'green'}}onClick={()=>dispatch(add())}> +</button>


  </div>

  <div>
      <button style={{color:'green',backgroundColor:'red'}} onClick={()=>dispatch(reset())} > RESET</button>     

  </div>


    </>
  )
}

export default App
