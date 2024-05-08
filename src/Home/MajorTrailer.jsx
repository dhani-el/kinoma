
import { useEffect, useState } from "react";
import ADimage from "../Assets/Images/test.jpg";
import { ArrowLeftOutlined, ArrowRightOutlined, LineOutlined, CaretRightFilled } from "@ant-design/icons";


function MajorTrailer(){
    const [mainData, setMainData] = useState([])
    useEffect(function(){

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY }`)
        .then(response => response.json())
        .then(response => {setMainData(init=>response); return response})
        .then(response => console.log(response))
        .catch(err => console.error(err));
    },[])
    return <div className="w-full ">
                {/* <Imagee metaImage={[{image:ADimage,awards:15,nominations:32,title:"LIONSGATE MOVIES",description:"person wey no mind wheni land Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda similique nihil praesentium rem fuga, soluta ipsa qui magnam tenetur culpa, facere ipsam ut voluptate nobis repudiandae doloribus dolore architecto eaque?  land Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda similique nihil praesentium rem fuga, soluta ipsa qui magnam tenetur culpa, facere ipsam ut voluptate nobis repudiandae doloribus dolore architecto eaque?",currentID:2,timestamp:"3:40",amount:7,thumbnail:ADimage} */}
                <Imagee metaImage={mainData.results}/>
            </div>
}

function Imagee({metaImage=[]}){
    return <div className="w-full h-[85vh] overflow-hidden relative">
                <div className="w-full h-full absolute top-0 left-0 bg-black opacity-45">

                </div>
                <div className="h-full flex w-max">
                    {
                        metaImage.map(function(singleImage){
                            return <AnImage ADimage={`https://image.tmdb.org/t/p/original/${singleImage.backdrop_path}.jpg`} awards={singleImage.vote_average} nominations={singleImage.vote_count}
                            title={singleImage.title} description={singleImage.overview} currentID={singleImage.currentID} timestamp={singleImage.timestamp} thumbnail={singleImage.thumbnail} amount={singleImage.amount} />
                        })
                    }
                </div>
            </div>
}

function AnImage({ADimage,awards,nominations,title,description,currentID,timestamp,thumbnail,amount}){
    return <div className="w-screen flex items-center overflow-hidden">
                <img src={ADimage} className="max-w-full h-auto object-contain" />
                <MetaDetails awards={awards} nominations={nominations} title={title} description={description} currentID={currentID} timestamp={timestamp} thumbnail={thumbnail} amount={amount}/>
            </div>
}

function MetaDetails({awards,nominations,title,description,currentID,timestamp,thumbnail,amount}){
    return <div className="pl-6 pt-8 flex justify-between w-full items-center absolute text-white">
        <div className="w-[15vw]">
            <Left awards={awards} nominations={nominations}/>
        </div>
        <div className="w-[30vw]">
            <Right title={title} description={description} currentID={currentID} timestamp={timestamp} thumbnail={thumbnail} amount={amount}/>
        </div>
    </div>
}

function Left({awards,nominations}){
    return <div className="w-full h-full justify-between items-center flex landscape:flex-col">
                <div className="flex flex-col items-center">
                    <p className="font-bebas text-7xl">{awards}</p>
                    <p className="font-montserrat text-[0.6rem] font-bold">Rating</p>
                </div>
                {/* <p className="text-8xl self-start font-montserrat flex items-start align-text-top ">
                    __
                </p> */}
                <LineOutlined  className="text-6xl self-start font-montserrat flex items-start "/>
                <div className="flex flex-col items-center">
                    <p className="font-bebas text-7xl">{nominations}</p>
                    <p className="text-center font-montserrat text-[0.6rem] font-bold">Voters</p>
                </div>
    </div>
}

function Right({title,description,currentID,timestamp,thumbnail,amount}){
    return <div className="w-full flex flex-col gap-6">
                <div className="w-[90%] overflow-hidden">
                    <p className="w-full max-h-[6rem] text-5xl overflow-hidden font-bebas text-ellipsis text-wrap break-words  text-left">{title}</p>
                </div>
                <div className="w-full  flex-col">
                <p className="w-[90%] max-h-[6.125rem] text-sm overflow-hidden text-ellipsis  font-montserrat font-medium">{description} </p>
                <p className="w-[90%] text-end">{currentID}</p>
                </div>
                <TrailerNIndicator timestamp={timestamp} thumbnail={thumbnail} amount={amount}/>
            </div>
}

function TrailerNIndicator({timestamp,thumbnail,amount}){
    return <div className="flex h-fit w-[90%] items-stretch  justify-between">
                <div className="flex  w-[80%] items-center justify-between border-t-[0.06rem]">
                    <div className="w-[50%]" >
                        <img src={thumbnail} className="w-100%" />
                    </div>
                    <div className="flex items-center gap-[2rem]">
                            <CaretRightFilled className="text-xl p-1 text-white rounded-full border-[0.2rem] border-blue-500 "/>
                        <div>
                            <p className="text-xs font-bebas">WATCH TRAILER</p>
                            <p>{timestamp}</p>
                        </div>
                    </div>
                </div>
                <Indicator  amount={amount}/>
             </div>
}

function Indicator({amount}){
    function arraylize(amount){
        let ray = []

        for(let i = 0 ; i < amount; i++){
            ray.push(i)
        }

        return ray
    }
    return <div className="flex flex-col items-end justify-end w-12 border-t-[0.06rem] pt-2 border-blue-500">
                <div className="flex flex-col gap-1">
                    {arraylize(amount).map(function(){
                        return <span className="block w-2 h-2 rounded-2xl bg-white"></span>
                    })}
                </div>
                <div className="flex text-sm">
                    <ArrowLeftOutlined/>
                    <ArrowRightOutlined/>
                </div>
    </div>
}

export default MajorTrailer