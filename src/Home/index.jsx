import Header from "./Header";
import MajorTrailer from "./MajorTrailer";
import Categories from "./Categories";


function Home(){
    return <div className="p-6 min-h-screen bg-black relative w-screen box-border">
                <Header/>
                <MajorTrailer/>
                <Categories/>
            </div>
}

export default Home