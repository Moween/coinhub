import React from 'react';

const Input = ({ label, formikProps, formikKey, ...props }) => {
  return (
    <div className="flex flex-col my-2">
      <label htmlFor={label} className="px-1 py-1">
        {label}
      </label>
      <input
        className="px-2 py-2 border focus:outline-none border-slate-600 rounded"
        value={formikProps.values[formikKey]}
        onChange={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        id={label}
        {...props}
      />
      {formikProps.touched[formikKey] && formikProps.errors[formikKey] && (
        <p className="text-red-500">
         *{formikProps.touched[formikKey] && formikProps.errors[formikKey]}
        </p>
      )}
    </div>
  );
};

export default Input;
