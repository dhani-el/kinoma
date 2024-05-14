
import { ArrowRightOutlined, FacebookFilled, TwitterOutlined, InstagramFilled  } from "@ant-design/icons"
import { useSelector, useDispatch } from 'react-redux'
import { lightMode,darkMode } from "../features/theme/themeSlice";

const listOfSocials = [
    {id:0, icon:FacebookFilled,link:""},
    {id:1, icon:TwitterOutlined,link:""},
    {id:2, icon:InstagramFilled,link:""},
]

function Footer({darktheme}){
    return <div className={` ${darktheme?"text-white":"text-black"} w-full flex landscape:gap-0 gap-6 landscape:flex-row flex-col justify-between border-[1rem] p-12 border-y-0 border-blue-500 ${darktheme?"bg-black":"bg-white"} hover:cursor-default mt-12`} >
                <FooterLogo darktheme={darktheme}/>
                <FooterList Head={"Coporate"} List={["News","About","Contact","Careers",]}/>
                <FooterList Head={"Sitemap"} List={["News","About","Contact","Careers",]}/>
                <Subscribe/>
                <Socials/>
             </div>
}


function FooterLogo({darktheme}){
    return <div>
                <p className={`${darktheme?"text-white":"text-black"} font-barbaropt text-5xl landscape:text-3x`}>KINOMA</p>
            </div>
}

function FooterList({Head,List=[],darktheme}){
    return <div className="flex flex-col gap-2 landscape:items-center ">
                <p className="font-montserrat font-bold text-sm">{Head}</p>
                {
                    List.map(function(single){
                        return <p className="text-sm font-normal">{single}</p>
                    })
                }
            </div>
}

function Subscribe(){
    return <div className="flex flex-col gap-4">
                <p  className="font-montserrat font-bold text-sm">Subscribe</p>
                <p className="font-montserrat text-[0.6rem] landscape:w-[70%] ">Subcribe to Our Newsleter to get Updates WhenMovies Release.</p>
                <div className="border-b-[0.2rem] border-black landscape:w-[70%] flex">
                    <input type="email" placeholder="Enter Your Email" className="w-full border-transparent   font-montserrat text-sm outline-none" />
                    <ArrowRightOutlined className="text-slate-600" />
                </div>
            </div>
}

function Socials({socials=listOfSocials}){
    return <div className="flex landscape:ml-[2rem] landscap:gap-4 w-full landscape:w-fit justify-between">
                {
                    socials.map(function(ASocialObj){
                        return <span><ASocialObj.icon/></span>
                    })
                }
            </div>
}

export default Footer