import React, { useEffect } from 'react'

const Navbar = ({ color }) => {
    useEffect(() => {
        alert("hey i am running because color was changed")
    }, [color])

    useEffect(() => {
      alert("hey ye kuch nya krega")
    
      return () => {
        alert("navbar ht gya")
      }
    }, [])
    
    return (
        <div>
            i am navbar of {color} color .
        </div>
    )
}

export default Navbar
