import { useEffect, useState } from "react";
import { StarFilled, HeartFilled } from "@ant-design/icons";
import Paginator from "./Pagination";
import { categoriez,majCat } from "../utils/constants";
import { useNavigate,useLocation, useParams } from "react-router-dom";


import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

function Movies({majorCategory,minorcategory,type,link,darkmode}){
    const resetValue = 1
    const [page,setPage] = useState(1);
    const [mainData, setMainData] = useState();
    const baseUrl = "https://api.themoviedb.org/3/";
    const params = useParams();
    const trendingfied = params.category === "movie"?"movies":params.category
    useEffect(function(){
        if(params.category){
            fetch(`${baseUrl}${params.subcategory ==="trending"?"trending":params.category}/${params.subcategory==="trending"?params.category:params.subcategory}${params.subcategory==="trending"?"/week":""}?page=${params.page}&api_key=${import.meta.env.VITE_TMDB_API_KEY }`)
            .then(response => response.json())
            .then(response => {setMainData(init=>response); return response})
            .catch(err => console.error(err));
        }else{
            fetch(`${baseUrl}trending/movie/week?page=1&api_key=${import.meta.env.VITE_TMDB_API_KEY }`)
            .then(response => response.json())
            .then(response => {setMainData(init=>response); return response})
            .catch(err => console.error(err));
        }
    },[page,link])

    useEffect(function(){
        setPage(init=> resetValue)
    },[link])

    return <div className=" w-full flex flex-col items-center">
                <div className={` w-full p-12 grid grid-cols-1 landscape:grid-cols-5 relative ${darkmode?"text-white":"text-black"} gap-x-8 gap-y-12 justify-center`}>
                    {minorcategory  == "COMING SOON" && <StartText/>}
                    {mainData ?<Variantii movieData={mainData?.results} type = {type}/>:<MoviesFallback amount={20} />}
                </div>
                <Paginator current={Number(params.page)} number={mainData?.total_pages} indicatoDest={setPage}/>
            </div>
}

function MoviesFallback({amount}){
    function arrayLize(number){
        let ray = []
        for(let i = 0  ; i< number ; i++){
            ray.push(i);
        }
        return ray
    }
    return <>
                {arrayLize(amount).map(function(){
                    return <Skeleton baseColor="#202020" highlightColor="#444" count={1} containerClassName="w-full min-h-[25vh] flex" />
                })}
             </>
}

function Varianti({movieData=[]}){
    return <div>
                <StartText/>
                {movieData.map(function(singleData){
                    return <Amovie img={singleData.img} title={singleData.title} status={singleData.status} rating={singleData.rating} year={singleData.year} />
                })}
            </div>
}
function Variantii({movieData=[],type="movie"}){
    return <>
                {movieData.map(function(singleData){
                    return <Amovie  realtype={singleData.title? "movie":"tv"} type={type} id={singleData.id} img={`https://image.tmdb.org/t/p/w500/${singleData.poster_path}.jpg`} title={singleData.name || singleData.title} status={singleData.status} rating={String(singleData.vote_average).slice(0,3)} year={ new Date(singleData.first_air_date || singleData.release_date).getFullYear()} />
                })}
            </>
}

function StartText(){
    return <div className=" justify-center content-center">
                <p className="text-4xl font-bebas"> NEW & UPCOMING MOVIES</p>
                <p className="font-montserrat text-xs font-bold">Exciting, emotional and unexpected</p>
            </div>
}

function Amovie({realtype,type,id,img,title,status,rating,year}){
    const navigate = useNavigate()
    function handleClickNavigation(){
        // if (type ==="all"){
        // navigate(`/single/${type ==="movies" ?"movie":type}/${id}`)

        // }
        navigate(`/single/${realtype}/${id}`)
    }
    const [imgloaded,setImgLoaded] = useState(false);
    return <div onClick={()=>{handleClickNavigation()}} className="hover:opacity-70 hover:w-[96%] hover:h-[965] box-border ">
                {<img src={img} onLoad={()=>setImgLoaded(init=>true)}/> || <Skeleton  baseColor="#202020" highlightColor="#444" count={1} containerClassName="w-full min-h-[25vh] flex"/>}
                <p className="text-nowrap text-ellipsis w-full overflow-hidden whitespace-nowrap font-montserrat font-semibold text-xs text-center ">{title}</p>
                <div className="flex w-full justify-between items-center">
                    <p className="font-monetizer text-slate-500">{year}</p>
                    <div className="flex w-[60%] gap-4  items-center justify-end">
                        <HeartFilled className="text-red-600"/>
                        <StarFilled className="text-yellow-500"/>
                        <p className="text-slate-500 font-monetizer">{rating}</p>
                    </div>
                </div>
                <p className=" font-montserrat text-slate-500 text-[0.6rem] font-medium">{status}</p>
            </div>
}


function Movies2({majorCategory,minorcategory,category}){
    const resetValue = 1
    const [page,setPage] = useState(1);
    const [mainData, setMainData] = useState([]);
    const second = minorcategory?.link
    const baseUrl = "https://api.themoviedb.org/3/";
    useEffect(function(){

        fetch(`${baseUrl}${category}?page=${page}&api_key=${import.meta.env.VITE_TMDB_API_KEY }`)
        .then(response => response.json())
        .then(response => {setMainData(init=>response); return response})
        .catch(err => console.error(err));
    },[page,minorcategory,category,majorCategory])

    useEffect(function(){
        setPage(init=> resetValue)
    },[minorcategory,category,majorCategory])

    return <div className=" w-full">
                <div className=" w-full p-12 grid grid-cols-5 relative text-white gap-x-8 gap-y-12 justify-center">
                    <StartText/>
                    <Variantii movieData={mainData.results}/>
                </div>
                <Paginator current={mainData.page} number={mainData.total_pages} indicatoDest={setPage}/>
            </div>
}


function Moviess(){
    
}


export default Movies