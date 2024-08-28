import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Layout from "./Components/Layout/Layout";
import Register from "./Components/Register/Register";
import Movies from "./Components/Movies/Movies";
import People from "./Components/People/People";
import TV from "./Components/TV/TV";
import About from "./Components/About/About";
import { func } from "joi";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState , Navigate } from "react";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
function App() {

  
  const [userData, setUserData] = useState(null) ;



  function savaUserData() {
  
    let encodedToken = localStorage.getItem('token') ;
    let decodedToken = jwtDecode(encodedToken);

    setUserData(decodedToken) ; 

  }


  useEffect(()=>{

    if(localStorage.getItem('token') != null)
    {
      savaUserData() ; 
    }
  },[]);



  function logOut() {
    localStorage.removeItem('token') ;
    setUserData(null) ;
    return   <Navigate to='/login'/>

  }


  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout userData = {userData} logOut = {logOut} />,
      children: [
        {
          index: true,
          element:  <Home />,
        },
        {
          path: "login",
          element: <Login  savaUserData={savaUserData} />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "movies",
          element:  <ProtectedRoute  userData={userData}  savaUserData={savaUserData} >  <Movies /> </ProtectedRoute> ,
        },
        {
          path: "people",
          element:  <ProtectedRoute  userData={userData}  savaUserData={savaUserData} > <People /> </ProtectedRoute> ,
        },
        {
          path: "TV",
          element:  <ProtectedRoute  userData={userData}  savaUserData={savaUserData} > <TV /> </ProtectedRoute> ,
        },
       
        {
          path: "moviedetails/:id/:mediatype",
          element:  <ProtectedRoute  userData={userData}  savaUserData={savaUserData} > <MovieDetails/> </ProtectedRoute> ,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}   />;
}

export default App;
