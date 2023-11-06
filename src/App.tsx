import React from 'react';
import {createHashRouter, RouterProvider} from "react-router-dom"
import Layout from "./pages/layout/layout";
import HomePage from "./pages/home/home";

const router = createHashRouter([{
  element: <Layout/>,
  children: [
    {
      path: "/",
      index: true,
      element: <HomePage/>
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
