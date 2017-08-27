import React from 'react';
import PropTypes from 'prop-types';

function TextInput({ htmlId, icon, name, label, type = "text", required = false, onChange, placeholder, value, error, children, ...props }) {
	return (
		<div className="input-field col s12">
      <i className="material-icons prefix">{icon}</i>
      <input className={error ? 'valid' : 'invalid'}
        id={htmlId}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}/>
      {children}
      {error && <div className="error" style={{color: 'red'}}>{error}</div>}
      <label htmlFor={htmlId} data-error={error}>{label}</label>
    </div>
		);
}

TextInput.propTypes = {

  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
  htmlId: PropTypes.string.isRequired,

  /** Input name. Recommend setting this to match object's property so a single change handler can be used. */
  name: PropTypes.string.isRequired,

  /** Input icon */
  icon: PropTypes.string.isRequired,

  /** Input label */
  label: PropTypes.string.isRequired,

  /** Input type */
  type: PropTypes.oneOf(['text', 'number', 'password']),

  /** Mark label with asterisk if set to true */
  required: PropTypes.bool,

  /** Function to call onChange */
  onChange: PropTypes.func.isRequired,

  /** Placeholder to display when empty */
  placeholder: PropTypes.string,

  /** Value */
  value: PropTypes.any,

  /** String to display when error occurs */
  error: PropTypes.string,

  /** Child component to display next to the input */
  children: PropTypes.node
};

export default TextInput;