import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1);
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
      };
    
      const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
      };
    

    const singleInfo = useLoaderData();
    const {title, image, price, description} = singleInfo;
    return (
        <div>
          <div className="  bg-white min-h-screen p-6 max-w-6xl mx-auto mt-9 border-t-2 border-e-2 border-black rounded-lg ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2  gap-8">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={image}
            alt="Product"
            className="rounded-lg  w-full max-w-lg shadow-2xl shadow-red-300"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between">
          <div>
            {/* Product Title */}
            <h1 className="text-3xl font-bold text-gray-800"> {title} </h1>

            {/* Product Rating */}
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">★★★★☆</span>
              <span className="text-gray-600 ml-2">(150 reviews)</span>
            </div>

            {/* Product Price */}
            <div className="mt-4">
              <span className="text-2xl font-semibold text-green-600">$ {price} </span>
            </div>

            {/* Product Description */}
            <p className="mt-4 text-gray-600">
               {description}
            </p>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="mt-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded-md">
                <button
                  onClick={decreaseQuantity}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-200"
                >
                  -
                </button>
                <span className="px-4 py-2">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-200"
                >
                  +
                </button>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default ProductDetail;