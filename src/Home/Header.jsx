
import { MenuOutlined } from "@ant-design/icons"



const listOfLinks = [{id:1,name:"MOVIES",link:""},
                     {id:2,name: "TV",link:""},
                     {id:3,name: "AT HOME",link:""},
                     {id:4,name: "CORPORATE",link:""}
                    ]

function Header(){
    return <div className="flex flex-col landscape:flex-row w-full  text-white">
                <div className="flex w-full landscape:w-[50%] justify-between">
                    <Logo/>
                    <NavList/>
                    <MenuTrigger/>
                </div>

            </div>
}

function Logo(){
    return <p>KINOMA</p>
}

function NavList({list = listOfLinks}){
    return <div className="hidden landscape:flex ">
                {
                    list.map(function(aLinksObj){
                        return <p key={aLinksObj.id} >{aLinksObj.name}</p>
                    })
                }
            </div>
}

function MenuTrigger(){
    return <div className="landscape:hidden">
                <MenuOutlined/>
            </div>
}

export default Header