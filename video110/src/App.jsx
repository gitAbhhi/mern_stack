import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn,setshowbtn]=useState(true )
  const [todos,settodo]=useState([
    {title:"hey",
    desc:"it is first todo"},
    {title:"hey stodo",
      desc:"it is second todo"},
      {title:"hey ttodo",
        desc:"it is third todo"},
  ])
  const Todo=({todo})=>{
    return (<>
    <div className="todo">{todo.title}</div>
    <div className="todo">{todo.desc}</div>
    </>)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showbtn ? <button>showbtn is true</button> : <button>showbtn is false</button>}
      {/* {showbtn && <button>showbtn is true</button>} */}
     {todos.map(todo=>{
      // return <Todo key={todo.title} todo={todo}/>
      return (
        <div key={todo.title}>
          <div className='todo'>{todo.title}</div>
          <div className='todo'>{todo.desc}</div>
        </div>
      )
     })}

      <div className="card">
        
        <button onClick={() => setshowbtn(!(showbtn) )}>
          click to hide
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
