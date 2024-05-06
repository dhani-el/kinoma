
import { ArrowRightOutlined, FacebookFilled, TwitterOutlined, InstagramFilled  } from "@ant-design/icons"

const listOfSocials = [
    {id:0, icon:FacebookFilled,link:""},
    {id:1, icon:TwitterOutlined,link:""},
    {id:2, icon:InstagramFilled,link:""},
]

function Footer(){
    return <div className="w-full flex justify-between border-[1rem] p-12 border-y-0 border-blue-500 bg-white hover:cursor-default mt-12 ">
                <FooterLogo/>
                <FooterList Head={"Coporate"} List={["News","About","Contact","Careers",]}/>
                <FooterList Head={"Sitemap"} List={["News","About","Contact","Careers",]}/>
                <Subscribe/>
                <Socials/>
             </div>
}


function FooterLogo(){
    return <div>
                <p className="font-barbaropt text-3xl">KINOMA</p>
            </div>
}

function FooterList({Head,List=[]}){
    return <div className="flex flex-col gap-2 items-center ">
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
                <p className="font-montserrat text-[0.6rem] w-[70%] ">Subcribe to Our Newsleter to get Updates WhenMovies Release.</p>
                <div className="border-b-[0.2rem] border-black w-[70%] flex">
                    <input type="email" placeholder="Enter Your Email" className="w-full border-transparent   font-montserrat text-sm outline-none" />
                    <ArrowRightOutlined className="text-slate-600" />
                </div>
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

export default Footer