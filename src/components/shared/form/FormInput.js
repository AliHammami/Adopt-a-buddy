import React from 'react';

const FormInput = ({
  input,
  placeholder,
  type,
  className,
  meta: { touched, error },
}) => (
  <div className="form-group">
    <div className="input-group">
      <input {...input} placeholder={placeholder} type={type} className={className} />
    </div>
    {touched &&
      ((error && <div className="alert alert-danger">{error}</div>)
      )}
  </div>
);

export default FormInput;
