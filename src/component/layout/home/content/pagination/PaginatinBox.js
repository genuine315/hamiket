import React from "react";
import ReactPaginate from "react-paginate";

const PaginatinBox = ({ handlePageClick }) => {
  return (
    <div
      style={{
          width: "fit-content",
          padding: "10px 50px 0",
          boxShadow: "5px 5px 10px 5px #c6c6c6,-5px -5px 10px 5px #f2f2f2",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        
      }}
    >
      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        pageCount={10}
        marginPagesDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default PaginatinBox;
