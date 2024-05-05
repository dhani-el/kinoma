

const categorys = [
                    {name:"FEATURED",link:""},
                    {name:"COMING SOON",link:""},
                    {name:"IN THEATERS",link:""},
                    {name:"OWN IT",link:""},
                    {name:"AWARD WINNERS",link:""},
]



function Categories({categories = categorys}){
    return <div className="relative top-[76vh] flex w-[70%] left-[30%] gap-[5%]" >  
                {
                    categories.map(function(oneCategory){
                        return <p  className="text-slate-500 font-bebas hover:cursor-default  hover:text-white hover:underline decoration-blue-500" >{oneCategory.name}</p>
                    })
                }
            </div>
}


export default Categories