import React, { useRef, useState } from 'react';
import { Button } from '@mui/material';

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
    <div className='image-wrapper'>
      <div
        className={imageSrc ? 'image-inner hidden' : 'image-inner'}
        aria-hidden='true'
        onClick={clickHandler}
      >
        {imageSrc ? (
          imageSrc && (
            <Button
              type='button'
              variant='contained'
              className='btn-delete-image'
              onClick={deleteImageHandler}
            >
              삭제
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
            <Button variant='contained'>사진 올리기</Button>
          </label>
        )}

        {imageSrc ? (
          <img src={imageSrc} alt='preview-img' style={{ width: '200px' }} />
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
export default Image;
