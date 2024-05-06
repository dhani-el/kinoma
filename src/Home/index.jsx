import Header from "./Header";
import MajorTrailer from "./MajorTrailer";
import Categories from "./Categories";
import Movies from "./Movies";
import Footer from "./Footer";
import Paginator from "./Pagination";
function Home(){
    return <div className=" min-h-screen bg-black relative w-screen box-border">
                <MajorTrailer/>
                <Header/>
                <Categories/>
                <Movies/>
                <Paginator current={4} number={8}/>
                <Footer/>

            </div>
}

export default Home