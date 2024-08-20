import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const Main = () => {

    const location = useLocation()
    // console.log(location);
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp')

    return (
        <div>
            <div className=" max-w-6xl mx-auto" >  
            { noHeaderFooter || <Navbar></Navbar> }
            </div>
           <Outlet></Outlet> 
          { noHeaderFooter ||  <Footer/> }
        </div>
    );
};

export default Main;