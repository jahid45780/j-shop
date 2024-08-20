import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const Main = () => {
    return (
        <div>
            <div className=" max-w-6xl mx-auto" >  
            <Navbar></Navbar>
            </div>
           <Outlet></Outlet> 
           <Footer/>
        </div>
    );
};

export default Main;