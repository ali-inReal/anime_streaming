import React from 'react';
import { Pagination } from 'react-bootstrap';

export default function Paginate(props) {
  
  const totalPages = props.totalPages;
  const pageNumbersToShow = 10;
  const handlePageChange = (newPage) => {
    props.setCurrentPage(newPage);
  };
  const start = Math.max(1, props.currentPage - Math.floor(pageNumbersToShow / 2));
  const end = Math.min(totalPages, start + pageNumbersToShow - 1);
  return (
    <Pagination>
      <Pagination.First disabled={props.currentPage === 1} onClick={() => handlePageChange(1)} />
      <Pagination.Prev disabled={props.currentPage === 1} onClick={() => handlePageChange(props.currentPage - 1)} />
      {Array.from({ length: end - start + 1 }, (_, i) => i + start).map((page) => (
        <Pagination.Item
          key={page}
          active={props.currentPage === page}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </Pagination.Item>
      ))}
      <Pagination.Next disabled={props.currentPage === totalPages} onClick={() => handlePageChange(props.currentPage + 1)} />
      <Pagination.Last disabled={props.currentPage === totalPages} onClick={() => handlePageChange(totalPages)} />
    </Pagination>
  );
};

