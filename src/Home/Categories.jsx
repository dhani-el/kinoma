
import { majCat,categoriez } from "../utils/constants"
import { themeConstants } from "../utils/constants";


const moviecategorys = [
                    {name:"TRENDING",rep:"TRENDING"},
                    {name:"COMING SOON",rep:"COMING_SOON"},
                    {name:"IN THEATERS",rep:"IN_THEATERS"},
                    {name:"POPULAR",rep:"POPULAR"},
                    {name:"TOP RATED",rep:"TOP_RATED"},
]
const tvcategorys = [
                    {name:"TRENDING",rep:"TRENDING"},
                    {name:"UPCOMING",rep:"AIRING_TODAY"},
                    {name:"ON AIR",rep:"ON_AIR"},
                    {name:"POPULAR",rep:"POPULAR"},
                    {name:"TOP RATED",rep:"TOP_RATED"},
]


// optimze handleClick
function Categories({type,handleClick,current,darktheme}){
    return <div className={`relative mt-2 flex w-full overflow-hidden justify-between landscape:justify-start px-4 landscape:px-0 landscape:pl-[30%] landscape:gap-[5%] ${darktheme ?  "text-slate-300":"text-slate-600"}`} >  
                {type === categoriez.movies.name && <Movies darktheme={darktheme} handleClick={handleClick}  current={current} lists={moviecategorys}/>}
                {type === categoriez.tv.name && <Tv darktheme={darktheme} handleClick={handleClick}  current={current} lists={tvcategorys}/>}
                {type === categoriez.all.name && <p onClick={()=>handleClick(majCat.all)} className={`underline decoration-blue-500 ${darktheme ? "text-white":"text-black"} text-lg font-bebas hover:cursor-default self-center text-center w-full `} >ALL</p>}
            </div>
}

function Movies({darktheme,lists,current,handleClick}){
    return < >
               { lists.map(function(oneCategory){
                    return <p onClick={()=>handleClick(oneCategory.rep)} className={`${current === oneCategory.rep && ` underline decoration-blue-500 ${darktheme ? "text-white":"text-black"}`} whitespace-nowrap text-nowrap  text-lg font-bebas hover:cursor-default hover:${darktheme?"text-white":"text-slate-950"}`} >{oneCategory.name}</p>
                    })}
        </>
}

function Tv({darktheme,lists,current,handleClick}){
    return <>
               { lists.map(function(oneCategory){
                    return <p onClick={()=>handleClick(oneCategory.rep)} className={`${current === oneCategory.rep && `underline decoration-blue-500 ${darktheme ? "text-white":"text-black"}`} text-lg font-bebas hover:cursor-default hover:${darktheme ?  "text-white":"text-slate-950"}`} >{oneCategory.name}</p>
                    })}
        </>
}


export default Categories