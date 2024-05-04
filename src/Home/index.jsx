import Header from "./Header";
import MajorTrailer from "./MajorTrailer";


function Home(){
    return <div className="p-6 min-h-screen bg-black relative w-screen box-border">
                <Header/>
                <MajorTrailer/>
                <p className="relative text-white top-[75vh]">daniel</p>
            </div>
}

export default Home