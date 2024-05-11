

import Sidebar from "./sidebar"
import MainContent from "./Content"

import { useLocation, useParams } from "react-router-dom"
import { useEffect,useState } from "react"


function SingleMovie(){
    const queries  = useParams();
    const baseUrl = "https://api.themoviedb.org/3/"
    const [data,setData]=useState();
    const [videodata,setVideoData]=useState();
    const [director, setDirector] = useState();
    const [writers, setWriters] = useState();
    const [cast,setCast]=useState();
    useEffect(function(){
        fetch(`${baseUrl}${queries.type}/${queries.id}?api_key=${import.meta.env.VITE_TMDB_API_KEY }`)
        .then(response => response.json())
        .then(response => {setData(init=>response); return response})
        .then(response => console.log(response))
        .catch(err => console.error(err));

    },[]);

    useEffect(function(){
        fetch(`${baseUrl}${queries.type}/${queries.id}/videos?api_key=${import.meta.env.VITE_TMDB_API_KEY }`)
        .then(response => response.json())
        .then(response => {setVideoData(init=>{
            return response.results.find(function(result){
                return (result.name.match("Official Trailer")|| result.name.match("Official Teaser") )  && result.key
            })});
             return response})
        .then(response => console.log(response))
        .catch(err => console.error(err));

    },[])

    useEffect(function(){
        fetch(`${baseUrl}${queries.type}/${queries.id}/credits?api_key=${import.meta.env.VITE_TMDB_API_KEY }`)
        .then(response => response.json())
        .then(response => {setDirector(init=>{
            return response.crew.find(function(result){
                console.log("dir results :",result);
                return result.job === "Director"
            })});
             return response})
        .then(response => {
                        setWriters(init=>{
                                return response.crew.filter(function(result){
                                    return result.department === "Writing"
                                })});
                        setCast(init=>{
                                return response.cast.map(function(result){
                                    return result.name 
                                })});
                        
             return response})
        .then(response => console.log(response))
        .catch(err => console.error(err));

    },[])
    return <div className="w-full min-h-full flex justify-between">
                {/* <Sidebar/> */}
                <MainContent data={data} casts={cast} writers={writers} director={director} videoKey={videodata} />
            </div>
}




export default SingleMovie





