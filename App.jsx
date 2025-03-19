import './App.css'
import AppLayout from './AppLayout'
import About from './Components/About';
import Preferences from './Components/Preferences'
import {createBrowserRouter , RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "preference", 
        element: <Preferences/>,
      },
      {
        path: "about", 
        element: <About/>,
      }
    ]
  }
]);

function App(){

  return <RouterProvider router = {router}></RouterProvider>

}

export default App
