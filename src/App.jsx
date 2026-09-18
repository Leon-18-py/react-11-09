// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import HelloWorld from './components/PrimeiroComponente'
import Calculadora from "./components/Calculadora";



function App() {
  

  return (
    <>
      <section id="center">
        <div className="hero">
          <HelloWorld></HelloWorld>
        </div>                
        </section>
        <div>
          <Calculadora></Calculadora>
        </div>

      <div className="ticks"></div>

     
        

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
