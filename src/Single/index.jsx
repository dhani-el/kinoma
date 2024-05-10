

import Sidebar from "./sidebar"
import MainContent from "./Content"

import { useLocation, useParams } from "react-router-dom"


function SingleMovie(){
    const queries  = useParams()
    console.log(queries);
    return <div className="w-full min-h-full flex justify-between">
                <Sidebar/>
                <MainContent/>
            </div>
}




export default SingleMovie





