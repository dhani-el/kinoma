import "./index.css"
import Home from "./Home";
import SingleMovie from "./Single";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const route  = createBrowserRouter([
  {
    path:"/",
    element:<Home reset={1}/>
  },
  {
    path:"/:category/:subcategory/:page",
    element:<Home reset={2}/>
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
