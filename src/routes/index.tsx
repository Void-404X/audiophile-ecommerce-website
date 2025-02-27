import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../pages/Main";
import Home from "../pages/Home";
import Headphones from "../pages/Headphones";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "", element: <Home /> },
      { path: "/headphones", element: <Headphones /> },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
