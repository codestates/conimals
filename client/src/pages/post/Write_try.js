import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Image from '../../components/Write/Image';
import ConfirmModal from '../../components/Modal/WriteConfirmModals';
import { TextField } from '@mui/material';
import '@toast-ui/editor/dist/toastui-editor.css';

const NewPostSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NewPostWrap = styled.div`
  text-align: center;
  width: 860px;
`;

const Write = () => {
  const [imageSrc, setImageSrc] = useState([]);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState('');

  const modalHandler = () => {
    setModalOpen(false);
  };

  const header = {
    headers: { authorization: `Bearer ${localStorage.getItem('user')}` },
    withCredentials: true,
  };

  const handleInput = (key) => (e) => {
    setNewPost({ ...newPost, [key]: e.target.value });
  };

  console.log(imageSrc[0]);

  const onSubmit = async () => {
    try {
      const fd = new FormData();
      fd.append('image', imageSrc[0]);
      await axios
        .post(`${process.env.REACT_APP_API_URL}/posts/uploads`, fd, {
          withCredentials: true,
        })
        .then((res) => {
          axios.post(
            `${process.env.REACT_APP_API_URL}/posts/write`,
            {
              title: newPost.title,
              content: newPost.content,
              image: res.data.data,
            },
            header
          );
          setModalOpen(true);
          setModalMsg('작성 완료!');
          setModalOpen();
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <NewPostSection>
        <NewPostWrap>
          <TextField
            id='standard-basic'
            variant='standard'
            fullWidth
            margin='normal'
            inputProps={{ style: { fontSize: 34 } }}
            placeholder='제목을 입력하세요'
            type='text'
            maxLength={70}
            value={newPost.title}
            onChange={handleInput('title')}
          ></TextField>

          <Image setImages={setImageSrc} />

          <TextField
            id='outlined-basic'
            variant='outlined'
            fullWidth
            multiline={true}
            rows={8}
            margin='normal'
            placeholder='간단히 설명해주세요 (최대 500자)'
            maxLength={500}
            value={newPost.content}
            onChange={handleInput('content')}
          ></TextField>
          <div className='postButton'>
            <button className='newPostButton' type='button' onClick={onSubmit}>
              저장
            </button>
          </div>
        </NewPostWrap>
      </NewPostSection>
      {modalOpen ? (
        <ConfirmModal handleModal={modalHandler}>{modalMsg}</ConfirmModal>
      ) : null}
    </>
  );
};

export default Write;
