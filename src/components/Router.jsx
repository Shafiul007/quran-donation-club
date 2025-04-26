
import App from './../App';

import {
    createBrowserRouter
  } from "react-router-dom";
import ErrorPage from './ErrorPage';
import Home from './Home/Home';
import Login from './Login';
import Register from './Register';
import Event from './Event/Event';
import AddEvent from './AddEvent/AddEvent';
import PrivateRoute from './PrivateRoute';
import About from './About';
import PastEvent from './Event/PastEvent';
import CurrentEvent from './Event/CurrentEvent';
import FutureEvent from './Event/FutureEvent';
import UpdateEvent from './AddEvent/UpdateEvent';

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
          path:'/event',
          element:<Event></Event>
        },
        {
          path:'/updateEvent/:id',
          element:<PrivateRoute><UpdateEvent></UpdateEvent></PrivateRoute>,
          loader:({params})=>fetch(`https://quran-donation-club-server.vercel.app/posts/${params.id}`)
        },
        {
          path:'/pastEvent',
          element:<PastEvent></PastEvent>
        },
        {
          path:'/currentEvent',
          element:<CurrentEvent></CurrentEvent>
        },
        {
          path:'/futureEvent',
          element:<FutureEvent></FutureEvent>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/addEvent',
          element:<PrivateRoute><AddEvent></AddEvent></PrivateRoute>
        },
      ]
    },
  ]);