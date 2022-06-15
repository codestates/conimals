import React from 'react';
import styled from 'styled-components';

const PageUl = styled.ul`
  text-align: center;
`;

const PageLi = styled.li`
  display: inline-block;
  border-radius: 50%;
  width: 2rem;
  &:hover {
    cursor: pointer;
    background-color: #fce4ec;
  }

  h6 {
    width: 2rem;
    display: block;
    font-weight: 500;
  }
`;

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <nav>
        <PageUl className='pagination'>
          {pageNumbers.map((number) => (
            <PageLi key={number} className='page-item'>
              <h6 onClick={() => paginate(number)} className='page-link'>
                {number}
              </h6>
            </PageLi>
          ))}
        </PageUl>
      </nav>
    </div>
  );
};

export default Pagination;
