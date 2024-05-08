
import Sample from "../Assets/Images/sample.jpg"

import { StarFilled,ScheduleOutlined, MenuOutlined } from "@ant-design/icons"


function MainContent(){
    return <div className="w-[80%] h-screen pt-4 px-4 overflow-hidden">
                    <VideoComponent/>
                    <MainInfoComponent/>
                    <div className="pl-8 h-[40%] justify-between overflow-y-scroll flex">
                        <ExtraInfoComponent/>
                        <ComplimentaryInfo/>
                    </div>
             </div>
}

function VideoComponent(){
    return <div className="w-full h-[50%] rounded-lg bg-blue-400">
                <video/>
            </div>
}

function MainInfoComponent(){
    return <div className="flex w-full justify-between  px-8 py-2 font-bold items-center ">
                <div className="flex gap-4 justify-between items-center ">
                    <p>Top Gun Maverick</p>
                    <p>2022</p>
                    <p>PG-13</p>
                    <p>2h 10m</p>
                    <Genre/>
                </div>
                <Rating/>
            </div>
}

function Genre(){
    return <div className="flex gap-2 font-normal ">
                <p className="p-1 border-blue-500 border-[0.06rem] rounded-md">Drama</p>
                <p className="p-1 border-blue-500 border-[0.06rem] rounded-md">Action</p>
            </div>
}

function Rating(){
    return <div className="flex items-center">
        <StarFilled className="text-yellow-400" /><p>8.5</p>|350k
    </div>
}

function ExtraInfoComponent(){
    return <div className="w-[70%] text-sm font-montserrat font-medium flex flex-col justify-between">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto eum, ducimus, aliquid iusto illum neque magni ipsum maxime amet dignissimos totam doloremque. Odit velit quas error explicabo at itaque quibusdam mollitia eligendi dolorum quia? Commodi debitis quibusdam quaerat voluptate suscipit explicabo totam possimus error.</p>
                <p className="">Director: <span className="text-blue-500">Joseph Kasinski</span></p>
                <p className="">Writer: <span className="text-blue-500">Jim Kash,Jack Epps,Peter Craig</span></p>
                <p className="">Stars: <span className="text-blue-500">Tom Cruise, Jennifer Connelly,Miles Teller</span></p>
                <Accolades/>
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

function Accolades(){
    return <div className=" relative flex w-full border-[0.05rem] border-black  rounded-md items-center gap-1">
                <p className=" border-[0.08rem] border-transparent bg-blue-600 p-1 px-4 text-white rounded-md">Top Rated Movies #64</p>
                <p>Awards 9 nominations</p>
            </div>
}
export default MainContent