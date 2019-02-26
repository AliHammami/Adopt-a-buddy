import React from 'react';

export function BwmResError(props) {
  const errors = props.errors;
  return (
    errors.length > 0 &&
      <div className='alert alert-danger bwm-res-errors'>
        {errors}
      </div>
  )
}
