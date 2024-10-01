import { useEffect, useRef, useState,useMemo, useCallback ,useContext, useReducer, useLayoutEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import ContextProvider, { AppContext } from './context/AppContext'
import Profile from './components/Profile'
import Footer from './components/Footer'
import useLocalStorage from './hooks/useLocalStorage'

function App() {

  const [name,setName]=useLocalStorage('username',''
  );
  return (
    <>
  <input type="text" placeholder='Enter your name' 
  value={name} onChange={(e)=>setName(e.target.value)}/>
  <h2>Hello, {name} </h2>
    </>
  )
}
export default App
