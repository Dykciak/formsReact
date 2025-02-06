import { useState } from 'react'
import FormInput from './components/FormInput'
import './App.css'

function App() {
  const [username, setUsername] = useState("")

  console.log(username);
  return (
    <>
      <form>
         <FormInput placeholder="user420437889" setUsername={setUsername}></FormInput>
        <FormInput placeholder="your name"></FormInput> 
        <FormInput placeholder="example@mail.com"></FormInput>
        <FormInput placeholder="+00 000-000-000"></FormInput> 
      </form>
    </>
  )
}

export default App
