import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { rootPaths } from "./root.routes";
import { adminRoutes } from "./admin.routes";


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: rootPaths
  },



  {
    path: '/admin',
    element: <MainLayout/>,
    children: adminRoutes
  },


  
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  },
]);

export default router;
