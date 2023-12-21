import React, { useState } from 'react'
import Login from './Login'
import SignUp from './SignUn';

export default function Auth() {
  const [showLogin, setShowLogin] = useState(true);
  const [showSignin, setShowSignin] = useState(false);

  return (
    <>
      {showSignin && <SignUp />}
      {showLogin && <Login />}
      <br/>
      {showLogin && (
        <button
          onClick={() => {
            setShowLogin((prev) => !prev);
            setShowSignin((prev) => !prev);
          }}
        >
          Signup
        </button>
      )}
      {showSignin && (
        <button
          onClick={() => {
            setShowSignin((prev) => !prev);
            setShowLogin((prev) => !prev);
          }}
        >
          Login
        </button>
      )}
    </>
  );
}
