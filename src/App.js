
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Txtform from './components/Txtform';
import { useState } from 'react'
import AlertWindow from './components/AlertWindow';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {

  const [buttonlabel,changelabel] = useState("Dark Mode On")

  const [dorl,navbarchange] = useState('light')

  //const [{alrt,type},stagealert] = useState({alrt: "",type :null })
  
  const [alert,stagealert] = useState(null)

  const [multiplecol,changemulcolor] = useState("#1F45FC")

  const darkmode = () =>{
    if (dorl==='light')
    {
        navbarchange('dark')
        changelabel("Dark Mode on")
        document.body.style.backgroundColor='#3D0C02'

        changingAlertStates("Dark Mode","success")
    }
    else
    {
        navbarchange('light')
        changelabel("Light Mode on")
        document.body.style.backgroundColor='white'
        changingAlertStates("Light Mode","success")


    }
    
}

const changingthemes = (color_code)=>{
changemulcolor(color_code)
document.body.style.backgroundColor=multiplecol
 }

/* const changingAlertStates = (alertmsg,type)=>{
 stagealert ({alrt : alertmsg,type :type})
} */

const changingAlertStates = (msg,type)=>{
  stagealert ({msg: msg,type :type})

  setTimeout(() => {
    stagealert(null)
  }, 2000);
 }


  return (
    <Router>
   
    <Navbar title="TextChanger" about="About" darkmode={darkmode} dorl={dorl} buttonlabel={buttonlabel} changingthemes={changingthemes} changingAlertStates={changingAlertStates}/>
    {/* <About></About> */}
    <AlertWindow alert={alert} ></AlertWindow>

    <Routes>
        <Route exact path="/about" element={<About />} />
    </Routes>
   
    <div className='container'>
    <Routes>
   
    <Route exact path="/" element={<Txtform heading="Your text goes here" darkmode={darkmode} dorl={dorl} buttonlabel={buttonlabel} changingAlertStates={changingAlertStates} />} />
  
   
    </Routes>
    </div>

    </Router>
   
  );
}

export default App;
