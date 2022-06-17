import React from 'react';
import styled from 'styled-components';
import gitlogo from '../assets/github.png';
import logo from '../assets/Conimals_logo_horizontal1.png';
import velog from '../assets/velog.jpg';
import tistory from '../assets/tistory.png';

const FooterSection = styled.footer`
  width: 100%;
  background-color: rgb(93, 137, 179);
  margin-top: 100px;
  color: #ffffff;
  text-align: left;
`;

const FooterBlock = styled.div`
  max-width: 1200px;
  height: 200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a:visited {
    color: white;
  }
  a:hover {
    color: skyblue;
  }
`;

const Policy = styled.div`
  margin-bottom: 1rem;
`;

const FooterTitle = styled.h5`
  display: block;
  font-size: 18px;
  font-weight: 700;
`;

const MiddlePetmily = styled.div``;
const RightLogo = styled.div``;

const TeamLink = styled.div`
  text-align: center;
`;

const TeamMemberList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const TeamMember = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 50px;
`;

const VLogo = styled.img`
  width: 35px;
  border-radius: 40px;
  transform: translate(15%, -20%);
`;

const Copyright = styled.div`
  margin-left: 5%;
`;

export default function Footer() {
  return (
    <>
      <FooterSection>
        <FooterBlock>
          <div className='LeftInfo'>
            <Policy>
              <FooterTitle>
                <a href='/policy'>개인정보처리방침</a>
              </FooterTitle>
            </Policy>
            <FooterTitle>유기동물 관련 추천 사이트</FooterTitle>
            <a href='https://www.animal.go.kr/front/awtis/protection/protectionList.do?menuNo=1000000060'>
              <h6>동물보호관리시스템</h6>
            </a>
          </div>
          <MiddlePetmily>
            <TeamLink>
              <a href='https://github.com/codestates/conimals'>
                <FooterTitle>
                  코드스테이츠 SEB 38기 Final Project Team Petmily
                </FooterTitle>
              </a>
            </TeamLink>
            <TeamMemberList>
              <TeamMember>
                팀장 조진형
                <a href='https://github.com/YeonSeoJo'>
                  <Logo src={gitlogo} />
                </a>
              </TeamMember>
              <TeamMember>
                {' '}
                정새얀{' '}
                <div>
                  <a href='https://github.com/hsly22xk'>
                    <Logo src={gitlogo} />
                  </a>
                  <a href='https://hsly22xk.tistory.com/'>
                    <Logo src={tistory} />
                  </a>
                </div>
              </TeamMember>
              <TeamMember>
                {' '}
                박선교{' '}
                <div>
                  <a href='https://github.com/kitch-finn'>
                    <Logo src={gitlogo} />
                  </a>
                  <a href='https://velog.io/@sunn'>
                    <VLogo src={velog} />
                  </a>
                </div>
              </TeamMember>
              <TeamMember>
                정민규
                <a href='https://github.com/D-MG-lab'>
                  <Logo src={gitlogo} />
                </a>
              </TeamMember>
            </TeamMemberList>
          </MiddlePetmily>
          <RightLogo>
            <a href='/'>
              <img src={logo}></img>
              <Copyright>
                <div>COPYRIGHT 2022 Conimals.,</div>
                <div>ALL RIGHTS RESERVED.</div>
              </Copyright>
            </a>
          </RightLogo>
        </FooterBlock>
      </FooterSection>
    </>
  );
}
