import { Link } from "react-router-dom";

import photo1 from '../../../public/Brands/31cfd91636fceeca4a9787af9964195c1.png'
import photo2 from '../../../public/Brands/f255270af7e35ac8a7a8560a32bff08a2.png'
import photo3 from '../../../public/Brands/7528b513e759e945b03f76c68548908b3.png'
import photo4 from '../../../public/Brands/82b2f710eccb28acfbea441492b9974b4.png'
import photo5 from '../../../public/Brands/a15dccb58e516ed628c57bb0b45e56e5.png'
import photo6 from '../../../public/Brands/26506329d528fe7231b945c841017b1b6.png'

const Brands = () => {
    return (
        <div className=" max-w-6xl mx-auto"  >
            <div>
                <h1 className=" text-3xl font-bold text-center mt-3" > Trending Brands </h1>
            </div>

            <div className=" grid lg:grid-cols-6 grid-cols-3 items-center justify-center mt-10 " >

           <div className=" shadow-2xl shadow-green-300" >
            <img className="w-full h-36" src={photo1} alt="" />
            <h1 className=" text-2xl font-bold text-center" > Chanel </h1>
           </div>

           <div className=" shadow-2xl shadow-green-300" >
            <img className="w-full h-36 lg:ml-12" src={photo2} alt="" />
            <h1 className=" text-2xl text-center font-bold" > Prada </h1>
           </div>

           <div className=" shadow-2xl shadow-green-300" >
            <img className="w-full h-36" src={photo3} alt="" />
            <h1 className=" text-2xl text-center font-bold" > Puma </h1>
           </div>

           <div className=" shadow-2xl shadow-green-300" >
            <img className="w-full h-36" src={photo4} alt="" />
            <h1 className=" text-2xl text-center font-bold" > Hermes </h1>
           </div>

           <div className=" shadow-2xl shadow-green-300" >
            <img className="w-full h-36" src={photo5} alt="" />
            <h1 className=" text-2xl text-center font-bold" > Louis Vuitton </h1>
           </div>

           <div className=" shadow-2xl shadow-green-300" >
            <img className="w-full h-36" src={photo6} alt="" />
            <h1 className=" text-2xl text-center font-bold" > Gucci </h1>
           </div>

            </div>

            <Link> <h1 className=" text-end text-lg font-semibold underline mt-4" > View All </h1> </Link>

        </div>
    );
};

export default Brands;