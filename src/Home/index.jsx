import Header from "./Header";
import MajorTrailer from "./MajorTrailer";
import Categories from "./Categories";
import Movies from "./Movies";
import { MobileMenu } from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { categoriez } from "../utils/constants";
import 'react-loading-skeleton/dist/skeleton.css'
import { themeConstants } from "../utils/constants";
import { useSelector } from "react-redux";


function Home({reset}){
    
    const [minorcategory,setMinorCategory] = useState("TRENDING");
    const [majorCategory,setMajorCategory] = useState(categoriez.movies);
    const theme = useSelector((state)=>state.themeReducer.value);
    const shouldBeDark = theme === themeConstants.DARK;
    const [menuState,setMenuState] = useState(false)


    return <div className={ ` min-h-screen ${shouldBeDark?"bg-black":"bg-white"} relative w-screen box-border  `}>
                <MajorTrailer />
                <Header menuToggle={setMenuState} current = {majorCategory.name}/>
                <Categories darktheme={shouldBeDark} type={majorCategory.name}   current={minorcategory}/>
                <Movies darkmode={shouldBeDark} link={majorCategory[minorcategory].link} type={majorCategory.name}  minorcategory={majorCategory[minorcategory].name}/>
                <Footer darktheme={shouldBeDark}/>
                <MobileMenu handleClose={setMenuState} darktheme={shouldBeDark} open={menuState} />
            </div>
}

export default Home