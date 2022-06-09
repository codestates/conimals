import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const EditSection = styled.section`
  background-color: skyblue;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

const EditWrap = styled.div`
  background-color: yellow;
  grid-column: 2 / 12;
`;

const EditPost = () => {
  const [edited, setEdited] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3004/dummy/${edited.id}`)
      .then((res) => setEdited(res.data))
      .catch((err) => console.log(err));
  }, []);

  const onEditChange = (e) => {
    setEdited({
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    axios
      .post(
        `http://localhost:3004/dummy/${edited.id}`,
        {
          username: edited.username,
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

  return (
    <>
      <EditSection className='editedSection'>
        <EditWrap>
          <h1>내용 수정</h1>
          <div className='editPostId'>글번호: {edited.id}</div>
          <div className='editUsername'>작성자: {edited.username}</div>
          <div className='editTitle'>
            <label htmlFor='title'>
              제목
              <input
                className='editedTitle'
                type='text'
                title='title'
                value={edited.title}
                onChange={onEditChange}
              ></input>
            </label>
          </div>
          <div className='editContent'>
            <label htmlFor='content'>
              내용
              <textarea
                className='editedContent'
                type='text'
                content='content'
                value={edited.content}
                onChange={onEditChange}
              ></textarea>
            </label>
          </div>
          <div className='editButton'>
            <button className='editedButton' type='submit' onClick={onSubmit}>
              수정
            </button>
          </div>
        </EditWrap>
      </EditSection>
    </>
  );
};

export default EditPost;
