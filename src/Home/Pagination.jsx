
import { LeftOutlined,RightOutlined, EllipsisOutlined } from "@ant-design/icons";




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
function Paginator2({number=[2], current=1,indicatoDest}){
    const maxPagAmt = 10;
    function arrayLize(number){
        let ray = []
        for(let i = current -1 ; i< number ; i++){
            ray.push(i+1);
        }
        return ray
    }

    function handleClick(value){
        console.log("new info incoming due page is",value);
        indicatoDest(init=>value)
    }
    return <div className=" px-12 py-16 flex w-full justify-center gap-[1rem] items-center">
                <LeftOutlined className="text-white" />
                {
                   number <= maxPagAmt && arrayLize(number).map(function(a){
                        return <Pag handleClick={handleClick} value={a}  isCurrent={current === a} />
                    })
                }
                                {
                    (number > maxPagAmt && current !== 1) && <Pag handleClick={handleClick} value={1} isCurrent={current === number}/>
                }
                {
                   number > maxPagAmt && arrayLize(7 + current - 1).map(function(a){
                        return <Pag handleClick={handleClick} value={a}  isCurrent={current === a} />
                    })
                }
                {
                    number > maxPagAmt && <EllipsisOutlined className="text-white"/>
                }
                {
                    number > maxPagAmt && <Pag handleClick={handleClick} value={number} isCurrent={current === number}/>
                }
                <RightOutlined className="text-white" />

            </div>
}



function Pag({value,isCurrent,handleClick}){
    return <p onClick={()=> handleClick(value)} key={value} className={`${isCurrent?"bg-black text-slate-50":"text-black bg-slate-50  hover:bg-slate-300"} border-[0.02rem] py-2 px-4 rounded-sm hover:cursor-default`}>
                {value}
             </p>
}


export default Paginator2