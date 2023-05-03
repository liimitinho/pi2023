import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <LoginForm />
    </div>
  )
}

export default App
