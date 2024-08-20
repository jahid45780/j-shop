import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../components/Home/Home";
import Trending from "../Pages/Trending/Trending";
import Mission from "../Pages/Mission/Mission ";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:"/trending",
          element:<Trending/>
        },
        {
          path:'/mission',
          element:<Mission/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/signUp',
          element:<SignUp/>
        }
      ]
    },
  ]);
