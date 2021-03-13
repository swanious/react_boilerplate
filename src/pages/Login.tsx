import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';

interface PropsTyped {
  email: string;
  password: string;
}

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    console.log(password);
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <form action="">
        <label htmlFor="id">아이디</label>
        <input value={email} onChange={handleChange} name="id" type="text" />
        <label htmlFor="password">비밀번호</label>
        <input
          value={password}
          onChange={handleChange}
          name="password"
          type="password"
        />
        <button onClick={handleClick} type="submit">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
