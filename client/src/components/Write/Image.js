import React, { useRef, useState } from 'react';
import { Button } from '@mui/material';
import styled from 'styled-components';

const ImageWrapper = styled.section`
  margin: 1rem;
  display: flex;
`;

const ButtonBlock = styled.div`
  width: 200px;
`;

const PreviewBlock = styled.div`
  width: 400px;
`;

function Image({ setImages }) {
  const inputImageRef = useRef(false);
  const [imageSrc, setImageSrc] = useState('');

  const clickHandler = () => {
    inputImageRef.current.click();
  };

  const imageUploadHandler = (e) => {
    const nowSelectImageList = e.target.files;
    setImages(nowSelectImageList);
    const nowImageURLList = [...imageSrc];
    const nowImageUrl = URL.createObjectURL(nowSelectImageList[0]);
    nowImageURLList.push(nowImageUrl);
    setImageSrc(nowImageURLList);
  };

  const deleteImageHandler = () => {
    setImageSrc('');
    setImages('');
  };

  return (
    <div>
      <div
        className={imageSrc ? 'imageHidden' : 'imageInner'}
        aria-hidden='true'
        onClick={clickHandler}
      >
        <ImageWrapper>
          <ButtonBlock>
            {imageSrc ? (
              imageSrc && (
                <Button
                  type='button'
                  variant='contained'
                  onClick={deleteImageHandler}
                >
                  이미지 삭제
                </Button>
              )
            ) : (
              <label htmlFor='contained-button-file'>
                <input
                  type='file'
                  name='image'
                  style={{ display: 'none' }}
                  accept='image/jpg,image/png,image/jpeg'
                  onChange={imageUploadHandler}
                  ref={inputImageRef}
                />
                <Button variant='contained'>이미지 업로드</Button>
              </label>
            )}
          </ButtonBlock>
          <PreviewBlock>
            {imageSrc ? (
              <img src={imageSrc} alt='preview' style={{ width: '200px' }} />
            ) : (
              ''
            )}
          </PreviewBlock>
        </ImageWrapper>
      </div>
    </div>
  );
}
export default Image;
