import "./index.css"
import Home from "./Home";
import SingleMovie from "./Single";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const route  = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/:category/:subcategory/:page",
    element:<Home/>
  },
  {
    path:"/:category/:subcategory",
    element:<Home/>
  },
  {
    path:"/:category",
    element:<Home/>
  },
  {
    path:"/:category/:page",
    element:<Home/>
  },
  {
    path:"/single/:type/:id",
    element:<SingleMovie/>
  }
])

function App() {
  return <div className="w-screen">
              <RouterProvider router={route} />
         </div>
}

export default App
