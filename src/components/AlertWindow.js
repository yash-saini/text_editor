import React from 'react'
import PropTypes from 'prop-types'


export default function AlertWindow(props) {
  const proper_print = (mssg) =>

  {
    //For Capitalizing first letter of type like Success from success
    return (
        mssg.charAt(0).toUpperCase() + mssg.slice(1)
    )

  }
  return (
    
      props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
        {props.alert.msg} : {proper_print(props.alert.type)}
        </div>

  )
}

AlertWindow.propTypes= {
     msg: PropTypes.string.isRequired,
     type: PropTypes.string.isRequired
      }
AlertWindow.defaultProps = {
    msg: "success",
    type: "success"
     }
