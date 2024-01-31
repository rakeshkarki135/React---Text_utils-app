import React from 'react'

export default function Alerts(props) {
     const capitalize = (word) =>{
          const lower = word.toLocaleLowerCase();
          return  lower.charAt(0).toUpperCase() + lower.slice(1);
     }
  return (
   
     // execute the div if props.alert is available or true
     props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" >
          <strong>{capitalize(props.alert.type)}:  </strong>{props.alert.msg}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
     </div>
    
  )
}
