import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/MainLayout/Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";

function App() {
  const router = createBrowserRouter([
    // {errorElement:
    //   <NotFound/>
    // },
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "prot", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
        // {path:"*" ,element:<Home/>}
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
