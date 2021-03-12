import React, { useState, useEffect } from 'react';

interface PropsTyped {
  email: string;
  password: string;
}

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <form action="">
        <label htmlFor="id">아이디</label>
        <input value={email} name="id" type="text" />
        <label htmlFor="password">비밀번호</label>
        <input value={password} name="password" type="password" />
      </form>
      <button>Login</button>
    </>
  );
};

export default Login;
