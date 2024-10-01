import React, { useEffect, useState } from 'react'

const useLocalStorage = (key,initialvalue) => {
  const [name,setName]=useState(
    localStorage.getItem(key)?
    localStorage.getItem(key):initialvalue
  );
  useEffect(()=>{
    localStorage.setItem(key,name)
  },[key,name])
  return [name,setName]
}

export default useLocalStorage
