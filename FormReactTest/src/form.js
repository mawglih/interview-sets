import React, { useState } from 'react';

export default function LoginForm({ onSubmit }) {
  const [values, setValue] = useState({firstName: '', lastName: '', phone: ''});
  const onChange = e => {
    const { name, value } = e.target;
    setValue(prev => ({...prev, [name]: value}));
  }
  const handleSubmit = e => {
    e.preventDefault();
    console.log('data', values);
    onSubmit(values);
    setValue({firstName: '', lastName: '', phone: ''});
  }
  return (<div>
      <form onSubmit={handleSubmit}>
        <label>First Name
          <input
            name="firstName"
            type="text"
            value={values.firstName}
            onChange={onChange}
            required
            id="firstName-input"
          />
        </label>
        <label>Last Name
          <input
            name="lastName"
            type="text"
            value={values.lastName}
            onChange={onChange}
            required
            id="lastName-input"
          />
        </label>
        <label>Phone
          <input
            name="phone"
            type="text"
            value={values.phone}
            onChange={onChange}
            required
            id="phone-input"
          />
        </label>
        <button id="login-button" type="submit" disabled={(values.firstName === '' || values.lastName === '') ? true: false}>Submit</button>
      </form>
  </div>);
}