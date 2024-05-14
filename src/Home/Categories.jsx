
import { majCat,categoriez } from "../utils/constants"
import { useParams } from "react-router-dom"

const moviecategorys = [
                    {name:"TRENDING",rep:"TRENDING",link:"trending"},
                    {name:"COMING SOON",rep:"COMING_SOON",link:"upcoming"},
                    {name:"IN THEATERS",rep:"IN_THEATERS",link:"now_playing"},
                    {name:"POPULAR",rep:"POPULAR",link:"popular"},
                    {name:"TOP RATED",rep:"TOP_RATED",link:"top_rated"},
]
const tvcategorys = [
                    {name:"TRENDING",rep:"TRENDING",link:"trending"},
                    {name:"ON AIR",rep:"ON_AIR",link:"on_the_air"},
                    {name:"POPULAR",rep:"POPULAR",link:"popular"},
                    {name:"TOP RATED",rep:"TOP_RATED",link:"top_rated"},
]


// optimze handleClick
function Categories({type,handleClick,current,darktheme}){
    const params = useParams()
    return <div className={`relative mt-2 flex w-full overflow-hidden justify-between landscape:justify-start px-4 landscape:px-0 landscape:pl-[30%] landscape:gap-[5%] ${darktheme ?  "text-slate-300":"text-slate-600"}`} >  
                {(params.category === "movie" || params.category === undefined) && <Movies darktheme={darktheme}   current={params.subcategory} lists={moviecategorys}/>}
                {params.category === "tv" && <Tv darktheme={darktheme}   current={params.subcategory} lists={tvcategorys}/>}
                {params.category === "all" && <p  className={`underline decoration-blue-500 ${darktheme ? "text-white":"text-black"} text-lg font-bebas hover:cursor-default self-center text-center w-full `} >ALL</p>}
            </div>
}

function Movies({darktheme,lists,current}){
    const params = useParams()
    const baseUrl = `/${params.category || "movie"}/`
    return < >
               { lists.map(function(oneCategory){
                    return <a href={`${baseUrl}${oneCategory.link}/1`} className={`${String(current).toLowerCase() == String(oneCategory.link).toLowerCase() && ` underline decoration-blue-500 ${darktheme ? "text-white":"text-black"}`} whitespace-nowrap text-nowrap  text-lg font-bebas hover:cursor-default hover:${darktheme?"text-white":"text-slate-950"}`} >{oneCategory.name}</a>
                    })}
        </>
}

function Tv({darktheme,lists,current}){
    const params = useParams()
    const baseUrl = `/${params.category || "tv"}/`
    return <>
               { lists.map(function(oneCategory){
                    return <a href={`${baseUrl}${oneCategory.link}/1`} className={`${String(current).toLowerCase() == String(oneCategory.link).toLowerCase() && `underline decoration-blue-500 ${darktheme ? "text-white":"text-black"}`} text-lg font-bebas hover:cursor-default hover:${darktheme ?  "text-white":"text-slate-950"}`} >{oneCategory.name}</a>
                    })}
        </>
}


export default Categories