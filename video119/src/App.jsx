import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting },
  } = useForm();

  const delay =(d)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve()
      },d*1000);
    })
  }
  const onSubmit=async (data)=>{
    let r=await fetch("http://localhost:5173/",{method:"POST",headers:{
      "Content-Type":"application/json",
    },body:JSON.stringify(data)})
    let res=await r.text()
    console.log(data,res)
  }
  return (
    <>
    {isSubmitting && <div>Loading...</div> }
      <div className="container">
        <form action="">
          <input placeholder='username'{...register("username", { required: { value: true, message: "this field is required" }, minLength: { value: 3, message: "min length is 3" }, maxLength: { value: 8, message: "max length is 8" } })} type="text" />
          {errors.username && <div className='red'>{errors.username.message}</div> }
          <br />
          <input placeholder='password' {...register("password", {minLength: {value: 7, message: "Min length of password is 7"},})} type="password"/>
          {errors.password && <div className='red'>{errors.password.message}</div> }
          <br />
          <input disabled={isSubmitting} type="submit" value="submit" />
          {errors.myform && <div className='red'>{errors.myform.message}</div> }
          {errors.blocked && <div className='red'>{errors.blocked.message}</div> }
        </form>

      </div>
    </>
  )
}

export default App
