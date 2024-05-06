
import ADimage from "../Assets/Images/test.jpg";
import { ArrowLeftOutlined, ArrowRightOutlined, LineOutlined, CaretRightFilled } from "@ant-design/icons";


function MajorTrailer(){
    return <div className="w-full ">
                <Imagee metaImage={[{image:ADimage,awards:15,nominations:32,title:"LIONSGATE MOVIES",description:"person wey no mind wheni land Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda similique nihil praesentium rem fuga, soluta ipsa qui magnam tenetur culpa, facere ipsam ut voluptate nobis repudiandae doloribus dolore architecto eaque?  land Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda similique nihil praesentium rem fuga, soluta ipsa qui magnam tenetur culpa, facere ipsam ut voluptate nobis repudiandae doloribus dolore architecto eaque?",currentID:2,timestamp:"3:40",amount:7,thumbnail:ADimage}
                    ,{image:ADimage,awards:7,nominations:12}]}/>
            </div>
}

function Imagee({metaImage=[]}){
    return <div className="w-full h-[85vh] overflow-hidden">
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
                    <p className="font-montserrat text-[0.6rem] font-bold">Academy Awards</p>
                </div>
                {/* <p className="text-8xl self-start font-montserrat flex items-start align-text-top ">
                    __
                </p> */}
                <LineOutlined  className="text-6xl self-start font-montserrat flex items-start "/>
                <div className="flex flex-col items-center">
                    <p className="font-bebas text-7xl">{nominations}</p>
                    <p className="text-center font-montserrat text-[0.6rem] font-bold">Academy Award Nominations</p>
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
                        {/* <div className= " flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-full border-[0.2rem] border-blue-500"> */}
                            <CaretRightFilled className="text-xl p-1 text-white rounded-full border-[0.2rem] border-blue-500 "/>
                        {/* </div> */}
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