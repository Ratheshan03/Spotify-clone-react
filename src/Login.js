import React from 'react';
import './Login.css';
import { loginUrl } from './spotify';

function Login() {
    return (
        <div className="login">
            <img className="" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify log"/>
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
            <p><span>&#9888;</span> You will need Spotify premium to play songs in this</p>
   
        </div>
    );
}

export default Login;
