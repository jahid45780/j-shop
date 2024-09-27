import KeenSlider from "../keen-slider/KeenSlider";
import Brands from "./Brands";
import Picks from "./Picks";
import Products from "./Products";
import ProjectCardSlider from "./Slider";

const Home = () => {
    return (
        <div>
            <KeenSlider/>

            <Brands/>
           <Products/>
           <Picks/>
           <ProjectCardSlider/>
        </div>
    );
};

export default Home;