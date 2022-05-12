import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Register = () => {

  var auth = JSON.stringify(localStorage.getItem("auth"))
  console.log("this is auth string :" + auth);



  const nav = useNavigate();
  const [input, setInput] = useState({
    username: "",
    password: "",
    role: "",




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
      axios.post("http://localhost:8090/subs", {
        username: input.username,
        password: input.password,
        role: input.role,



      })
        .then(response => {
          console.log(response.data.response);



          const a = localStorage.setItem("auth", JSON.stringify(response.data.response))
          nav("/login");



        })
    }
    catch (error) {
      console.log("error is", error)
    };
  }
  return (
    <>
      <div className="register" >
        <div className="form" style={{

backgroundImage: `url("https://images.unsplash.com/photo-1607082352121-fa243f3dde32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGlzY291bnR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60")`}} >
          <form className="register-form">
            <h1>Register</h1>

            <input type="text" name="username" placeholder="create username" onChange={inputEvent} value={input.username} required />
            <input type="password" name="password" placeholder="create password" onChange={inputEvent} value={input.password} required />
            <div style={{ width: "300px", height: "50px" }}>



              <label htmlFor="role" style={{ color: "white" }}>Choose a Role:</label>



              <select name="role" id="role" value={input.role} onChange={inputEvent}  >

                <option value="NA">Register as</option>

                <option value="user">user</option>



                <option value="admin">admin</option>



              </select>



            </div>
            <button onClick={showdata}>Register</button>
            <Link to="/Login"

            // style={{ display: 'inline-block', padding: '10px', border: '8px', backgroundSize: '200%', backgroundPosition: '0%', transition: '0.4s', color: 'blue' }}
            ><a style={{color:'white'}}>

                Already User? Login here.
              </a>

            </Link>
          </form>
        </div>
      </div>


    </>


  )
};
export default Register;