import Header from "./Header";
import MajorTrailer from "./MajorTrailer";
import Categories from "./Categories";
import Movies from "./Movies";
import Footer from "./Footer";
import { useState } from "react";
import { categoriez } from "../utils/constants";
import 'react-loading-skeleton/dist/skeleton.css'
import { themeConstants } from "../utils/constants";
import { useSelector } from "react-redux";


function Home(){
    const [minorcategory,setMinorCategory] = useState("TRENDING");
    const [majorCategory,setMajorCategory] = useState(categoriez.movies);
    const [majorCat,setMajorCat] = useState(majorCategory[minorcategory].link);
    const theme = useSelector((state)=>state.themeReducer.value);
    const shouldBeDark = theme === themeConstants.DARK;

    function handleMinorCategoryClick(value){
        console.log("current category is ", value);
        setMinorCategory(init=> value)
    }
    function handleMajorCategoryClick(value){
        console.log("current category is ", value);
        setMajorCategory(init=> value)
    }
    function handleCategoryClick(value){
        console.log("current category is ", value);
        setMajorCategory(init=> value);
        setMinorCategory(init=> "TRENDING")
    }
    return <div className={ ` min-h-screen ${shouldBeDark?"bg-black":"bg-white"} relative w-screen box-border  `}>
                <MajorTrailer type={majorCategory.name} link = {majorCategory["TRENDING"].link}/>
                <Header handleClick={handleCategoryClick} current = {majorCategory.name}/>
                <Categories darktheme={shouldBeDark} type={majorCategory.name}  handleClick={handleMinorCategoryClick} current={minorcategory}/>
                <Movies link={majorCategory[minorcategory].link} type={majorCategory.name}  minorcategory={majorCategory[minorcategory].name}/>
                <Footer darktheme={shouldBeDark}/>
            </div>
}

export default Home