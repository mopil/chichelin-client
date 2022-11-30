import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from './pages/MainPage';
import UploadChicken from './pages/UploadChicken';
import Detailed from './pages/Detailed';
import Search from './pages/Search';
import NotFound from "./pages/NotFound";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <NotFound/>,
    children: [
      {index: true, element: <MainPage/>},
      {path: '/search', element: <Search/>},
      {path: '/detail', element: <Detailed/>},
      {path: '/upload', element: <UploadChicken/>}
    ]
  }
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;