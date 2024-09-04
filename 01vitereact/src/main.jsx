import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherElement = React.createElement(
  'a',
  { href: 'https://www.example.com' ,target:'_blank'},
  'Visit example.com'
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <App/>
  
)
