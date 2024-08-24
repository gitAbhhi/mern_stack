import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[count,setcount]=useState(0)
  const[click,setclick]=useState(8)

  return (
    <>
     <div>The count is{count}</div>

     <button onClick={()=>{setcount(count+1)}}>Update count</button>
     <div>click{click}</div>
     <button onClick={()=>{setclick(click+1)}}>update count</button>
    </>
  )
}

export default App
