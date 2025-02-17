import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Trump from "./pages/Trump";
import Gazo from "./pages/Gazo";
import Koreya from "./pages/Koreya";
import RU from "./pages/R-U";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/trump",
      element: <Trump />,
    },
    {
      path: "/tinchlik",
      element: <Gazo />,
    },
    {
      path: "/koreya",
      element: <Koreya />,
    },
    {
      path: "/ru",
      element: <RU />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={routes} />;
}
