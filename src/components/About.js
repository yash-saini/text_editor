import React, { useState } from 'react'

export default function About() {

    const [myStyle, stylechange] = useState( {
        color: 'black',
        backgroundColor: 'lightblue'
      }
    )
    const[buttonlabel,changelabel] = useState("Dark Mode On")
    
    const darkmode = () =>{
        if (myStyle.color==='black')
        {
            stylechange(
                {
                    color: 'lightblue',
                    backgroundColor: 'black',
                    border: '1px black'
                  }
            )
            changelabel("Dark Mode On")
        }
        else
        {
            stylechange(
                {
                    color: 'black',
                    backgroundColor: 'lightblue'
                  }
            )
            changelabel("Light Mode On")


        }
        
    }
    
 
  return (
    <div className='container' style={myStyle}>
      <div className="accordion" id="accordionExample" >
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <b>About the App</b>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>TextChanger: </strong> This app caters to performing various functionalities such as conversion of a text to Uppercase, Lowercase, counting vowels and consonants, reading the input text aloud and stopping it, clearing the input text, displaying the preview, and counting the words and characters. This application is particularly useful for people who wish to perform the above mentioned functions in a time bound manner. Apart from this, the app also features alerts, switch to change to dark mode and a dropdown of buttons helping to change the background color.
      </div>
    </div>
    
  </div>

  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <b>About the Creator</b>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Developer Yash Saini: </strong> I have pursued Masters in Computer Science & Engineering with specialization in Artificial Intelligence from State University of New York at Buffalo. Previously, I have worked as a consultant with Deloitte Consulting India Private Limited (Deloitte US-India). As an EPM developer in the Finance Technology & Innovation business line, I gained experience with Data Relationship Management (DRM), Enterprise Planning & Budgeting Cloud Service (EPBCS), Data Management (DM/FDMEE), Application Lifecycle Management (ALM), Python, Groovy, Windows Batch Scripting, and EPM automation scripting.

       In addition, I studied software engineering for my Bachelor's degree at Delhi Technological University (Formerly Delhi College of Engineering). I am skilled in Python, Java, React.js, C/C++, Machine Learning, Natural Language Processing, DBMS (MS-SQL), OOP, Data Structures and Algorithms.
      </div>
    </div>
    
  </div>

</div>

<button className='btn btn-primary mx-2 my-4' onClick={() => darkmode()} >{buttonlabel}</button>


    </div>
  )
}
