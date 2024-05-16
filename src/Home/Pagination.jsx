
import { LeftOutlined,RightOutlined, EllipsisOutlined } from "@ant-design/icons";
import { useParams,Link } from "react-router-dom";



function Paginator({number, current}){
    function arrayLize(number){
        let ray = []
        for(let i = 0 ; i< number ; i++){
            ray.push(i);
        }
        return ray
    }
    return <div className=" px-12 py-16 flex w-full justify-center gap-[1rem] items-center">
                <LeftOutlined className="text-white" />
                {
                    arrayLize(number).map(function(a){
                        return <Pag value={a}  isCurrent={current === a} />
                    })
                }
                <RightOutlined className="text-white" />

            </div>
}

// function Indicat0Dest optimization
function Paginator2({darktheme,number=[1000], current=1,indicatoDest}){
    const maxPagAmt = 10;
    const params = useParams()
    const pluslink = params.page?`/${params.category}/${params.subcategory}/${params.page && params.page<=number[number.length-1]-1?Number(params.page)+1:number[number.length-1]}`:`/movie/trending/${params.page?Number(params.page)+1:2}`
    const minuslink = params.page?`/${params.category}/${params.subcategory}/${params.page && params.page>=2?params.page-1:1}`:`/movie/trending/${params.page && params.page>=1 ?params.page-1:1}`
    function arrayLize(number){
        let ray = []
        for(let i = current -1 ; i< number ; i++){
            ray.push(i+1);
        }
        return ray
    }

    function handleClick(value){
        indicatoDest(init=>value)
    }
    return <div className=" landscape:px-12 landscape:py-16 flex w-[96%] landscape:w-full landscape:justify-center landscape:gap-[1rem] items-center">
                <Link to={minuslink}>
                    <LeftOutlined className={`${darktheme?"text-white":"text-black"}` }/>
                </Link>
                {
                   number <= maxPagAmt && arrayLize(number).map(function(a){
                        return <Pag  value={a}  isCurrent={current === a} />
                    })
                }
                {
                    (number > maxPagAmt && current !== 1) && <Pag  value={1} isCurrent={current === number}/>
                }
                {
                   number > maxPagAmt && current < number-5 && arrayLize(7 + current - 1).map(function(a){
                        return <Pag  value={a}  isCurrent={current === a} />
                    })
                }
                {
                    number > maxPagAmt && <EllipsisOutlined className={`${darktheme?"text-white":"text-black"}` }/>
                }
                {
                    number > maxPagAmt && <Pag  value={number} isCurrent={current === number}/>
                }
                <Link to={pluslink}>
                 <RightOutlined className={`${darktheme?"text-white":"text-black"}` } />
                </Link>

            </div>
}



function Pag({value,isCurrent,handleClick}){
    const params = useParams();
    const link = params.page?`/${params.category}/${params.subcategory}/${value}`:`/movie/trending/${value}`
    return <Link to={link} key={value} className={`${isCurrent?"bg-black  text-slate-50":"text-black bg-slate-50   hover:bg-slate-300"} flex-1 landscape:flex-initial m-1 landscape:m-0 text-xs landscape:text-sm border-[0.02rem] py-2 landscape:px-4 rounded-sm hover:cursor-default text-center `}>
                {value}
             </Link>
}


export default Paginator2