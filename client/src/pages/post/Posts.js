import React, { useState, useEffect } from 'react';
import PostsPageUl from '../../components/Ul';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Pagination from '../../components/Pagination';

const PostsSection = styled.section`
  margin-top: 100px;
  width: 100%;
  margin-top: 180px;
`;

const ControlBlock = styled.div`
  width: 1200px;
  margin: 20px auto;
  display: flex;
  justify-content: flex-end;
`;

const PaginationBlock = styled.div`
  display: flex;
  justify-content: center;
`;

const Posts = () => {
  const [post, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts/boards`)
      .then((res) => setPost(res.data.data.reverse()))
      .catch((err) => console.log(err));
  }, []);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  return (
    <>
      <PostsSection>
        <ControlBlock>
          {localStorage.getItem('user') || localStorage.getItem('kakao') ? (
            <Link to='/write'>
              <Button
                variant='contained'
                style={{ backgroundColor: 'orange' }}
                startIcon={<AddBoxIcon />}
              >
                <h5>글쓰기</h5>
              </Button>
            </Link>
          ) : null}
        </ControlBlock>
        <PostsPageUl post={currentPosts(post)}></PostsPageUl>
        <PaginationBlock>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={post.length}
            paginate={setCurrentPage}
          ></Pagination>
        </PaginationBlock>
      </PostsSection>
    </>
  );
};

export default Posts;
