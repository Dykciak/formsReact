import { useState, useRef } from 'react'
import FormInput from './components/FormInput'
import './App.css'

function App() {
  // const [username, setUsername] = useState("")
  const usernameRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
         <FormInput name="username" placeholder="user420437889" ref={usernameRef}></FormInput>
        <FormInput name="name" placeholder="your name"></FormInput> 
        <FormInput name="email" placeholder="example@mail.com"></FormInput>
        <FormInput name="tel" placeholder="+00 000-000-000"></FormInput> 
        <button>Submit</button>
      </form>
    </>
  )
}

export default App
