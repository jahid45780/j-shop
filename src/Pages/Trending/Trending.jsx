import { useEffect } from "react";
import { useState } from "react";
import ProductCart from "./ProductCart";
import Paginate from "../../components/Paginate";
import { useSearchParams } from "react-router-dom";


const Trending = () => {

  const [product, setProduct] = useState([])



  // Paginate logic

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;


  const currentProducts = product.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

  function paginate(number) {
    setCurrentPage(number);
  }

  function handlePrevOrNextClick(prevOrNext, allPageNumbers) {
    if (prevOrNext === "next") {
      if (allPageNumbers[allPageNumbers.length - 1] === currentPage) {
        return;
      }
      setCurrentPage(currentPage + 1);
    } else {
      if (currentPage === 1) {
        return;
      }
      setCurrentPage(currentPage - 1);
    }
  }
  // Paginate logic


  useEffect(() => {
    fetch('trending.json')
      .then(res => res.json())
      .then(data => setProduct(data))


  }, [])

  return (
    <div className=" max-w-6xl mx-auto  mt-4" >
      {/* <div className=" pt-4 flex items-center justify-between gap-3 overflow-x-auto text-3xl m-4 font-bold" >
        {
          categories.map((category, index) => (
            <button
              key={index}
              name={category}
              onClick={handleSelectCategory}
            > <h1

              className=" border-2 border-red-400 p-3 rounded-lg" > {category} </h1> </button>
          ))
        }
      </div> */}

      <div className=" grid lg:grid-cols-3 grid-cols-1 items-center justify-center gap-3" >
        {
          currentProducts.map(product => <ProductCart key={product.id} productCart={product} ></ProductCart>)
        }
      </div>
      <Paginate
        productsPerPage={productsPerPage}
        product={product.length}
        paginate={paginate}
        onPrevOrNextClick={handlePrevOrNextClick}
      />

    </div>
  );
};



export default Trending;