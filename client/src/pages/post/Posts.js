import React, { useState, useEffect } from 'react';
import PostsPageUl from '../../components/Ul';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';

const PostsSection = styled.section`
  margin-top: 100px;
  width: 100%;
  margin-top: 100px;
`;

const ControlBlock = styled.div`
  width: 1200px;
  margin: 20px auto;
  display: flex;
  justify-content: flex-end;
`;

const Posts = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts/boards`)
      .then((res) => setPost(res.data.data.reverse()))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <PostsSection>
        <ControlBlock>
          <Link to={`/write`}>
            <Button variant='contained' startIcon={<AddBoxIcon />}>
              <h5>글쓰기</h5>
            </Button>
          </Link>
        </ControlBlock>
        <PostsPageUl post={post}></PostsPageUl>
      </PostsSection>
    </>
  );
};

export default Posts;
