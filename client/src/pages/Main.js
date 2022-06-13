import React from 'react';
import './Main.css';
import { Container } from '../components/Container';
import styled from 'styled-components';
import BackgroundImg1 from '../assets/BackgroundImg1-1';
import BackgroundImg2 from '../assets/BackgroundImg1-2';

export const Area1 = styled.div``;
export const Area2 = styled.div``;
export const Area3 = styled.div``;

export const Text = styled.div`
  background-color: skyblue;
  font-size: 1rem;
`;

export const Text1 = styled.div`
  background-color: skyblue;
  font-size: 1.2rem;
  position: relative;
  top: 0%;
  left: 0%;
  transform: translate(0%, 0%);
  color: white;
  z-index: 10;
  text-align: left;
  margin: 0;
  width: 35%;
`;

export const TextHead = styled.div`
  background-color: bisque;
  font-size: 1.7rem;
`;

export const TextMiddle = styled.div`
  background-color: coral;
  font-size: 1rem;
`;

export const TextExtra = styled.div`
  background-color: indianred;
  font-size: 0.7rem;
`;

export const PointText = styled.div`
  color: pink;
`;

function Main() {
  return (
    <>
      <Container>
        {/* <Area1> */}
        <BackgroundImg1 />
        <Text1>
          <TextHead>
            <h2>반려인구 1500만 시대,</h2>
          </TextHead>
          <div>이제 반려동물은 샵에서 사오는</div>
          <div>애완동물(pet)이 아닌</div>
          <div>
            <span style={{ color: 'pink' }}>가족</span>이 되었습니다.
          </div>
          <br />
          <TextMiddle>
            <div>개를, 고양이를 키우려는 사람이 아닌,</div>
            <div>
              {' '}
              반려동물과 함께 살아가기 위한{' '}
              <span style={{ color: 'pink' }}>Conimals</span> 입니다.
            </div>
          </TextMiddle>
          <br />
          <TextExtra>
            <div>
              * Con + animals의 합성어로 '함께하는 동물' 이라는 뜻입니다.
            </div>
          </TextExtra>
        </Text1>
        <BackgroundImg2 />

        {/* </Area1> */}

        {/* <Area2> */}
        <Text>
          <TextHead>
            <h2>내가 반려동물을 데려와도 괜찮을까?</h2>
          </TextHead>
          <div>
            반려견 입양을 고려하고 있다면, 여러 사항을 자세히 따져본 뒤 결정해야
            합니다.
          </div>
          <div>
            한 생명과 끝까지 함께하는 것은 그만큼{' '}
            <span style={{ color: 'pink' }}>책임</span>이 따르는 일이기
            때문입니다
          </div>
          <div>
            반려견을 맞이하는 것을 진지하게 고민하는 분들을 위해 입양 전 고려
            사항들을 가볍게 진단해봅니다.
          </div>
          <a href='/test'>
            <button>테스트 하러 가기</button>
          </a>
        </Text>
        {/* </Area2> */}

        {/* <Area3> */}
        <Text>
          <TextHead>
            <h2>혹시 입양은 어떠세요?</h2>
          </TextHead>
          <div>
            지난해 전국에서 유기 및 유실된 동물은 무려 11만 마리가 넘습니다.
          </div>
          <div>
            그 중 입양되지 못한 약 18% 유기동물은 일정 기간 후 안락사
            되었습니다.
          </div>
          <div>
            내 주변 <span style={{ color: 'pink' }}>유기동물 보호소</span>{' '}
            위치를 확인하고 입양을 고려해보세요!
          </div>
          <a href='/map'>
            <button>내 주변 보호소 찾기</button>
          </a>
        </Text>
        {/* </Area3> */}
      </Container>
    </>
  );
}

export default Main;
