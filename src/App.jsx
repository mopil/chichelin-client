import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from './pages/mainPage';
import UploadChicken from './pages/uploadChicken';
import Detailed from './pages/detailed';
import Search from './pages/search';
import NotFound from "./pages/notFound";
import Root from "./pages/root";

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