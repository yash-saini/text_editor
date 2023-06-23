import React, { useState } from 'react'

export default function About() {

    const [myStyle, stylechange] = useState( {
        color: 'white',
        backgroundColor: 'blue'
      }
    )
    const[buttonlabel,changelabel] = useState("Dark Mode On")
    
    const darkmode = () =>{
        if (myStyle.color==='white')
        {
            stylechange(
                {
                    color: 'blue',
                    backgroundColor: 'white',
                    border: '1px black'
                  }
            )
            changelabel("Dark Mode On")
        }
        else
        {
            stylechange(
                {
                    color: 'white',
                    backgroundColor: 'blue'
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
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

<button className='btn btn-primary mx-2' onClick={darkmode} >{buttonlabel}</button>


    </div>
  )
}
