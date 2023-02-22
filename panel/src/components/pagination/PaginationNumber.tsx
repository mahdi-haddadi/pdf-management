// import React from "react";
// import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
// const PaginationNumber = ({
//   nextPage,
//   paginate,
//   prevPage,
//   pageNumbers,
//   currentPage,
//   pages,
// }:any) => {
//   return (
//     <div className="flex justify-center">
//       <button
//         disabled={currentPage === 1}
//         className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200"
//         onClick={prevPage}
//       >
//         <BsChevronRight />
//       </button>

//       {pageNumbers.map((page) => {
//         if (!page.other) {
//           return (
//             <button
//               key={page.id}
//               className={`page-link relative block py-1.5 px-3 rounded border-0  outline-none transition-all duration-300  hover:bg-gray-200 focus:shadow-none mx-1 ${
//                 page.current
//                   ? "bg-blue-600 text-white"
//                   : "bg-transparent text-gray-800 hover:text-gray-800"
//               }`}
//               onClick={() => paginate(page.id)}
//             >
//               {page.id}
//             </button>
//           );
//         } else {
//           return (
//             <span key={page.id} className="btn disabled">
//               <b>&hellip;</b>
//             </span>
//           );
//         }
//       })}

//       <button
//         className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200"
//         onClick={nextPage}
//         disabled={pages === currentPage}
//       >
//         <BsChevronLeft />
//       </button>
//     </div>
//   );
// };

// export default PaginationNumber;
import React from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
const PaginationNumber = () => {
  return (
    <div className="flex justify-center my-4">
      <button className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200">
        <BsChevronRight />
      </button>

      <button
        className={`page-link relative block py-1.5 px-3 rounded border-0  outline-none transition-all duration-300  hover:bg-gray-200 focus:shadow-none mx-1 ${"bg-transparent text-gray-800 hover:text-gray-800"}`}
      >
        1
      </button>
      <button
        className={`page-link relative block py-1.5 px-3 rounded border-0  outline-none transition-all duration-300  hover:bg-gray-200 focus:shadow-none mx-1 ${"bg-blue-600 text-white"}`}
      >
        2
      </button>
      <button
        className={`page-link relative block py-1.5 px-3 rounded border-0  outline-none transition-all duration-300  hover:bg-gray-200 focus:shadow-none mx-1 ${"bg-transparent text-gray-800 hover:text-gray-800"}`}
      >
        3
      </button>

      <button className="page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200">
        <BsChevronLeft />
      </button>
    </div>
  );
};

export default PaginationNumber;
