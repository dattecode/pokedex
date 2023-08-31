import React from "react";
import "./styles/paginationCss.css"

const Pagination = ({
  lastPages,
  pagesInCurrentBlock,
  setCurrentPage,
  currentPage,
}) => {
  const handleNextPage = () => {
    setCurrentPage((prevState) => {
      const nextPage = prevState + 1;
      if (nextPage <= lastPages) {
        return nextPage;
      }
      return prevState;
    });
  };

  const handleLastPage = () => setCurrentPage(lastPages);

  const handlePreviusPage = () => {
    setCurrentPage((prevState) => {
      const prevPage = prevState - 1;
      if (prevPage > 0) {
        return prevPage;
      }
      return prevState;
    });
  };

  const handleFirstPage = () => setCurrentPage(1);

  const handlePageClick = (page) => () => {
    setCurrentPage(page);
  };

  return (
    <ul className="pagContainer">
      {currentPage >= 2 && <li onClick={handleFirstPage}>{"<<"}</li>}
      {currentPage > 1 && <li onClick={handlePreviusPage}>{"<"}</li>}
      {pagesInCurrentBlock.map((page) => (
        <li
          key={page}
          onClick={handlePageClick(page)}
          className={currentPage === page ? "stylePageOn" : ""}
        >
          {page}
        </li>
      ))}
      {currentPage < lastPages && <li onClick={handleNextPage}>{">"}</li>}
      {currentPage < lastPages && <li onClick={handleLastPage}>{">>"}</li>}
    </ul>
  );
};

export default Pagination;