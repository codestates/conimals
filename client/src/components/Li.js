import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Li = ({ item }) => {
  const parsedDate = new Date(item.createdAt).toLocaleDateString('ko-kr');

  const imgUrl = 'http://localhost:8080/posts/' + `${item.image}`;

  return (
    <>
      <PostsPageList className='item'>
        <div>{item.id}</div>
        <PostsImage className='postsThumbnail'>
          <img src={imgUrl} className='animalPicture' alt='abandoned animals' />
        </PostsImage>
        <PostsInfo>
          <PostsTitle className='postTitle'>
            <Link to={`/view/${item.id}`}>{item.title}</Link>
          </PostsTitle>
          <div className='postUserInfo'>
            <span className='postUserName'>{item.username}</span>
            <span className='postCreatedAt'>{parsedDate}</span>
          </div>
        </PostsInfo>
      </PostsPageList>
    </>
  );
};

export default Li;

const PostsPageList = styled.li`
  background-color: orange;
  width: 100%;
  padding: 1rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const PostsImage = styled.div`
  width: 16rem;
  height: 16rem;
  overflow: hidden;
  padding: 1rem;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  img {
    position: absolute;
    max-width: 100%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const PostsInfo = styled.div`
  background-color: green;
  padding: 1rem;
`;

const PostsTitle = styled.div`
  background-color: yellow;
  padding: 1rem 0 1rem;
`;
