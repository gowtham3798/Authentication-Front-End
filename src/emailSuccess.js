import React from 'react';
// import {useHistory} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import './emailSuccess.css';


export default function EmailSuccess() {
    const history = useNavigate()
  return (
    <div id='card' class="animated fadeIn">
  <div id='upper-side'>
      <h3 id='status'>
      Success
    </h3>
  </div>
  <div id='lower-side'>
    <p id='message'>
      Congratulations, your account has been successfully created.
    </p>
    <a onClick={() => history('/signin')} id="contBtn">Continue</a>
  </div>
</div>
  )
}
