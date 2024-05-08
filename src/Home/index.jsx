import Header from "./Header";
import MajorTrailer from "./MajorTrailer";
import Categories from "./Categories";
import Movies from "./Movies";
import Footer from "./Footer";
import { useState } from "react";

import { categorys } from "../utils/constants";

function Home(){
    const [currentCategory,setCurrentCategory] = useState(categorys.TRENDING.name);
    function handleCategoryClick(value){
        console.log("current category is ", value);
        setCurrentCategory(init=> value)
    }
    return <div className=" min-h-screen bg-black relative w-screen box-border">
                <MajorTrailer/>
                <Header/>
                <Categories handleClick={handleCategoryClick} current={currentCategory}/>
                <Movies category={currentCategory}/>
                <Footer/>

            </div>
}

export default Home