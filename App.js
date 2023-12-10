import logo from './logo.svg';
import React, {useState} from "react";
import ReactDOM from "react-dom";
import './App.css';

function App() {
  
  // const signUp = (
    
  // );
const [inputValueEmail, setEmail] = useState("");

const [inputValuePassword, setPass] = useState("");
 
function handleEmail(email){
  setEmail(email);
  console.log(email);
}


function loginButton(event){
    
    event.preventDefault();

    if(inputValueEmail.trim() === "" || inputValuePassword.trim()===""){

        alert("Email or Password is missing!");
    }else{
      //Connect to database and check email and password.
      
      
    }
  }
  
  return (
    <div className='LoginPage'>

    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    


    <body>

    <header className='headerLogin'>
        <h1>BrakeTime</h1>

    </header>

    <main>
        <div className='login'>
        <input placeholder='Email Address ' className='emailInput' onChange={(e) => setEmail(e.target.value)}></input>
        <input placeholder='Password' className='passwordInput' onChange={(e) => setPass(e.target.value)}></input>
        <button className='loginButton'   onClick={loginButton}> Sign In</button>
        <button className='signupButton'  > Sign Up</button>
        </div>
    </main>

    <footer>
        <p>&copy; 2023 BrakeTime. All rights reserved.</p>
    </footer>

    </body>

    </div>

  );
}

export default App;
