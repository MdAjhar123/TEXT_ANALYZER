import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
    <div style={{height: '50px'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
      </div> }
    </div>
  )
}

export default Alert


//props.alert && :- props.alert null(i.e false) rahega to div ke age kam nhi karega
// or agar ye true hai means null nhi hai to age kam karega