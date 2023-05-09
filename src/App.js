import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Nav from './Components/Nav.js';
import Login from './Components/Login.js';
import Logout from './Components/Logout.js';
import Profile from './Components/Profile.js';
import Home from './Components/Home.js';
import AboutUs from './Components/AboutUs.js';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Nav />}>
      <Route index element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="profile" element={<Profile />} />
      <Route path="login" element={<Login />} />
      <Route path="logout" element={<Logout />} />
    </Route>
  )
);

class App extends React.Component  {
  render(){
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  }
  
}

export default App;
