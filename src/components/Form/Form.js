import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ initialValues, formSubmit, children, textBtn }) => {
  const values = initialValues
  const [value, setValue] = useState(values);
  const handleChange = event =>
    setValue({ ...value, [event.target.name]: event.target.value });

  const valuesInput = value;

  return (
    < form
      className='pt-5 w-100'
      onSubmit={(e) => formSubmit(e, value)}>

      {children(handleChange, valuesInput)}

      <div className='form-group d-flex justify-content-center pt-2'>
        <button
          className='btn btn-info rounded'
          type='submit'
        >
          {textBtn}

        </button>
      </div>
    </form >
  )
};

export default Form;

Form.propTypes = {
  formSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
  textBtn: PropTypes.string
};