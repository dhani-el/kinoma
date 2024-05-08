import Header from "./Header";
import MajorTrailer from "./MajorTrailer";
import Categories from "./Categories";
import Movies from "./Movies";
import Footer from "./Footer";
import { useState } from "react";

import { categoriez } from "../utils/constants";

function Home(){
    const [majorCategory,setMajorCategory] = useState(categoriez.movies);
    const [minorcategory,setMinorCategory] = useState("TRENDING");
    const [category,setCategory] = useState(majorCategory[minorcategory].link);
    function handleMinorCategoryClick(value){
        console.log("current category is ", value);
        setMinorCategory(init=> value)
    }
    function handleMajorCategoryClick(value){
        console.log("current category is ", value);
        setMajorCategory(init=> value)
    }
    return <div className=" min-h-screen bg-black relative w-screen box-border">
                <MajorTrailer/>
                <Header handleClick={handleMajorCategoryClick} current = {majorCategory}/>
                <Categories handleClick={handleMinorCategoryClick} current={minorcategory}/>
                <Movies majorCategory={majorCategory} category = {majorCategory[minorcategory].link} minorcategory={minorcategory}/>
                <Footer/>

            </div>
}

export default Home