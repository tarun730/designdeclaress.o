import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { Homepage } from './App'
import { BrowserRouter, Routes, Route } from "react-router";
import Aboutpage from './components/Aboutpage';
import Latestpage from './components/Latestpage';
import Contact from './components/Contact';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App/> } >


        <Route index element={<Homepage />} /> 
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/latest" element={<Latestpage />} />
          <Route path="/contact" element={<Contact />} />
            </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
