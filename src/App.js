
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Txtform from './components/Txtform';
import { useState } from 'react'


function App() {

  const [buttonlabel,changelabel] = useState("Dark Mode On")

  const [dorl,navbarchange] = useState('light')
  
  const darkmode = () =>{
    if (dorl==='light')
    {
        navbarchange('dark')
        changelabel("Dark Mode on")
        document.body.style.backgroundColor='#3D0C02'
    }
    else
    {
        navbarchange('light')
        changelabel("Light Mode on")
        document.body.style.backgroundColor='white'

    }
    
}

  return (
    <>
    <Navbar title="TextChanger" about="About" darkmode={darkmode} dorl={dorl} buttonlabel={buttonlabel}/>
    {/* <About></About> */}
    <div className= "container">
    <Txtform heading="Your text goes here" darkmode={darkmode} dorl={dorl} buttonlabel={buttonlabel} />
    </div>
    </>
   
  );
}

export default App;
