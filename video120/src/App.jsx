import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector ,useDispatch} from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/counter/counterslice'

function App() {
  const count=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch()
  return (
    <>
      <div>
        <button onClick={()=>dispatch(decrement())}>-</button>
        current count states{count}
        <button onClick={()=>dispatch(incrementByAmount(5))}>+</button>
      </div>
    </>
  )
}

export default App
