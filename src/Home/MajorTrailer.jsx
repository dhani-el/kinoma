
import { useEffect, useState } from "react";
import ADimage from "../Assets/Images/test.jpg";
import { ArrowLeftOutlined, ArrowRightOutlined, LineOutlined, CaretRightFilled } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { useMediaQuery } from 'react-responsive'
import { useNavigate,useParams} from "react-router-dom";

function MajorTrailer(){
    const [mainData, setMainData] = useState([]);
    const params = useParams()
    useEffect(function(){

        fetch(`https://api.themoviedb.org/3/trending/${params.category || "movie"}/week?api_key=${import.meta.env.VITE_TMDB_API_KEY }`)
        .then(response => response.json())
        .then(response => {setMainData(init=>response); return response})
        .catch(err => console.error(err));
    },[])
    return <div className="w-full ">
                {/* <Imagee metaImage={[{image:ADimage,awards:15,nominations:32,title:"LIONSGATE MOVIES",description:"person wey no mind wheni land Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda similique nihil praesentium rem fuga, soluta ipsa qui magnam tenetur culpa, facere ipsam ut voluptate nobis repudiandae doloribus dolore architecto eaque?  land Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda similique nihil praesentium rem fuga, soluta ipsa qui magnam tenetur culpa, facere ipsam ut voluptate nobis repudiandae doloribus dolore architecto eaque?",currentID:2,timestamp:"3:40",amount:7,thumbnail:ADimage} */}
                <Imagee metaImage={mainData.results} />
            </div>
}

function Imagee({metaImage}){
    const isLandscape = useMediaQuery({ query: '(orientation: portrait)' })
    return <div className="w-full h-auto landscape:h-[85vh] overflow-hidden relative">
                <div className="h-full w-full">
                {metaImage ? <Swiper id="sperSlide" className="w-full h-full relative" slidesPerView={1} centeredSlides  modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }}>

                              {metaImage?.map(function(singleImage){
                            return <SwiperSlide style={{width:"100%"}} className="w-full h-full flex items-center justify-center"> <AnImage trailertype={singleImage.name?"tv":"movie"} id={singleImage.id} ADimage={`https://image.tmdb.org/t/p/original/${isLandscape?singleImage.poster_path:singleImage.backdrop_path}.jpg`} awards={String(singleImage.vote_average).slice(0,3)} nominations={singleImage.vote_count} title={singleImage.name || singleImage.title} description={singleImage.overview} currentID={singleImage.currentID} timestamp={singleImage.timestamp} thumbnail={`https://image.tmdb.org/t/p/w215/${singleImage.poster_path}.jpg`} amount={singleImage.amount} />  
                            </SwiperSlide> 
                        })
                 }
                </Swiper> : <Skeleton baseColor="#202020" highlightColor="#444" count={1} containerClassName="w-full h-[40vh] landscape:h-[85vh] flex" />}
                </div>
            </div>
}

function AnImage({trailertype,id,ADimage,awards,nominations,title,description,currentID,timestamp,thumbnail,amount}){
    return <div className="w-screen flex items-center justify-center overflow-hidden h-full">
                        <div className="w-full h-full absolute top-0 left-0 bg-black opacity-55 z-10">

                        </div>
                <img src={ADimage} className="max-w-full h-auto object-contain object-left-top -z-10" />
                <MetaDetails  trailertype={trailertype} id={id} awards={awards} nominations={nominations} title={title} description={description} currentID={currentID} timestamp={timestamp} thumbnail={thumbnail} amount={amount}/>
            </div>
}

function MetaDetails({trailertype,id,awards,nominations,title,description,currentID,timestamp,thumbnail,amount}){
    return <div className=" gap-[3rem] landscape:gap-0 flex flex-col-reverse landscape:flex-row justify-between w-[90%] items-center absolute text-white z-50">
        <div className="w-full landscape:w-[15vw] flex items-center justify-center">
            <Left awards={awards} nominations={nominations}/>
        </div>
        <div className="w-full landscape:w-[30vw]">
            <Right  trailertype ={trailertype} id={id} title={title} description={description} currentID={currentID} timestamp={timestamp} thumbnail={thumbnail} amount={amount}/>
        </div>
    </div>
}

function Left({awards,nominations}){
    return <div className="w-[60%] landscape:w-[90%] h-full justify-between items-center flex landscape:flex-col">
                <div className="flex flex-col items-center">
                    <p className="font-bebas text-3xl landscape:text-7xl">{awards}</p>
                    <p className="font-montserrat text-[0.6rem] font-bold">Rating</p>
                </div>
                {/* <p className="text-8xl self-start font-montserrat flex items-start align-text-top ">
                    __
                </p> */}
                <LineOutlined  className=" hidden text-4xl landscape:text-6xl self-start font-montserrat landscape:flex items-start "/>
                <div className="flex flex-col items-center">
                    <p className="font-bebas text-3xl landscape:text-7xl">{nominations}</p>
                    <p className="text-center font-montserrat text-[0.6rem] font-bold">Voters</p>
                </div>
    </div>
}

function Right({trailertype,title,description,thumbnail,currentID,timestamp,id}){
    return <div className="w-full flex flex-col gap-6">
                <div className="w-full landscape:w-[90%] overflow-hidden">
                    <p className="w-full max-h-[6rem] text-2xl landscape:text-5xl overflow-hidden font-bebas text-ellipsis text-wrap break-words  text-center">{title}</p>
                </div>
                <div className="w-full  flex-col">
                <p className="w-full landscape:w-[90%] self-center landscape:self-start max-h-[6.125rem] text-pretty text-sm overflow-hidden text-ellipsis  font-montserrat font-medium">{description} </p>
                <p className="w-[90%] text-end">{currentID}</p>
                </div>
                <TrailerNIndicator trailertype={trailertype} id={id} />
            </div>
}

function TrailerNIndicator({trailertype,id,timestamp,thumbnail,amount}){
    const params = useParams()
    const navigate = useNavigate()
    function handleWatchTrailer(){
        // if (type ==="all"){
        // navigate(`/single/${type ==="movies" ?"movie":type}/${id}`)

        // }
        navigate(`/single/${trailertype}/${id}`)
    }
    return <div onClick={handleWatchTrailer} className="flex h-fit w-[100%] items-stretch  justify-between hover:cursor-pointer">
                <div className="flex  w-[100%] items-center justify-center pt-4 landscape:border-t-[0.06rem]">
                    {/* <div className="w-[50%]" >
                        <img src={thumbnail} className="w-100%" />
                    </div> */}
                        <div className="flex items-center gap-2">
                            <CaretRightFilled className="text-xl p-1 text-white rounded-full border-[0.2rem] border-blue-500 "/>
                        <div>
                        <p className="text-sm font-bebas">WATCH TRAILER</p>
                            {/* <p>{timestamp}</p> */}
                        </div>
                    </div>
                </div>
                {/* <Indicator  amount={amount}/> */}
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