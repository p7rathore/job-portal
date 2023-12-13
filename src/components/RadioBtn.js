import React from 'react';

const RadioBtn = (props) => {
  return (
    <div className="flex items-center gap-1">
      <input id={props.id} type="radio" checked={props.checked} className="w-5 h-5" value={props.value} onChange={(e) => props.handleChange(e.target.value)} />
      <label htmlFor={props.id} className="text-base font-normal text-gray-500">{props.btnName}</label>
    </div>
  )
}

export default RadioBtn;