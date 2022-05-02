import React from "react";
import { Routes, Route} from "react-router-dom";
import './AuthenticationApp.css';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Success from './Success';
import Failed from './Failed';
import Home from './Home';
import EmailVerification from "./emailVerification";
import EmailSuccess from "./emailSuccess";


export default function AuthenticationApp() {

  return (
    <div className="App">
      <Routes>

        <Route exact path="/" element={<Home/>}></Route>

        <Route exact path="/signup" element={<SignUp/>}></Route>

        <Route exact path="/success" element={<Success />}></Route>
        
        <Route  exact path="/signin" element={<SignIn />}></Route>

        <Route exact path="/failed" element={<Failed />}></Route>

        <Route exact path="/email" element={<EmailVerification />}></Route>

        {/* <Route exact path="/emailsuccess" element={<EmailSuccess />}></Route> */}

      </Routes>
    </div>
  );
}


