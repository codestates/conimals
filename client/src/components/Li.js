import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Li = ({ item }) => {
  const parsedDate = new Date(item.createdAt).toLocaleDateString('ko-kr');

  const imgUrl = `${process.env.REACT_APP_API_URL}/posts/${item.image}`;

  return (
    <>
      <PostsPageList>
        <Link to={`/view/${item.id}`}>
          <PostsBlock>
            <PostsImage>
              <img
                src={imgUrl}
                className='animalPicture'
                alt='abandoned animals'
              />
            </PostsImage>
            <PostsInfo>
              <PostsTitle>
                <h5>{item.title}</h5>
              </PostsTitle>
              <PostWriterNDate>
                <li className='postUserName'>
                  {item.username ? `${item.username}` : '작성자'}
                </li>
                <li className='postCreatedAt'>{parsedDate}</li>
              </PostWriterNDate>
            </PostsInfo>
          </PostsBlock>
        </Link>
      </PostsPageList>
    </>
  );
};

export default Li;

const PostsPageList = styled.li`
  width: 16rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const PostsBlock = styled.div`
  width: 16rem;
`;

const PostsImage = styled.div`
  width: 100%;
  height: 12rem;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ${PostsPageList}:hover & img {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.1);
    transition: transform 0.5s ease-in-out;
  }
`;

const PostsInfo = styled.div`
  padding: 0.5rem 0 1rem;
`;

const PostsTitle = styled.div`
  padding: 0.5rem 0 0.5rem;
  border-bottom: 1px solid #d7d7d7;
`;

const PostWriterNDate = styled.ul`
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
`;
