import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';
interface PaginationProps {
  currentPage: number;
  pageCount: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, pageCount, setCurrentPage }) => {
  return (
    <ReactPaginate
      className={styles.pagination}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => setCurrentPage(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={pageCount}
      previousLabel="<"
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;
