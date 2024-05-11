
import Sample from "../Assets/Images/sample.jpg"

import { StarFilled,ScheduleOutlined, MenuOutlined } from "@ant-design/icons"
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

function MainContent({data,writers,casts,director ,videoKey}){
    const queries  = useParams();
    console.log("videokey is",videoKey);
    return <div className="w-full h-screen pt-4 px-4 overflow-y-scroll bg-black">
                    <Logo/>
                    <VideoComponent url={videoKey?.key} />
                    {data && <MainInfoComponent rating={{avg:data.vote_average,tot:data.vote_count}} genre={data.genres} episodes={data.number_of_episodes}type={queries.type} pgrating={data.adult} title={queries.type==="tv" ? data.name:data.title} year={queries.type==="tv" ? data.first_air_date:data.release_date}/>}
                    <div className="pl-8  justify-between flex">
                        {data && <ExtraInfoComponent stars={casts.slice(0,11)} number={data.popularity} writers={writers} overview={data.overview} director={director.name}  />}
                        <ComplimentaryInfo/>
                    </div>
             </div>
}

function Logo(){
    return <p className=" text-center pt-4  font-barbaropt landscape:text-4xl font-bold hover:cursor-default text-blue-900" >KINOMA</p>
}
function VideoComponent({url}){
    return <div className="w-full h-[85%] rounded-lg bg-blue-400">
                    <ReactPlayer url={`https://www.youtube.com/watch?v=${url}`} width={"100%"} height={'100%'} muted = {true} controls={true} light={true}  />
            </div>
}

function MainInfoComponent({type,title,year,pgrating,rating,duration,genre,episodes}){
    return <div className="flex text-white w-full justify-between  px-8 py-2 font-bold items-center ">
                <div className="flex gap-4 justify-between items-center ">
                    <p>{title}</p>
                    <p>{new Date(year).getFullYear()}</p>
                    <p>{pgrating?"PG-18":"PG-13"}</p>
                    {type === "movies"&&<p>{duration}</p>}
                    {type === "tv"&&<p>{episodes} Eps</p>}
                   {genre && <Genre genre={genre}/>}
                </div>
                <Rating rating={rating}/>
            </div>
}

function Genre({genre}){
    return <div className="flex gap-2 font-normal ">
                <p className="p-1 border-blue-500 border-[0.06rem] rounded-md">{genre[0].name}</p>
                <p className="p-1 border-blue-500 border-[0.06rem] rounded-md">{genre[1].name}</p>
            </div>
}

function Rating({rating}){
    return <div className="flex items-center">
        <StarFilled className="text-yellow-400" /><p>{String(rating.avg).slice(0,3)}</p>|{rating.tot}
    </div>
}

function ExtraInfoComponent({overview,director,number,writers,stars}){
    console.log("stars :",stars);
    return <div className="w-[70%] text-white text-sm font-montserrat font-medium flex flex-col justify-between">
                <p>{overview}</p>
                <p className="">Director: <span className="text-blue-500">{director}</span></p>
                <p className="flex gap-1">Writer: <span className="text-blue-500 flex gap-1 flex-wrap">{writers.map(writer=><p>{writer.name},</p>)}</span></p>
                <p className="flex gap-1">Stars: <span className="text-blue-500 flex gap-1 flex-wrap">{stars.map(star=><p>{star},</p>)}</span></p>
                <Accolades number={number} />
            </div>
}

function ComplimentaryInfo(){
    return <div className="w-[26%] h-[90%] px-2 flex flex-col justify-between items-center">
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


function Recommendations({srcs = [Sample,Sample,Sample]}){
    return <div className="w-full relative ">
                <div className="grid grid-cols-3 w-full relative gap-x-[0.15rem] ">
                    <img className=" rounded-tl-md" src={srcs[0]}/>
                    <img src={srcs[1]}/>
                    <img className=" rounded-tr-md" src={srcs[2]}/>
                </div>
                <div className=" flex text-[0.7rem] p-1 w-full gap-1 items-center rounded-b-md bg-gray-600 text-white absolute"><MenuOutlined/><p>The best Movies and shows this month</p></div>
             </div>
}

function Accolades({number}){
    return <div className=" relative flex w-full border-[0.05rem] border-white  rounded-md items-center gap-1">
                <p className=" border-[0.08rem] border-transparent bg-blue-600 p-1 px-4 text-white rounded-md">Top Rating #{Math.floor(number)}</p>
                <p className="text-white">Awards 9 nominations</p>
            </div>
}
export default MainContent