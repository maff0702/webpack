import { RouterProvider, createBrowserRouter, } from "react-router-dom"
import { Suspense } from "react";
import { List } from "@/pages/list";
import { NavBar } from "@/ui/nav-bar";
import { MainPage } from "@/pages/main";


export const Routing = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar/>,
      errorElement: <div>error page</div>,
      // loader: <div>loader</div>,
      children:[
        {
          path: "/",
          element: <MainPage/>,
        },
        {
          path: "/main",
          element: <div>main</div>,
        },
        {
          path: "/list",
          element: <Suspense fallback={<div>loading</div>}><List /></Suspense>,
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}