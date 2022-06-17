import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Image from '../../components/Write/Image';
import ConfirmModal from '../../components/Modal/WriteConfirmModals';
import { TextField, Button } from '@mui/material';

const NewPostSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const NewPostWrap = styled.div`
  text-align: center;
  width: 860px;
`;

const ImageUploadBlock = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
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

          <ImageUploadBlock>
            <Image setImages={setImageSrc} />
          </ImageUploadBlock>

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

          <Button
            variant='contained'
            type='button'
            onClick={onSubmit}
            style={{ background: '#00b0ff' }}
          >
            저장
          </Button>
        </NewPostWrap>
      </NewPostSection>
      {modalOpen ? (
        <ConfirmModal handleModal={modalHandler}>{modalMsg}</ConfirmModal>
      ) : null}
    </>
  );
};

export default Write;
