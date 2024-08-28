import axios from "axios";
import Joi from "joi";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";



export default function Login({savaUserData}) {


  let navigate = useNavigate();

  const [user, setUser] = useState({
   
    email: "",
    password: "",
  });

  const [error, setError] = useState([]);

  // get user data from Form 

  function getUserData(e) {
    let myUser = { ...user };

    myUser[e.target.name] = e.target.value;

    setUser(myUser);
  }


  // validate user 

  function signUpValidation()
   {
    const signupValidatorSchema = Joi.object({
     
      email: Joi.string().email({ tlds: { allow: false} }).required(),
      password: Joi.string().required(),
    });

    return signupValidatorSchema.validate(user, { abortEarly: false });
  }



  // deal with login api 

  async function sendUserDataToApi() {
    axios
      .post("http://localhost:3001/users/signin", user)
      .then((response) => {

        if (response.data.message === "success") {

          localStorage.setItem("token", response.data.token);
          savaUserData() ;
          navigate("/");

        } else {
          setError(response.data.message);
          console.log("data message" ,response.data.message);
        }


      })
      .catch((error) => {
        console.error(error); // Log any errors
      });
  }




  useEffect(() => {
    if (error.length === 0) return;

    console.log("Error:", error);
  }, [error]);




  function submitRegisterForm(e) {
    e.preventDefault();

    const validationResult = signUpValidation();



    if (validationResult.error) {

     
      setError(validationResult.error.details);


    } else {

      sendUserDataToApi();
      console.log("success")
      console.log("User Data:", user);
    
    }
  }







//  return




  return (
    <div className="w-75 mx-auto">
      <div className="">
        {error ? (
          Array.isArray(error) ? (
            <div style={{ color: "red" }}>
              {error.map((err, index) => (
                <p key={index}>{err.message}</p>
              ))}
            </div>
          ) : (
            <p style={{ color: "red" }}>{error}</p>
          )
        ) : null}

        <form onSubmit={submitRegisterForm}>
     
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              onChange={getUserData}
              type="email"
              className="form-control my-input"
              name="email"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              onChange={getUserData}
              type="password"
              className="form-control my-input"
              name="password"
              id="password"
            />
          </div>

          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </form>
      </div>
    </div>
  );



}
