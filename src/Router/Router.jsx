import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../components/Home/Home";
import Trending from "../Pages/Trending/Trending";

  
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
        }
      ]
    },
  ]);
