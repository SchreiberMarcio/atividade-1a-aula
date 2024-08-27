import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../../pages/Login";
import Home from "../../pages/Home";
import List from "../../pages/List";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/list",
    element: <List />,
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
