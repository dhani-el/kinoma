import { MenuOutlined,SearchOutlined, FacebookFilled, TwitterOutlined, InstagramFilled,CloseOutlined } from "@ant-design/icons";
import { useState,useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { categoriez } from "../utils/constants";
import { useSelector, useDispatch } from 'react-redux'
import { lightMode,darkMode } from "../features/theme/themeSlice";
import { useParams } from "react-router-dom";

const listOfLinks = [{id:1,name:"MOVIES",link:categoriez.movies,Link:"movie"},
                     {id:2,name: "TV",link:categoriez.tv,Link:"tv"},
                     {id:3,name: "ALL",link:categoriez.all,Link:"all"},
                    ]
const listOfSocials = [
                        {id:0, icon:FacebookFilled,link:""},
                        {id:1, icon:TwitterOutlined,link:""},
                        {id:2, icon:InstagramFilled,link:""},
]

function Header({handleClick,current,menuToggle}){
    function handleMenuClick(){
        menuToggle(init=>true)
    }
    return <div className=" absolute top-0 px-8 py-6 flex flex-col landscape:flex-row w-full z-10  text-white justify-between">
                <div className="flex w-full landscape:w-[55%] items-center justify-between">
                    <Logo/>
                    <div className="hidden landscape:block ">
                        <NavList handleClick={handleClick} current = {current}/>
                    </div>
                    <MenuTrigger handleClick={handleMenuClick} />
                </div>

                <div className="block landscape:flex items-center justify-end gap-6 w-full pt-4 landscape:pt-0 landscape:w-[45%]">
                    <SearchTrigger type={current}/>
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
    return <p className="font-bebas landscape:text-4xl text-4xl font-bold hover:cursor-default " >KINOMA</p>
}

function NavList({list = listOfLinks,handleClick}){

    const current = useParams().category;

    return <div className="flex flex-col  gap-16 landscape:items-start items-center landscape:gap-8  landscape:flex-row ">
                {
                    list.map(function(aLinksObj){
                        return <Link onClick={handleClick} to={`/${aLinksObj.Link}/trending/1`} key={aLinksObj.id} className={`font-montserrat landscape:text-slate-300 font-semibold landscape:text-xs hover:cursor-default ${current == aLinksObj.Link && "text-slate-400 landscape:text-white"} `} >{aLinksObj.name}</Link>
                    })
                }
            </div>
}

export function MobileMenu({open,handleClose,darktheme}){
    function handleMenuClose(){
        handleClose(init=>false)
    }
    return <div id="mobileMenu" className={`  gap-40 flex flex-col items-center justify-center text-2xl landscape:hidden ${darktheme?"text-white":"text-black"} w-screen h-screen ${darktheme?"bg-black":"bg-white"}  z-30 absolute top-0 ${open?"left-[0%]":"left-[100%]"}`}>
                        <CloseOutlined className={` absolute left-[90%] top-10`} onClick={handleMenuClose} />
                        <NavList handleClick={handleMenuClose}/>
                        <ThemeControls/>
    </div>
}

function MenuTrigger({handleClick}){
    return <div onClick={handleClick} className="landscape:hidden flex items-center ">
                <MenuOutlined/>
            </div>
}

function SearchTrigger({type}){
    const [display,setDisplay] = useState(false);
    const [searchValue,setSearchValue] = useState();
    const [searchResult, setSearchResult] = useState([])
    const controller= new AbortController();
    const timeoutRef = useRef(null);
    const baseUrl = `https://api.themoviedb.org/3/search/${type === "movies"?"movie":type}?query=`
    const apikeyUrl = `&api_key=${import.meta.env.VITE_TMDB_API_KEY}`
    function handleSearchChange(value){ 
        setSearchValue(init=> value);
       
        // controller.abort('search value has changed');
        clearTimeout(timeoutRef);
        timeoutRef.current = setTimeout(() => {
            handleFetch(value, controller.signal)
        }, 3000);
    }

    function handleFetch(value,signal){
        if(signal?.aborted){
            return 
        }
        fetch(`${baseUrl}${value}${apikeyUrl}`,{signal}).then(function(result){
            return result.json();
        }).then(function(result){
            setSearchResult(init=>result);
        }).catch(function(error){
            console.log(error);
        })

    }
    return <div className="relative flex flex-col items-center" >
                <div className="flex items-center gap-2 landscape:w-fit w-full justify-between ">
                    <SearchOutlined className="landscape:text-xl text-2xl" onClick={()=>setDisplay(init=>true)}/>
                    <input  onChange={(e)=> handleSearchChange(e.target.value)}  type="text" placeholder="search for a movie" className={` ${display ? "block":"hidden"} outline-none rounded-md text-black font-montserrat p-1 text-sm font-medium landscape:w-fit w-full  `}/>
                </div>
                <div className="absolute top-[1.87rem] ">
                    <SearchResults results={searchResult?.results} type={type} />
                </div>
            </div>
}

function SearchResults({results=[],type}){
    return <div className="flex flex-col items-end w-full max-h-[50vh] overflow-y-scroll">
                {
                 results.map(function(oneResult){
                    return <AsearchResult type={type} id={oneResult.id} key={oneResult.id} imgsrc={oneResult.poster_path} text={oneResult.title || oneResult.name}/>
                })
                }
            </div>
}

function AsearchResult({id,type,text, imgsrc}){
    const navigate = useNavigate();
    function handleClick(){
        navigate(`/single/${type === "movies" ?"movie":type}/${id}`)
    }
    return <div onClick={()=>handleClick()} className="flex items-center w-full landscape:w-[70%] gap-4 hover:cursor-default bg-black border-white border-[0.02rem]">
                <div className="w-[30%]">
                    {/* image */}
                    <img src= {`https://image.tmdb.org/t/p/w185/${imgsrc}.jpg`} className="w-full h-auto " />
                </div>
                <p className="  w-[70%] font-montserrat text-sm whitespace-nowrap overflow-hidden text-ellipsis text-nowrap ">{text}</p>
            </div>
}

function ThemeControls(){
    const currentTheme = useSelector((state)=> state.themeReducer.value);
    const dispatch  = useDispatch()
    const [toNightMode,settoNightMode] = useState(false);
    function handleClick(){
        toNightMode ? dispatch(lightMode()):dispatch(darkMode());
        settoNightMode(init=> !init)
    }

    useEffect(function(){
    },[toNightMode])

    return <div onClick={()=>handleClick()} className="flex gap-1 font-montserrat font-bold text-[0.6rem] items-center hover:cursor-pointer " >
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

export default Header;