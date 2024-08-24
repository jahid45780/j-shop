import { Link } from "react-router-dom";

const ProductCart = ({productCart}) => {

     const {title, image, price, category, _id} = productCart

    return (
        <div >

        
     <Link to={`/detail/${_id}`} >
     
     <div className=" bg-white border-t-2 border-e-2 cursor-pointer border-black rounded-s-2xl rounded-e-3xl h-[400px] p-3" >
         <img className=" h-52 flex items-center justify-center mx-auto" src={image} alt="" />
        <h1 className=" text-lg font-semibold text-center" > {title.slice(0,30)} </h1> 
         
         <div className=" flex items-center justify-around mt-5" > 
         <h1 className=" text-center font-bold text-lg text-red-700" > $ {price} </h1>
         <h1 className=" text-center font-bold" > {category} </h1>
         </div>

         {/* rating */}

         <div className="rating flex justify-around items-center mx-auto mt-5">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2  bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2  bg-orange-400" />
{/* 
  <div>
    <button className=" btn text-black text-lg border-2 border-green-600" > Add Cart </button>
</div> */}

</div>



    {/* rating */}    

         </div>
     
     </Link>
        

        </div>
    );
};

export default ProductCart;