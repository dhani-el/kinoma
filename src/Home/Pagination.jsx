
import { LeftOutlined,RightOutlined } from "@ant-design/icons";




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



function Pag({value,isCurrent}){
    return <p key={value} className={`${isCurrent?"bg-black text-slate-50":"text-black bg-slate-50  hover:bg-slate-300"} border-[0.02rem] py-2 px-4 rounded-sm hover:cursor-default`}>
                {value}
             </p>
}


export default Paginator