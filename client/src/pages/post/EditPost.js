import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { TextField, Button } from '@mui/material';

const EditSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const EditWrap = styled.div`
  text-align: center;
  width: 860px;
`;

const EditPost = () => {
  const [edited, setEdited] = useState([]);
  const { id } = useParams();

  useEffect(async () => {
    const json = await (
      await fetch(`${process.env.REACT_APP_API_URL}/posts/view/${id}`)
    ).json();
    setEdited(json.data[0]);
  }, []);

  const onEditChange = (e) => {
    setEdited({
      [e.target.name]: e.target.value,
    });
  };

  // 현재 아직 수정 버튼 관련 내용은 수정이 필요합니다
  const onSubmit = (e) => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/dummy/${edited.id}`,
        {
          title: edited.title,
          content: edited.content,
          image: edited.image,
        },
        {
          headers: { authorization: `Bearer ${localStorage.getItem('user')}` },
          withCredentials: true,
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const imageUrl = `${process.env.REACT_APP_API_URL}/posts/${edited.image}`;

  return (
    <>
      <EditSection className='editedSection'>
        <EditWrap>
          <TextField
            id='standard-basic'
            variant='standard'
            fullWidth
            margin='normal'
            inputProps={{ style: { fontSize: 34 } }}
            placeholder='제목을 입력하세요'
            type='text'
            maxLength={70}
            value={edited.title}
            onChange={onEditChange}
          ></TextField>

          {imageUrl ? (
            <img
              src={imageUrl}
              alt='uploaded-img'
              style={{ width: '200px' }}
            ></img>
          ) : (
            ''
          )}

          <TextField
            id='outlined-basic'
            variant='outlined'
            fullWidth
            multiline={true}
            rows={8}
            margin='normal'
            placeholder='간단히 설명해주세요 (최대 500자)'
            maxLength={500}
            value={edited.content}
            onChange={onEditChange}
          ></TextField>
          <Button variant='contained' type='button' onClick={onSubmit}>
            수정
          </Button>
        </EditWrap>
      </EditSection>
    </>
  );
};

export default EditPost;
