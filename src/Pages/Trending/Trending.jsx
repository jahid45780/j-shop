import { useEffect, useState } from "react";
import ProductCart from "./ProductCart";
import Paginate from "../../components/Paginate";
import allProducts from "../../data";
import Buttons from "./Buttons";

const Trending = () => {
  const [originalProduct, setOriginalProduct] = useState([]); // Store the original product list
  const [product, setProduct] = useState([]);

  // const menuItems = [...new Set(originalProduct.map((val) => val.category))];
  const allProductsButton = [...new Set(allProducts.map((product) => product.category))];

  const filterItems = (cat) => {
    if (cat === "all") {
      setProduct(originalProduct); // Reset to the full product list if "all" is clicked
    } else {
      const newItem = originalProduct.filter((newval) => newval.category === cat);
      setProduct(newItem);
    }
  };

  // Paginate logic
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

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => {
        setOriginalProduct(data); // Set the original product list
        setProduct(data); // Set the product list for rendering
      });
  }, []);
   
  return (
    <div className="max-w-6xl mx-auto mt-4">
      <div>
        <Buttons
          menuItems={allProductsButton}
          filterItems={filterItems}
          setProduct={setProduct}
        />
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 items-center justify-center gap-3 mt">
        {currentProducts.map((product) => (
          <ProductCart key={product._id} productCart={product} />
        ))}
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
