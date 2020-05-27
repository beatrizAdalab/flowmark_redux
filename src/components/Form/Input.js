import React from 'react';

const Input = ({ type, name, label, value, onChange }) => {
  return (
    <div className='form-group'>
      <label htmlFor={name}>{label}<small className='text-muted'> * </small> </label>
      <input
        className='form-control'
        required
        type={type}
        id={name}
        name={name}
        value={value[name]}
        onChange={event => onChange(event)}
      />
    </div>
  )
}

export default Input