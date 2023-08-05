import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css'
import Home from './paginas/home/Home';
import PersonagemIndividual from './paginas/PersonagemIndv/PersonagemIndividual';


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/people/" element={<PersonagemIndividual/>} />
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
