import KeenSlider from "../keen-slider/KeenSlider";
import Brands from "./Brands";
import Picks from "./Picks";
import Products from "./Products";

const Home = () => {
    return (
        <div>
            <KeenSlider/>

            <Brands/>
           <Products/>
           <Picks/>
           
        </div>
    );
};

export default Home;