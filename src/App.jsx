import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";
import SinglePost from "./pages/SinglePost";
import Error from "./pages/Error";
import {
  createBrowserRouter,
  RouterProvider, Outlet
} from "react-router-dom";

const App = () => {

  const Layout = () => {
    return (
      <>
        <Header/>
        <Outlet/>
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children : [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/blog",
          element: <Blog  />,
        },
        {
          path: "/blog/:slug",
          element: <SinglePost  />,
        },
        {
          path: "*",
          element: <Error  />,
        },
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
