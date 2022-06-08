import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

const user = {
  name: 'carlos',
  age: 28
}

const gm = { name: 'joao', age: 25 }

const { age } = user

console.log(user)
