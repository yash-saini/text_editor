import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

export default function Txtform(props) {
const [text, setText]= useState('')
const [{vowels,consonants}, setVowel]= useState({vowels :0, consonants:0})


const handleOnClickU = () =>{

    let new_t= text.toUpperCase()
    setText(new_t)
    props.changingAlertStates("Upper Case Conversion","success")
}
const handleOnClickL = () =>{

    let new_t= text.toLowerCase()
    setText(new_t)
    props.changingAlertStates("Lower Case Conversion","success")

}
const handleOnClickC = () =>{

   
    setText('')
    setVowel({vowels:0,consonants:0})
    window.speechSynthesis.cancel();
    props.changingAlertStates("Clear","success")

}

const handleOnClickV = () =>{
   
   const vowel_array= ['a','e','i','o','u','A','E','I','O','U']
   let count=0
   let conso_count=0
    for (let i=0;i <text.length;i++)
    {
      if (vowel_array.includes(text.charAt(i)))
      {
        count+=1
      }
      else
      {
        conso_count++
      }

    }
    setVowel({vowels:count,consonants:conso_count})
    props.changingAlertStates("Other Statistics","success")

    //console.log(vowels)

}

const speaking = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.changingAlertStates("Read Aloud","success")

  }

const stopspeaking = () => {
    window.speechSynthesis.cancel();
    props.changingAlertStates("Stop Read Aloud","success")
}

const handleOnChange = (event) =>{
    //console.log("OnChange")
    setText(event.target.value)
}

  return (
<>
<div className='container' style={{color : props.dorl ==='light' ? 'black':'white'}}>
    <h1 className='mb-7'>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text}  onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" style={{color : props.dorl ==='light' ? 'black':'white',backgroundColor : props.dorl ==='light' ? 'white':'grey'}}></textarea>
    </div>
    <button className='btn btn-primary mx-2' onClick={handleOnClickU}>UpperCase</button>
    <button className='btn btn-primary mx-2 ' onClick={handleOnClickL}>LowerCase</button>  
    <button className='btn btn-primary mx-2 ' onClick={handleOnClickC}>Clear</button> 
    <button className='btn btn-primary mx-2 ' onClick={handleOnClickV}>Other Stats</button> 
    <button className='btn btn-primary mx-2 ' onClick={speaking}>Read Aloud</button>  
    <button className='btn btn-primary mx-2 ' onClick={stopspeaking}>Stop Read Aloud</button>  

      
</div>

<div className='container my-3' style={{ color : props.dorl ==='light' ? 'black':'white',backgroundColor : props.dorl ==='light' ? 'white':'grey'}}> 
        <h2>Statistics</h2> 
        {text.trim().length === 0 ? <p>Words: 0</p> : <p>Words: {text.split(/\s+/).length}</p>}
        <p>Length: {text.length}</p>
     
</div>
<div className='container my-3' style={{ color : props.dorl ==='light' ? 'black':'white', backgroundColor : props.dorl ==='light' ? 'white':'grey'}}> 
        <h2>Other Statistics</h2> 
        <p>Vowels: {vowels}</p>
        <p>Consonants: {consonants}</p>
</div>

<div className='container2 my-3' style={{ color : props.dorl ==='light' ? 'black':'white',backgroundColor : props.dorl ==='light' ? 'white':'grey'}}> 
        <h2>Preview</h2>
        <p>{text}</p>
</div>


</>
  )
}

Txtform.propTypes= {
    heading: PropTypes.string.isRequired,
  
      }

Txtform.defaultProps = {
    heading: "Enter Heading1",
 
     }
