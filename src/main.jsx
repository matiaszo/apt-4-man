import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Produto from './Produto.jsx'
import './index.css'
import Grafico from "./Grafico.jsx";
import Api from "./Api.jsx"
import Mapa from "./Mapa.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Produto",
    element: <Produto/>,
  },
  {
    path: "Api",
    element: <Api/>,
  },
  {
    path: "Mapa",
    element: <Mapa/>,
  },
  {
    path: "/Grafico",
    element: <Grafico/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


