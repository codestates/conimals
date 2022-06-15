import React from 'react';
import styled from 'styled-components';
import { ReactComponent as DogWithPaws } from '../assets/DogWithPaws.svg';
import { ReactComponent as IntroBackGround } from '../assets/IntroBackGround.svg';
import { ReactComponent as DogWithFoodsBlob } from '../assets/DogWithFoodsBlob.svg';
import { ReactComponent as UnderBlob } from '../assets/UnderBlob.svg';
import { ReactComponent as DogWithPlayBlob } from '../assets/DogWithPlayBlob.svg';

import { Link } from 'react-router-dom';
import { MainButton, MainButton2 } from '../components/Button';

function Main() {
  return (
    <>
      <div>
        <Section>
          <TextWrapper>
            <TextBlockLeft>
              <StyledH1>반려인구 1500만 시대</StyledH1>
              <StyledH3>이제 반려동물은 샵에서 사오는</StyledH3>
              <StyledH3>애완동물(pet)이 아닌</StyledH3>
              <StyledH3>
                <span>가족</span>이 되었습니다.
              </StyledH3>
              <Br />
              <StyledH3>개를, 고양이를 키우는 것이 아닌,</StyledH3>
              <StyledH3>
                반려동물과 함께 살아가기 위한
                <span>Conimals</span>입니다.
              </StyledH3>
              <StyledH4>
                * Con + animals의 합성어로 '함께하는 동물' 이라는 뜻입니다.
              </StyledH4>
            </TextBlockLeft>
            <RightImage>
              <DogWithPaws />
            </RightImage>
          </TextWrapper>
          <BackGround>
            <IntroBackGround />
          </BackGround>
        </Section>

        <Section>
          <TextWrapper>
            <TextBlockRight>
              <StyledH2>내가 반려동물을 데려와도</StyledH2>
              <StyledH2>괜찮을까?</StyledH2>
              <Br />
              <StyledH3>반려견 입양을 고려하고 있다면,</StyledH3>
              <StyledH3>여러 사항을 자세히 따져본 뒤 결정해야 합니다.</StyledH3>
              <Br />

              <StyledH3>한 생명과 끝까지 함께하는 것은</StyledH3>
              <StyledH3>
                그만큼 <span>책임</span>이 따르는 일이기 때문입니다
              </StyledH3>
              <Br />
              <StyledH3>반려견을 맞이하는 것을 진지하게</StyledH3>
              <StyledH3>고민하는 분들을 위해</StyledH3>
              <StyledH3>입양 전 고려 사항들을 가볍게 진단해봅니다.</StyledH3>
              <ButtonPosition>
                <Link to='/test'>
                  <MainButton>테스트 하러 가기</MainButton>
                </Link>
              </ButtonPosition>
            </TextBlockRight>
          </TextWrapper>
          <LeftImage>
            <DogWithFoodsBlob />
            <img
              src='https://i.ibb.co/TggVJns/Dog-With-Play-Dog.png'
              alt='DogWithPlayDog'
            />
          </LeftImage>
          <BackGroundBlob>
            <UnderBlob />
          </BackGroundBlob>
        </Section>

        <Section>
          <TextWrapper>
            <TextBlockLeft>
              <StyledH2>혹시 입양은 어떠세요?</StyledH2>
              <Br />
              <StyledH3>지난해 전국에서 유기 및 유실된 동물은</StyledH3>
              <StyledH3>무려 11만 마리가 넘습니다.</StyledH3>
              <Br />
              <StyledH3>그 중 입양되지 못한 약 18% 유기동물은</StyledH3>
              <StyledH3>일정 기간 후 안락사 되었습니다.</StyledH3>
              <Br />
              <StyledH3>
                내 주변 <span>유기동물 보호소</span> 위치를 확인하고
              </StyledH3>
              <StyledH3>입양을 고려해보세요!</StyledH3>
              <ButtonPosition>
                <Link to='/map'>
                  <MainButton2>내 주변 보호소 찾기</MainButton2>
                </Link>
              </ButtonPosition>
            </TextBlockLeft>
            <RightImage>
              <DogWithPlayBlob />
              <img
                src='https://i.ibb.co/qy9y0Vh/Dog-With-Foods-Dog.png'
                alt='DogWithFoods'
              ></img>
            </RightImage>
          </TextWrapper>
        </Section>
      </div>
    </>
  );
}

export default Main;

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 100px;
`;
const TextWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const TextBlockLeft = styled.div`
  z-index: 5;
`;

const TextBlockRight = styled.div`
  text-align: right;
  z-index: 5;
`;

const RightImage = styled.div`
  position: absolute;
  right: 0;
  transform: translateX(20%);
  z-index: 0;
  img {
    width: 400px;
    position: absolute;
    z-index: 3;
    right: 30%;
    bottom: 10%;
  }
`;

const LeftImage = styled.div`
  position: absolute;
  left: 0;
  transform: translateX(-10%);
  z-index: -1;
  img {
    width: 400px;
    height: auto;
    position: absolute;
    z-index: 3;
    left: 35%;
    bottom: 20%;
  }
`;

const BackGround = styled.div`
  width: 100%;
  position: absolute;
  right: 0;
  z-index: -1;
`;

const BackGroundBlob = styled(BackGround)`
  bottom: 0;
  transform: translateX(75%);
  z-index: -5;
`;

const ButtonPosition = styled.div`
  background: #ddd;
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  margin: 4rem 0;
`;

const StyledH1 = styled.h1`
  display: block;
  color: #333;
  padding: 2rem 0;
`;

const StyledH2 = styled.h2`
  display: block;
  color: #333;
  padding: 0.5rem 0;
`;

const StyledH3 = styled.h3`
  display: block;
  padding: 0.2rem 0;
  span {
    color: #ff4081;
    padding: 0 0.5rem;
    font-weight: 700;
  }
`;

const StyledH4 = styled.h4`
  display: block;
  padding: 1rem 0;
  color: #555;
`;

const Br = styled.div`
  padding: 1rem 0;
`;
