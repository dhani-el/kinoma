
import { HomeOutlined, VideoCameraOutlined,DesktopOutlined , CalendarOutlined, LogoutOutlined } from "@ant-design/icons"
import { useState } from "react"


const NavList = [{name:"Home",icon:HomeOutlined},{name:"Movies",icon:DesktopOutlined},{name:"TV Series",icon:VideoCameraOutlined},{name:"Upcoming",icon:CalendarOutlined},]



function Sidebar(){
    return <div className=" py-2 w-[20%] h-screen border-r-[0.06rem] bg-blue-200 border-r-blue-800 rounded-r-2xl flex flex-col justify-between  ">
                <Logo/>
                <Navigation listoNavigation={NavList}/>
                <Logout/>
            </div>
}

function Logo(){
    return <p className=" text-center pt-4  font-barbaropt landscape:text-4xl font-bold hover:cursor-default text-blue-900" >KINOMA</p>
}

function Navigation({listoNavigation = []}){
    const [selected , setIsSelected] = useState("TV Series")
    return <div className="flex flex-col w-full gap-4">
        {
            listoNavigation.map(function(aLink){
                return <ANavItem text={aLink.name} Icon={aLink.icon} key={`key:${aLink.name}`} isSelected={selected === aLink.name} />
            })
        }
    </div>
}


function ANavItem({text,Icon, isSelected}){
    return <div className={` ${isSelected && "bg-blue-300 border-r-blue-800 border-r-[0.2rem]  border-solid"} text-2xl font-barbaro  py-6 flex items-center  justify-center hover:cursor-default`}>
                    <div className="flex gap-3 justify-start items-center min-w-[40%]">
                        <Icon />
                        <p className="text-base">{text}</p>
                    </div>
                        
           </div>
}

function Logout(){
    return <div className="flex gap-2 items-center p-6 font-monetizer w-full justify-center " >
                <LogoutOutlined/>
                <p>Log Out</p>
        </div>
}

export default Sidebar