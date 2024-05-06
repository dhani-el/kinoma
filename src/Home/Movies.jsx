
import { StarFilled, HeartFilled } from "@ant-design/icons";
import smple from "../Assets/Images/sample.jpg";

const sampleMovie = [
                        {
                            title:"Ungentlemanly warfare Ungentlemanly warfare",
                            img:smple,
                            status:"Coming Soon",
                            year:2019,
                            rating:4.5                       
                         },
                        {
                            title:"Ungentlemanly warfare Ungentlemanly warfare",
                            img:smple,
                            status:"Coming Soon",
                            year:2019,
                            rating:4.5                       
                         },
                        {
                            title:"Ungentlemanly warfare Ungentlemanly warfare",
                            img:smple,
                            status:"Coming Soon",
                            year:2019,
                            rating:4.5                       
                         },
                        {
                            title:"Ungentlemanly warfare Ungentlemanly warfare",
                            img:smple,
                            status:"Coming Soon",
                            year:2019,
                            rating:4.5                       
                         },
                        {
                            title:"Ungentlemanly warfare Ungentlemanly warfare",
                            img:smple,
                            status:"Coming Soon",
                            year:2019,
                            rating:4.5                       
                         },
                        {
                            title:"Ungentlemanly warfare Ungentlemanly warfare",
                            img:smple,
                            status:"Coming Soon",
                            year:2019,
                            rating:4.5                       
                         },
                        {
                            title:"Ungentlemanly warfare Ungentlemanly warfare",
                            img:smple,
                            status:"Coming Soon",
                            year:2019,
                            rating:4.5                       
                         },
                        {
                            title:"Ungentlemanly warfare Ungentlemanly warfare",
                            img:smple,
                            status:"Coming Soon",
                            year:2019,
                            rating:4.5                       
                         },
                        {
                            title:"Ungentlemanly warfare Ungentlemanly warfare",
                            img:smple,
                            status:"Coming Soon",
                            year:2019,
                            rating:4.5                       
                         },
                        {
                            title:"Ungentlemanly warfare Ungentlemanly warfare",
                            img:smple,
                            status:"Coming Soon",
                            year:2019,
                            rating:4.5                       
                         },
                        {
                            title:"Ungentlemanly warfare Ungentlemanly warfare",
                            img:smple,
                            status:"Coming Soon",
                            year:2019,
                            rating:4.5                       
                         },
                        {
                            title:"Ungentlemanly warfare Ungentlemanly warfare",
                            img:smple,
                            status:"Coming Soon",
                            year:2019,
                            rating:4.5                       
                         },
                        {
                            title:"Ungentlemanly warfare Ungentlemanly warfare",
                            img:smple,
                            status:"Coming Soon",
                            year:2019,
                            rating:4.5                       
                         },
                        {
                            title:"Ungentlemanly warfare Ungentlemanly warfare",
                            img:smple,
                            status:"Coming Soon",
                            year:2019,
                            rating:4.5                       
                         },
                    ]

function Movies(){
    return <div className=" p-12 grid grid-cols-5 relative text-white gap-x-8 gap-y-12 justify-center">
                <StartText/>
                <Variantii movieData={sampleMovie}/>
            </div>
}


function Varianti({movieData=[]}){
    return <div>
                <StartText/>
                {movieData.map(function(singleData){
                    return <Amovie img={singleData.img} title={singleData.title} status={singleData.status} rating={singleData.rating} year={singleData.year} />
                })}
            </div>
}
function Variantii({movieData=[]}){
    return <>
                {movieData.map(function(singleData){
                    return <Amovie img={singleData.img} title={singleData.title} status={singleData.status} rating={singleData.rating} year={singleData.year} />
                })}
            </>
}

function StartText(){
    return <div className=" justify-center content-center">
                <p className="text-4xl font-bebas"> NEW & UPCOMING MOVIES</p>
                <p className="font-montserrat text-xs font-bold">Exciting, emotional and unexpected</p>
            </div>
}

function Amovie({img,title,status,rating,year}){
    return <div className="hover:opacity-70 hover:w-[96%] hover:h-[965] box-border ">
                <img src={img}/>
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




export default Movies