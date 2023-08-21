import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Trains from "./components/Trains";
import AuthForm from "./components/AuthForm";
import SignUp from "./components/signUp";
function App() {

  const [token, setToken] = useState(null);

  return (
    <>
      <h1>REACT TRAIN APP</h1>
      <p>Choo Choo!</p>
      <Router>
      
         {!token && <Link to="/auth/register"><button>Register as new User</button></Link>}

        <Routes>
           <Route path="/auth/register" element={<SignUp />} />
        </Routes>
      </Router>

      {token ? <button onClick={() => setToken(false)}>Sign Out</button> : ""}

      {token ? <Trains token={token} /> : <AuthForm setToken={setToken} />}
    </>
  );
}

export default App;