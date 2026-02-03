import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import Header from './Components/Header.jsx'
import App from './App.jsx'
import Image from './Components/Image.jsx'
import Course from './Components/Course.jsx'
import Aside from './Components/Aside.jsx'
import Maps from './Components/Maps.jsx'
import Footer from './Components/Footer.jsx'


  


  


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
    <Image />
    <Course />
    <Aside />
    <Maps />
    <Footer />
    
  </StrictMode>,
)
