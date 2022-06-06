import React, { useState } from 'react';
import DummyPosts from '../../lib/dummypost';
import Contents from '../../components/Contents';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Posts = () => {
  // const [isFiltered, setIsFiltered] = useState(false);
  const [posts, setPosts] = useState(DummyPosts);
  // const [filteredPosts, setFilteredPosts] = useState(DummyPosts);

  const PostsRenderer = (el, idx) => {
    return <Contents key={idx} el={el} />;
  };

  return (
    <>
      <Link to='/new'>
        <button>글작성</button>
      </Link>
      <PostsPageUl className='posts'>{posts.map(PostsRenderer)}</PostsPageUl>
    </>
  );
};

export default Posts;

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
