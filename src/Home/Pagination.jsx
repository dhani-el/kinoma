
import { LeftOutlined,RightOutlined, EllipsisOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";



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
function Paginator2({number=[2], current,indicatoDest}){
    const maxPagAmt = 10;
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
                <LeftOutlined className="text-white" />
                {
                   number <= maxPagAmt && arrayLize(number).map(function(a){
                        return <Pag  value={a}  isCurrent={current === a} />
                    })
                }
                                {
                    (number > maxPagAmt && current !== 1) && <Pag  value={1} isCurrent={current === number}/>
                }
                {
                   number > maxPagAmt && arrayLize(7 + current - 1).map(function(a){
                        return <Pag  value={a}  isCurrent={current === a} />
                    })
                }
                {
                    number > maxPagAmt && <EllipsisOutlined className="text-white"/>
                }
                {
                    number > maxPagAmt && <Pag  value={number} isCurrent={current === number}/>
                }
                <RightOutlined className="text-white" />

            </div>
}



function Pag({value,isCurrent,handleClick}){
    const params = useParams();
    const link = params.page?`/${params.category}/${params.subcategory}/${value}`:`/movie/trending/${value}`
    return <a href={link} key={value} className={`${isCurrent?"bg-black  text-slate-50":"text-black bg-slate-50   hover:bg-slate-300"} flex-1 landscape:flex-initial m-1 landscape:m-0 text-xs landscape:text-sm border-[0.02rem] py-2 landscape:px-4 rounded-sm hover:cursor-default text-center `}>
                {value}
             </a>
}


export default Paginator2