import Home from './pages/Home/Home';
import Layout from './pages/Layout';
import { RouterProvider, createHashRouter } from "react-router-dom";
import './app.css'

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      // { path: "contact", element: <Contact /> },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />
}
