import React from "react";
import Home from "./component/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./component/Contact";
import About from "./component/About";
import AboutInfo from "./component/AboutInfo";
import Errorpage from "./component/Errorpage";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import NewTodoList from "./component/NewTodoList";
import Counter from "./component/Counter";
import Declartive from "./component/Declartive";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement:<Errorpage/>
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path:"/signup",
    element:<SignUp/>
  }
  ,{
    path:'/newlist',
    element:<NewTodoList/>
  }
  ,{
    path:'/counter',
    element:<Counter/>
  },{
    path:'/declare',
    element:<Declartive/>
  }

]);

const App = () => {
  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  );
};

export default App;
