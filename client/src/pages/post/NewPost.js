import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

const NewPostSection = styled.section`
  background-color: skyblue;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

const NewPostBlock = styled.div`
  background-color: yellow;
  grid-column: 2 / 12;
  display: flex;
  flex-direction: column;

  input {
    height: 2rem;
    margin: 0.5rem;
  }

  textarea {
    height: 10rem;
    margin: 0.5rem;
  }
`;

const NewPost = () => {
  const [imageSrc, setImageSrc] = useState('');

  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    image: '',
  });

  const handleInputValue = (key) => (e) => {
    setNewPost({ ...newPost, [key]: e.target.value });
    setImageSrc(URL.createObjectURL(e.target.files[0]));
  };

  // const encodeFileToBase64 = (fileBlob) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(fileBlob);
  //   return new Promise((resolve) => {
  //     reader.onload = () => {
  //       setImageSrc(reader.result);
  //       resolve();
  //     };
  //   });
  // };

  const onSubmit = (e) => {
    axios
      .post(
        `http://localhost:8080/posts/write`,
        {
          title: newPost.title,
          content: newPost.content,
          image: newPost.image,
        },
        {
          headers: { authorization: `Bearer ${localStorage.getItem('user')}` },
          withCredentials: true,
        }
      )
      .then((res) => console.log(res));
  };

  return (
    <>
      <NewPostSection className='newPostSection'>
        <NewPostBlock className='newPostBlock'>
          <input
            className='newPostTitle'
            onChange={handleInputValue('title')}
            placeholder='글제목 쓰기'
          ></input>
          <div className='newPostWriter' placeholder='작성자이름'></div>
          <textarea
            onChange={handleInputValue('content')}
            className='newPostContent'
            placeholder='글 작성 공간'
          ></textarea>
          <div className='preview'>
            {imageSrc && (
              <img
                src={imageSrc}
                alt='preview'
                style={{ width: '300px', margin: 'auto' }}
              ></img>
            )}
          </div>
          <input
            onChange={handleInputValue('image')}
            type='file'
            accept='image/*'
          ></input>
          <button onClick={onSubmit}>작성하기</button>
        </NewPostBlock>
      </NewPostSection>
    </>
  );
};

export default NewPost;
