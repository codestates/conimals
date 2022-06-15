import React from 'react';
import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  position: relative;
  align-items: center;
  /* display: inline-block; */
  width: 100vw;
  margin: 0 auto;
  z-index: -1;
  transform: translate(25%, 0%);
  @media screen and (max-width: 450px) {
    height: 100%;
  }
`;

export default function LoginVector() {
  return (
    <Background>
      <svg
        width='792'
        height='802'
        viewBox='0 0 792 802'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M395.934 0.242111C502.132 -4.36489 598.241 57.3799 672.094 133.889C744.549 208.951 796.361 305.995 791.71 410.256C787.223 510.84 720.104 592.283 648.49 663.001C577.505 733.099 495.436 794.405 395.934 801.083C290.054 808.188 182.539 773.992 107.068 699.337C31.2157 624.306 -6.16879 516.759 0.830832 410.256C7.43191 309.817 72.9023 229.308 142.721 156.854C214.324 82.55 292.881 4.71265 395.934 0.242111Z'
          fill='#FCE4EC'
        />
      </svg>
    </Background>
  );
}
