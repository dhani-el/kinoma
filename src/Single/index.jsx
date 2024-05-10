

import Sidebar from "./sidebar"
import MainContent from "./Content"

import { useLocation, useParams } from "react-router-dom"
import { useEffect,useState } from "react"


function SingleMovie(){
    const queries  = useParams();
    const baseUrl = "https://api.themoviedb.org/3/"
    const [data,setData]=useState();
    useEffect(function(){
        fetch(`${baseUrl}${queries.type}/${queries.id}?api_key=${import.meta.env.VITE_TMDB_API_KEY }`)
        .then(response => response.json())
        .then(response => {setData(init=>response); return response})
        .then(response => console.log(response))
        .catch(err => console.error(err));

    },[])
    return <div className="w-full min-h-full flex justify-between">
                <Sidebar/>
                <MainContent data={data} />
            </div>
}




export default SingleMovie





