import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { HomePage } from "./pages/index.js";
import LayOut from "./pages/LayOut/LayOut.jsx";
import { NotFoundPage } from "./pages/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [{ index: true, element: <HomePage /> }],
  },
  { path: "*", element: <NotFoundPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
