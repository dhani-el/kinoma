import Header from "./Header";
import MajorTrailer from "./MajorTrailer";
import Categories from "./Categories";
import Movies from "./Movies";

function Home(){
    return <div className=" min-h-screen bg-black relative w-screen box-border">
                <MajorTrailer/>
                <Header/>
                <Categories/>
                <Movies/>

            </div>
}

export default Home