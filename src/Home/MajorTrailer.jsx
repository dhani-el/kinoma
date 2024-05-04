
import ADimage from "../Assets/Images/test.jpg";
import { ArrowLeftOutlined, ArrowRightOutlined, PlayCircleTwoTone } from "@ant-design/icons";


function MajorTrailer(){
    return <div className="w-full absolute top-0 left-0 z-0">
                <Imagee metaImage={[{image:ADimage,awards:15,nominations:32,title:"Lionsgat movies",description:"person wey no mind wheni land",currentID:2,timestamp:"3:40",amount:7,thumbnail:ADimage}
                    ,{image:ADimage,awards:7,nominations:12}]}/>
            </div>
}

function Imagee({metaImage=[]}){
    return <div className="w-full h-[75vh] overflow-hidden">
                <div className="h-full flex w-max">
                    {
                        metaImage.map(function(singleImage){
                            return <AnImage ADimage={singleImage.image} awards={singleImage.awards} nominations={singleImage.nominations}
                            title={singleImage.title} description={singleImage.description} currentID={singleImage.currentID} timestamp={singleImage.timestamp} thumbnail={singleImage.thumbnail} amount={singleImage.amount} />
                        })
                    }
                </div>
            </div>
}

function AnImage({ADimage,awards,nominations,title,description,currentID,timestamp,thumbnail,amount}){
    return <div className="w-screen flex items-center overflow-hidden">
                <img src={ADimage} className="w-full h-auto" />
                <MetaDetails awards={awards} nominations={nominations} title={title} description={description} currentID={currentID} timestamp={timestamp} thumbnail={thumbnail} amount={amount}/>
            </div>
}

function MetaDetails({awards,nominations,title,description,currentID,timestamp,thumbnail,amount}){
    return <div className="pl-6 flex justify-between w-full items-center absolute text-white">
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
                    <p>{awards}</p>
                    <p>Academy Awards</p>
                </div>
                <p className="text-8xl">
                    -
                </p>
                <div className="flex flex-col items-center">
                    <p>{nominations}</p>
                    <p className="text-center">Academy Award Nominations</p>
                </div>
    </div>
}

function Right({title,description,currentID,timestamp,thumbnail,amount}){
    return <div className="w-full font">
                <div className="w-full leading-10 text-ellipsis text-justify overflow-hidden ">
                    <p className="text-3xl">{title}</p>
                </div>
                <div className="w-full flex-col">
                <p className="w-[90%] h-[20vh]">{description}</p>
                <p className="w-[90%] text-end">{currentID}</p>
                </div>
                <TrailerNIndicator timestamp={timestamp} thumbnail={thumbnail} amount={amount}/>
            </div>
}

function TrailerNIndicator({timestamp,thumbnail,amount}){
    return <div className="flex w-full items-center">
                <div className="w-[40%]" >
                    <img src={thumbnail} className="w-100%" />
                </div>
                <div className="flex items-center">
                    <PlayCircleTwoTone className="text-3xl "/>
                    <div>
                        <p className="text-xs">WATCH TRAILER</p>
                        <p>{timestamp}</p>
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
    return <div className="flex flex-col items-end justify-between w-12">
                <div className="flex flex-col gap-1">
                    {arraylize(amount).map(function(){
                        return <span className="block w-2 h-2 rounded-2xl bg-white"></span>
                    })}
                </div>
                <div className="flex self-start">
                    <ArrowLeftOutlined/>
                    <ArrowRightOutlined/>
                </div>
    </div>
}

export default MajorTrailer