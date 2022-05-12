import React from 'react'
import { Link } from 'react-router-dom';
import "./Login.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';


const Login = () => {




  var auth = JSON.stringify(localStorage.getItem("auth"))
  console.log("this is auth string :" + auth); const nav = useNavigate();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setInput((previousvalue) => {
      console.log(previousvalue.data);
      return {
        ...previousvalue,
        [name]: value,
      }
    });
  };
  const showdata = (event) => {
    event.preventDefault();
    try {
      axios.post("http://localhost:8090/auth", {
        username: input.username,
        password: input.password,
      })
        .then(response => {



          console.log(response);

          localStorage.setItem("jwt", JSON.stringify(response.data.response))



          console.log(JSON.stringify(localStorage.getItem("jwt")))



          console.log(response.data.role)



          setInput({ ...input, role: response.data.role })





          if ((response.data.role) === "[admin]") {



            nav("/admin ");



            alert('Admin Login')



          }





          else if ((response.data.role) === "[user]") {



            nav("/Couponsview ");



            alert('User Login')



          }

          else {

            alert("not user")

          }

        }, error => {

          alert("Fail");

          console.log(error);

        })
    }
    catch (error) {
      console.log("error is", error)
    };
  }






  return (
    <>


      <div className="register">
        <div className="form">
          <form className="register-form">
            <h1>Login</h1>

            <input type="text" name="username" placeholder="Enter username" onChange={inputEvent} value={input.username} required />
            <input type="password" name="password" placeholder="Enter password" onChange={inputEvent} value={input.password} required />
            <button onClick={showdata}>Login</button>

            <div class="text-center">
              <Link to="/signup"
              ><a>

                  New User? Register
                </a>

              </Link>
            </div>
          </form>
        </div>
      </div>



    </>
  )
};
export default Login;