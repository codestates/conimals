import React, { useRef, useState } from 'react';

function Image({ setImages }) {
  const inputImageRef = useRef(null);
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
        <input
          type='file'
          name='image'
          className='insert-image'
          accept='image/jpg,image/png,image/jpeg'
          onChange={imageUploadHandler}
          ref={inputImageRef}
        />
        <img src={imageSrc} alt='preview-img' style={{ width: '200px' }} />
      </div>
      {imageSrc && (
        <button
          type='button'
          className='btn-delete-image'
          onClick={deleteImageHandler}
        >
          삭제
        </button>
      )}
    </div>
  );
}
export default Image;
