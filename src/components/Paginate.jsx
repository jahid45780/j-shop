import React, { useState } from "react";

function Paginate({ productsPerPage, product, paginate, onPrevOrNextClick }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(product / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    // <div className=" flex justify-center items-center my-6 bg-indigo-400 rounded-lg">
    <nav aria-label="Page navigation example" className=" my-8 text-center">
      <ul className="inline-flex -space-x-px text-base h-10">
        <li>
          <a
            href="#"
            className=" flex items-center justify-center px-4 h-10 leading-tight border-2 border-red-500  rounded-s-2xl font-bold bg-white"
            onClick={() => {
              onPrevOrNextClick("prev", pageNumbers);
              if (currentPage > 1) {
                let page = currentPage - 1;
                setCurrentPage(page);
              }
            }}
          >
            Prev
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              href="#"
              className={`flex items-center justify-center px-4 h-10 leading-tight border-2 border-red-500  bg-white font-bold bg-white${
                currentPage === number
                  ? "dark:text-black"
                  : " dark:text-black"
              }`}
              onClick={() => {
                paginate(number);
                setCurrentPage(number);
              }}
            >
              {number}
            </a>
          </li>
        ))}

        <li>
          <a
            href="#"
            className="flex items-center justify-center px-4 h-10 leading-tight border-2 border-red-500 rounded-r-2xl font-bold bg-white "
            onClick={() => {
              if (currentPage !== pageNumbers[pageNumbers.length - 1]) {
                let page = currentPage + 1;
                setCurrentPage(page);
              }
              onPrevOrNextClick("next", pageNumbers);
            }}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
    // </div>
  );
}

export default Paginate;