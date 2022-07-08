import React from 'react';
import ReactPaginate from 'react-paginate';

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <ReactPaginate
      className="pagination"
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => setCurrentPage(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={900}
      previousLabel="<"
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;
