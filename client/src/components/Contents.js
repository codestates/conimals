import React from 'react';
import styled from 'styled-components';

const Contents = ({ el }) => {
  const parsedDate = new Date(el.createdAt).toLocaleDateString('ko-kr');

  return (
    <>
      <PostsPageList className='el' id={el.id}>
        <PostsImage className='postsThumbnail'>
          <img
            src={el.picture}
            className='animalPicture'
            alt='abandoned animals image'
          />
        </PostsImage>
        <PostsInfo>
          <PostsTitle className='postTitle'>{el.title}</PostsTitle>
          <div className='postUserInfo'>
            <span className='postUserName'>{el.username}</span>
            <span className='postCreatedAt'>{parsedDate}</span>
          </div>
        </PostsInfo>
      </PostsPageList>
    </>
  );
};

export default Contents;

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
