import Header from "./Header";
import MajorTrailer from "./MajorTrailer";
import Categories from "./Categories";
import Movies from "./Movies";
import Footer from "./Footer";
import { useState } from "react";
import { categoriez } from "../utils/constants";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


function Home(){
    const [minorcategory,setMinorCategory] = useState("TRENDING");
    const [majorCategory,setMajorCategory] = useState(categoriez.movies);
    const [majorCat,setMajorCat] = useState(majorCategory[minorcategory].link);
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
    return <div className=" min-h-screen bg-black relative w-screen box-border">
                <MajorTrailer type={majorCategory.name} link = {majorCategory["TRENDING"].link}/>
                <Header handleClick={handleCategoryClick} current = {majorCategory.link}/>
                <Categories type={majorCategory.name}  handleClick={handleMinorCategoryClick} current={minorcategory}/>
                <Movies link={majorCategory[minorcategory].link} type={majorCategory.name}  minorcategory={majorCategory[minorcategory].name}/>
                <Footer/>

            </div>
}

export default Home