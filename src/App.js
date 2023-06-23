
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Txtform from './components/Txtform';
import { useState } from 'react'
import AlertWindow from './components/AlertWindow';


function App() {

  const [buttonlabel,changelabel] = useState("Dark Mode On")

  const [dorl,navbarchange] = useState('light')

  //const [{alrt,type},stagealert] = useState({alrt: "",type :null })
  
  const [alert,stagealert] = useState(null)

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
    <>
    <Navbar title="TextChanger" about="About" darkmode={darkmode} dorl={dorl} buttonlabel={buttonlabel}/>
    {/* <About></About> */}
    <AlertWindow alert={alert} ></AlertWindow>
    <div className= "container">
    <Txtform heading="Your text goes here" darkmode={darkmode} dorl={dorl} buttonlabel={buttonlabel} changingAlertStates={changingAlertStates} />
    </div>
    </>
   
  );
}

export default App;
