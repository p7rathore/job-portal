import React from 'react';

const Button = (props) => {
  const primaryBtn = 'bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md';
  const nonPrimaryBtn = 'bg-transparent border border-blue-500 text-blue-500 hover:bg-slate-100 py-2 px-4 rounded-md'
  return (
    <button className={props.isPrimary ? primaryBtn : nonPrimaryBtn} onClick={props.btnClick}>
      {props.btnName}
    </button>
  )
}

export default Button;