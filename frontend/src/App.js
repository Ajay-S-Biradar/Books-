import React from 'react'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import Header from './components/Header'
import Body from './pages/Body'
import Book from './pages/Book'
import Home from './pages/Home'

const AppLayout = ()=>{
  return(
    <>
    <Header/>
    <Outlet />
    </>
  )
}

const appRouter = createBrowserRouter([
  {
      path:'/',
      element:<AppLayout />,
      children:[
        {
          path:'/',
          element:<Home />
        },
        {
          path:'/books',
          element:<Body />
        },
        {
          path:'/books/:id',
          element:<Book />
        }
      ]
  }
])
function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
