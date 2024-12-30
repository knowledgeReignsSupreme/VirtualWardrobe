import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import IntroPage from "../Pages/IntroPage";
import Homepage from "../Pages/Homepage";
import Wardrobe from "../Pages/Wardrobe";

const routesArray = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="vw" />,
      },
      {
        path: "vw",
        element: <IntroPage />, // This route renders IntroPage
      },
      {
        path: "vw/homepage",
        element: <Homepage />, // This route renders Homepage independently
      },
      {
        path: "vw/wardrobe",
        element: <Wardrobe />, // This route renders Homepage independently
      },
    ],
  },
];

const Routes = createBrowserRouter(routesArray);

export default Routes;
