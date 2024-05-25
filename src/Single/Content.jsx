
import { StarFilled,ScheduleOutlined, MenuOutlined } from "@ant-design/icons"
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect, useState } from "react";


function MainContent({darktheme,data,writers,casts,director ,videoKey}){
    const queries  = useParams();
    return <div className={`w-full flex flex-col gap-7 items-center pt-4 px-8 overflow-y-scroll ${darktheme?"bg-black":"bg-white"}`}>
                    <Logo darktheme={darktheme}/>
                    <VideoComponent url={videoKey?.key} />
                     <MainInfoComponent darktheme={darktheme} rating={{avg:data?.vote_average,tot:data?.vote_count}} genre={data?.genres} episodes={data?.number_of_episodes}type={queries.type} pgrating={data?.adult} title={ data?.name || data?.title} year={data?.first_air_date || data?.release_date}/>
                    <div className="landscape:pl-8  justify-between flex landscape:flex-row flex-col">
                        <ExtraInfoComponent darktheme={darktheme} stars={casts?.slice(0,11)} number={data?.popularity} writers={writers} overview={data?.overview} director={director?.name}  />
                        <ComplimentaryInfo/>
                    </div>
             </div>
}

function Logo({darktheme}){
    return <p className={` py-2 self-start font-bebas text-4xl landscape:text-4xl font-bold hover:cursor-default ${darktheme?"text-slate-200":"text-slate-950"}`} >KINOMA</p>
}
function VideoComponent({url}){
    return <div className=" w-[98%] h-[50vw] mt-6 landscape:w-[90%] landscape:h-[65vh] rounded-lg ">
                    {url ? <ReactPlayer  url={`https://www.youtube.com/watch?v=${url}`} width={"100%"} height={"100%"}  muted = {true} controls={true} light={true}  />:<Skeleton baseColor="#202020" highlightColor="#444" count={1} height={"100%"}/>}
            </div>
}

function MainInfoComponent({darktheme,type,title,year,pgrating,rating,duration,genre,episodes}){
    return <div className={`flex landscape:flex-row flex-col ${darktheme?"text-white":"text-black"} w-full justify-between  landscape:px-8 landscape:py-2 font-bold landscape:items-center `}>
                <div className="flex landscape:flex-row flex-col gap-4 landscape:justify-between landscape:items-center landscape:w-[70%] ">
                    <p className="landscape:text-4xl text-2xl overflow-hidden text-ellipsis whitespace-nowrap landscape:leading-[3rem] ">{title || <Skeleton containerClassName="w-full block" baseColor="#202020" highlightColor="#444" />}</p>
                    <div className="flex w-full justify-between landscape:hidden overflow-scroll ">
                        <p  className="landscape:hidden">{new Date(year).getFullYear() ||  <Skeleton containerClassName="w-[2rem] block" baseColor="#202020" highlightColor="#444" />}</p>
                        <p className="whitespace-nowrap landscape:hidden">{(pgrating?"PG-18":"PG-13")}</p>
                        <div className="landscape:hidden">{rating.avg ? <Rating rating={rating}/> : <Skeleton containerClassName="w-[6rem] block" baseColor="#202020" highlightColor="#444" />}
                        </div>
                    </div>
                    <div className="landscape:hidden">{genre ? <Genre genre={genre}/>: <Skeleton containerClassName="w-[4rem] block" baseColor="#202020" highlightColor="#444" />}
                    </div>
                    <p className="hidden landscape:block">{new Date(year).getFullYear() ||  <Skeleton containerClassName="w-[2rem] block" baseColor="#202020" highlightColor="#444" />}</p>
                   <p className="whitespace-nowrap landscape:block hidden">{(pgrating?"PG-18":"PG-13")}</p>
                    {type === "movies"&&<p>{duration||  <Skeleton containerClassName="w-[2rem] block" baseColor="#202020" highlightColor="#444" />}</p>}
                    {type === "tv"&&<p>{episodes||  <Skeleton containerClassName="w-[2rem] block" baseColor="#202020" highlightColor="#444" />} Eps</p>}
                   <div className="landscape:block hidden">{genre ? <Genre genre={genre}/>: <Skeleton containerClassName="w-[4rem] block" baseColor="#202020" highlightColor="#444" />}</div>
                </div>
                <div className="landscape:block hidden">{rating.avg ? <Rating rating={rating}/> : <Skeleton containerClassName="w-[6rem] block" baseColor="#202020" highlightColor="#444" />}
                </div>
            </div>
}

function Genre({genre= []}){
    return <div className="flex gap-2 font-normal landscape:justify-start justify-between ">
                {
                    genre?.slice(0,3).map(function(agenre){
                        return <p className="p-1 border-blue-500 border-[0.06rem] rounded-md flex items-center justify-center text-center">{agenre.name}</p>
                 
                    })
                }
            </div>
}

function Rating({rating}){
    return <div className="flex items-center">
        <StarFilled className="text-yellow-400" />
        <p>{String(rating.avg).slice(0,3)}</p>|{rating.tot}
    </div>
}

function ExtraInfoComponent({darktheme,overview,director,number,writers,stars}){
    return <div className={`w-full landscape:w-[70%] gap-6 pb-6 ${darktheme?"text-white":"text-black"} text-sm font-montserrat font-medium flex flex-col justify-between`}>
                <p >{overview ||  <Skeleton containerClassName="w-full min-h-[8rem] flex" baseColor="#202020" highlightColor="#444" />}</p>
                {director ? <p className="">Director: <span className="text-blue-500">{director}</span></p> : <Skeleton containerClassName="w-full min-h-[2rem] flex" baseColor="#202020" highlightColor="#444" />}
                {writers ?<div className="flex gap-1">Writer: <span className="text-blue-500 flex gap-1 flex-wrap">{writers?.map(writer=><p>{writer?.name},</p>)}</span></div> : <Skeleton containerClassName="w-full min-h-[2rem] flex" baseColor="#202020" highlightColor="#444" />}
                {stars?<div className="flex gap-1">Stars: <span className="text-blue-500 flex gap-1 flex-wrap">{stars?.map(star=><p>{star},</p>)}</span></div> : <Skeleton containerClassName="w-full min-h-[2rem] flex" baseColor="#202020" highlightColor="#444" />}
                {number ? <Accolades number={number} darktheme={darktheme} />  : <Skeleton containerClassName="w-full min-h-[2rem] flex" baseColor="#202020" highlightColor="#444" />}
            </div>
}

function ComplimentaryInfo(){
    return <div className="landscape:w-[26%] landscape:h-[90%] mb-12 landscape:mb-0 landscape:gap-0 gap-8 landscape:py-0 landscape:px-2 flex flex-col landscape:justify-between items-center">
                <Showtimes/>
                <MoreWatch/>
                <Recommendations/>
            </div>
}

function Showtimes(){
    return <div className="flex w-full bg-blue-700 text-white items-center justify-center gap-4 font-bold p-2 rounded-md">
              <ScheduleOutlined className="text-lg"/>  <p>see showtimes</p>
            </div>
}
function MoreWatch(){
    return <div className="flex w-full bg-blue-300 border-blue-800 border-[0.1rem] text-black items-center justify-center gap-4 font-bold p-2 rounded-md">
              <MenuOutlined />  <p>More Watch Options</p>
            </div>
}


function Recommendations(){
    const queries  = useParams();
    const baseUrl = "https://api.themoviedb.org/3/";
    const [recommendations,setRecommendations] = useState()

    useEffect(function(){
        fetch(`${baseUrl}${queries.type}/${queries.id}/recommendations?api_key=${import.meta.env.VITE_TMDB_API_KEY }`)
        .then(response => response.json())
        .then(response => {setRecommendations(init=>response);
            return response})
        .then(response => console.log("this is the recomendations",response))
        .catch(err => console.error(err));
    },[])
    return <div className="w-full relative landscape:mb-0 pb-4">
        {recommendations &&
                <div className="grid grid-cols-3 w-full relative gap-x-[0.15rem] ">
                
                    <img className=" rounded-tl-md" src={`https://image.tmdb.org/t/p/w500/${recommendations?.results[0]?.poster_path}.jpg`}/>
                    <img src={`https://image.tmdb.org/t/p/w500/${recommendations?.results[1]?.poster_path}.jpg`}/>
                    <img className=" rounded-tr-md" src={`https://image.tmdb.org/t/p/w500/${recommendations?.results[2]?.poster_path}.jpg`}/>

                </div>}
                <div className=" flex text-[0.7rem] p-1 w-full gap-1 items-center rounded-b-md bg-gray-600 text-white absolute"><MenuOutlined/><p>You might like these</p></div>
             </div>
}

function Accolades({number,darktheme}){
    return <div className={` relative flex w-full border-[0.05rem] ${darktheme?"border-black":"border-white" } rounded-md items-center gap-1`}>
                <p className={` border-[0.08rem] border-transparent bg-blue-600 p-1 px-4 text-white rounded-md`}>Top Rating #{Math.floor(number)}</p>
                <p className={`${darktheme?"text-black":"text-white" }`}>Awards 9 nominations</p>
            </div>
}
export default MainContent