import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Image from '../../components/Write/Image';

const NewPostSection = styled.section`
  background-color: skyblue;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

const NewPostWrap = styled.div`
  background-color: yellow;
  grid-column: 2 / 12;
`;

const Write = () => {
  const [imageSrc, setImageSrc] = useState([]);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
  });

  // const submitContents = {
  //   title: newPost.title,
  //   content: newPost.content,
  // };

  const header = {
    headers: { authorization: `Bearer ${localStorage.getItem('user')}` },
    withCredentials: true,
  };

  const handleInput = (key) => (e) => {
    setNewPost({ ...newPost, [key]: e.target.value });
  };

  const onSubmit = async () => {
    try {
      const fd = new FormData();
      fd.append('image', imageSrc[0]);
      await axios
        .post(`http://localhost:8080/posts/uploads`, fd, {
          withCredentials: true,
        })
        .then((res) => {
          axios.post(
            `http://localhost:8080/posts/write`,
            {
              title: newPost.title,
              content: newPost.content,
              image: res.data.data,
            },
            header
          );
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <NewPostSection>
        <NewPostWrap>
          <h1>작성 페이지</h1>
          <div className='newPostTitle'>제목</div>
          <input
            placeholder='제목을 입력하세요'
            type='text'
            maxLength={70}
            value={newPost.title}
            onChange={handleInput('title')}
          ></input>

          <div className='postImage'>사진 첨부</div>
          {/* <input type='file' accept='image/*' onChange={handleImages}></input> */}
          <Image setImages={setImageSrc} />

          <div className='newPostContent'>내용</div>
          <textarea
            placeholder='간단히 설명해주세요 (최대 500자)'
            maxLength={500}
            value={newPost.content}
            onChange={handleInput('content')}
          ></textarea>
          <div className='postButton'>
            <button className='newPostButton' type='button' onClick={onSubmit}>
              저장
            </button>
          </div>
        </NewPostWrap>
      </NewPostSection>
    </>
  );
};

export default Write;
