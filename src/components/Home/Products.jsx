import { Link } from "react-router-dom";
import UseKeenSlider from "../keen-slider/useKeenSlider";

const Products = () => {
    return (
        <div className=" max-w-6xl mx-auto"   >
            <div>
                <h1 className=" text-3xl font-bold text-center mt-5" > Trending Products </h1>
            </div>

          <div className=" mt-10" >
          <UseKeenSlider/>
          </div>

  <Link to='/trending' > <h1 className=" text-end text-lg font-semibold underline mt-4" > View All </h1> </Link>
        </div>
    );
};

export default Products;