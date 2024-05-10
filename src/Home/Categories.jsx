

import { majCat,categoriez } from "../utils/constants"

const moviecategorys = [
                    {name:"TRENDING",rep:"TRENDING"},
                    {name:"COMING SOON",rep:"COMING_SOON"},
                    {name:"IN THEATERS",rep:"IN_THEATERS"},
                    {name:"POPULAR",rep:"POPULAR"},
                    {name:"TOP RATED",rep:"TOP_RATED"},
]
const tvcategorys = [
                    {name:"TRENDING",rep:"TRENDING"},
                    {name:"AIRING TODAY",rep:"AIRING_TODAY"},
                    {name:"ON AIR",rep:"ON_AIR"},
                    {name:"POPULAR",rep:"POPULAR"},
                    {name:"TOP RATED",rep:"TOP_RATED"},
]


// optimze handleClick
function Categories({type,handleClick,current}){
    return <div className={`relative mt-2 flex w-full pl-[30%] gap-[5%]`} >  
                {type === categoriez.movies.name && <Movies handleClick={handleClick}  current={current} lists={moviecategorys}/>}
                {type === categoriez.tv.name && <Tv handleClick={handleClick}  current={current} lists={tvcategorys}/>}
                {type === categoriez.all.name && <p onClick={()=>handleClick(majCat.all)} className={`underline decoration-blue-500 text-white text-lg font-bebas hover:cursor-default self-center text-center w-full `} >ALL</p>}
            </div>
}

function Movies({lists,current,handleClick}){
    return <>
               { lists.map(function(oneCategory){
                    return <p onClick={()=>handleClick(oneCategory.rep)} className={`${current === oneCategory.rep && "underline decoration-blue-500 text-white"} text-slate-500 text-lg font-bebas hover:cursor-default hover:text-white`} >{oneCategory.name}</p>
                    })}
        </>
}

function Tv({lists,current,handleClick}){
    return <>
               { lists.map(function(oneCategory){
                    return <p onClick={()=>handleClick(oneCategory.rep)} className={`${current === oneCategory.rep && "underline decoration-blue-500 text-white"} text-slate-500 text-lg font-bebas hover:cursor-default hover:text-white`} >{oneCategory.name}</p>
                    })}
        </>
}


export default Categories