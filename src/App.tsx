import React from 'react';
import {createHashRouter, RouterProvider} from "react-router-dom"
import Layout from "./pages/layout/layout";
import HomePage from "./pages/home/home";
import AuthPage from "./pages/auth/auth"
import ProfilePage from "./pages/profile/profile";

const router = createHashRouter([{
  element: <Layout/>,
  children: [
    {
      path: "/",
      index: true,
      element: <HomePage/>
    },
    {
      path: "/auth",
      element: <AuthPage/>
    },
    {
      path: "/profile",
      element: <ProfilePage />
    }
  ]
}])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
