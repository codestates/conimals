import React from 'react';
import Li from './Li';
import styled from 'styled-components';

const PostsPageUl = styled.ul`
  background-color: skyblue;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  justify-items: center;
  grid-column-gap: 4%;
  grid-row-gap: 2%;
  width: 100%;
  height: max-content;
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
