import React, {useState, useRef} from 'react';
export default function LoginForm({ onSubmit }) {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const [values, setValue] = useState({firstName: '', lastName: '', phone: ''});
  const onChange = e => {
    const { name, value } = e.target;
    setValue(prev => ({...prev, [name]: value}));
  }
    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        };
        onSubmit(data);
    };
    return (
      <form onSubmit={handleSubmit} >
          <label>Username
          <input
            name="username"
            type="text"
            id="username-input"
            ref={usernameRef}
            onChange={onChange}
          />
        </label>
        <label>Password
          <input
            name="password"
            type="password"
            id="password-input"
            ref={passwordRef}
            onChange={onChange}
          />
        </label>
          <button disabled={(values.username && values.password) ? false : true} type="submit">Submit</button>
      </form>
    );
};