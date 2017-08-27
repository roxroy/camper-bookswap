import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';

function PasswordInput({ htmlId,icon, value, label, error, onChange, placeholder, ...props }) {
  return (
    <TextInput
      htmlId={htmlId}
      icon={icon}
      label={label}
      placeholder={placeholder}
      type='password'
      onChange={onChange}
      value={value}
      error={error}
      required
      {...props}>
    </TextInput>
  );
}

PasswordInput.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
  htmlId: PropTypes.string.isRequired,

  /** Input name. Recommend setting this to match object's property so a single change handler can be used by convention.*/
  name: PropTypes.string.isRequired,

  /** Input icon */
  icon: PropTypes.string.isRequired,

  /** Password value */
  value: PropTypes.any,

  /** Input label */
  label: PropTypes.string,

  /** Input type */
  type: PropTypes.string,

  /** Function called when password input value changes */
  onChange: PropTypes.func.isRequired,

  /** Placeholder displayed when no password is entered */
  placeholder: PropTypes.string,

  /** Validation error to display */
  error: PropTypes.string
};

PasswordInput.defaultProps = {
  label: 'Password'
};

export default PasswordInput;