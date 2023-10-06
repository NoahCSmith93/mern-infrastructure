import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LogInForm/LogInForm';
import { useState } from 'react';

export default function AuthPage({ setUser }) {
  const [loginView, setLoginView] = useState(true)

  return (
    <main>
      <h1>{loginView ? "Log In" : "Sign Up"}</h1>
      {!loginView ? 
        <SignUpForm setUser={setUser} />
        :
        <LoginForm setUser={setUser}/>
      }
      <br />
      <button onClick={() => (setLoginView(!loginView))}>
        {!loginView ? "Log in instead?" : "Sign up instead?"}
      </button>
    </main>
  );
}