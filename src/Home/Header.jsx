// import {dotenv}

import { MenuOutlined,SearchOutlined, FacebookFilled, TwitterOutlined, InstagramFilled } from "@ant-design/icons"
import { useState } from "react"



const listOfLinks = [{id:1,name:"MOVIES",link:""},
                     {id:2,name: "TV",link:""},
                     {id:3,name: "AT HOME",link:""},
                     {id:4,name: "CORPORATE",link:""}
                    ]
const listOfSocials = [
                        {id:0, icon:FacebookFilled,link:""},
                        {id:1, icon:TwitterOutlined,link:""},
                        {id:2, icon:InstagramFilled,link:""},
]

function Header(){
    return <div className=" absolute top-0 px-8 py-6 flex flex-col landscape:flex-row w-full z-10  text-white justify-between">
                <div className="flex w-full landscape:w-[60%] items-center justify-between">
                    <Logo/>
                    <div className="hidden landscape:block">
                        <NavList/>
                    </div>
                    <MenuTrigger/>
                </div>

                <div className="block landscape:flex items-center justify-start gap-6 w-full pt-4 landscape:pt-0 landscape:w-[25%]">
                    <SearchTrigger/>
                    <div className="hidden landscape:block">
                        <ThemeControls/>
                    </div>
                    <div className="hidden landscape:block">
                        <Socials/>
                    </div>
                </div>
            </div>
}

function Logo(){
    return <p className="font-barbaropt landscape:text-4xl font-bold hover:cursor-default " >KINOMA</p>
}

function NavList({list = listOfLinks}){

    return <div className="flex flex-col landscape:gap-8  landscape:flex-row ">
                {
                    list.map(function(aLinksObj){
                        return <p  key={aLinksObj.id} className="font-montserrat text-slate-300 font-semibold text-xs hover:cursor-default hover:text-white" >{aLinksObj.name}</p>
                    })
                }
            </div>
}

function MenuTrigger(){
    return <div className="landscape:hidden">
                <MenuOutlined/>
            </div>
}

function SearchTrigger(){
    return <div>
                <SearchOutlined/>
            </div>
}
function ThemeControls(){
    const [toNightMode,settoNightMode] = useState(true)
    return <div className="flex gap-1 font-montserrat font-bold text-[0.6rem] items-center " >
                <span><p className="text-slate-500">NIGHT MODE </p></span>
                <span>  <p>{toNightMode?" ON":" OFF"}</p>    </span>
            </div>
}

function Socials({socials=listOfSocials}){
    return <div className="flex ml-[2rem] gap-4">
                {
                    socials.map(function(ASocialObj){
                        return <span><ASocialObj.icon/></span>
                    })
                }
            </div>
}

export default Header