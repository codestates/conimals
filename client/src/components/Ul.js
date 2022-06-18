import React from 'react';
import Li from './Li';
import styled from 'styled-components';

const PostsPageUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-items: center;
  width: 1200px;
  margin: 30px auto;
  background: #fef6f9;
  border-radius: 1rem;
`;

const Ul = ({ post }) => {
  return (
    <>
      <PostsPageUl>
        {post.map((item) => {
          return <Li key={item.id} item={item} />;
        })}
      </PostsPageUl>
    </>
  );
};

export default Ul;
