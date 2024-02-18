import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

export const rootPaths = [
    {
      index: true,
      element: <Home/>
    },
    {
      path: 'home',
      element: <Home/>
    },
    {
      path: 'about',
      element: <About/>
    },
    {
      path: 'contact',
      element: <Contact/>
    }
  ]