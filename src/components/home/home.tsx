import Events from "@/components/home/Events";
import Hero from "@/components/home/hero";
import History from "@/components/home/history";
import News from "@/components/home/News";
import Notices from "@/components/home/Notices";
import Number from "@/components/home/number";
import Teacher from "@/components/home/teacher";
import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";
import About from "./about";


export default function Clint() {
    return(
        <div>
            <Navbar/>
            <Hero/>
            <About/>
            <History/>
            <Number/>
            <Teacher/>
            {/* <News/> */}
            <Notices/>
            <Events/>
            <Footer/>
        </div>
    )
}