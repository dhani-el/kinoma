

const categorys = [
                    {name:"TRENDING",rep:"TRENDING"},
                    {name:"COMING SOON",rep:"COMING_SOON"},
                    {name:"IN THEATERS",rep:"IN_THEATERS"},
                    {name:"POPULAR",rep:"POPULAR"},
                    {name:"TOP RATED",rep:"TOP_RATED"},
]


// optimze handleClick
function Categories({categories = categorys,handleClick,current}){
    return <div className="relative mt-2 flex w-full left-[30%] gap-[5%]" >  
                {
                    categories.map(function(oneCategory){
                        return <p onClick={()=>handleClick(oneCategory.rep)} className={`${current === oneCategory.rep && "underline decoration-blue-500 text-white"} text-slate-500 text-lg font-bebas hover:cursor-default hover:text-white`} >{oneCategory.name}</p>
                    })
                }
            </div>
}


export default Categories