

const categorys = [
                    {name:"FEATURED",link:""},
                    {name:"COMING SOON",link:""},
                    {name:"IN THEATERS",link:""},
                    {name:"OWN IT",link:""},
                    {name:"AWARD WINNERS",link:""},
]



function Categories({categories = categorys}){
    return <div className="relative mt-7 flex w-full left-[30%] gap-[5%]" >  
                {
                    categories.map(function(oneCategory){
                        return <p  className="text-slate-500 text-lg font-bebas hover:cursor-default  hover:text-white hover:underline decoration-blue-500" >{oneCategory.name}</p>
                    })
                }
            </div>
}


export default Categories