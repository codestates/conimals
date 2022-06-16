import React from 'react';
import styled from 'styled-components';
import gitlogo from '../assets/github.png';
import logo from '../assets/Conimals_logo_horizontal1.png';
import { ReactComponent as Tistory } from '../assets/Tistory.svg';

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

const FooterTitle = styled.div`
  padding: 10px 0;
  font-size: 18px;
  font-weight: bold;
`;

const Policy = styled.div`
  margin-bottom: 85px;
`;

const TeamLink = styled(FooterTitle)`
  font-weight: bold;
  text-align: center;
`;

const TeamMemberList = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TeamMember = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 50px;
`;

const Copyright = styled.div`
  margin-left: 5%;
`;

const Bottom = styled.div`
  margin-bottom: 53px;
`;

export default function Footer() {
  return (
    <>
      <FooterSection>
        <FooterBlock>
          <Bottom>
            <FooterTitle>유기동물 관련 추천 사이트</FooterTitle>
            <br />
            <a href='https://www.animal.go.kr/front/awtis/protection/protectionList.do?menuNo=1000000060'>
              동물보호관리시스템
            </a>
          </Bottom>
          <Policy>
            <FooterTitle>
              <a href='/policy'>개인정보처리방침</a>
            </FooterTitle>
          </Policy>
          {/* <div className='team-petmily'> */}
          <div>
            <TeamLink>
              <a href='https://github.com/codestates/conimals'>
                {' '}
                <FooterTitle>
                  코드스테이츠 Software Engineering Bootcamp 38기 Final Project
                </FooterTitle>
                <div>Team Petmily</div>
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
                <a href='https://github.com/hsly22xk'>
                  <Logo src={gitlogo} />
                </a>
              </TeamMember>
              <TeamMember>
                {' '}
                박선교{' '}
                <a href='https://github.com/kitch-finn'>
                  <Logo src={gitlogo} />
                </a>
              </TeamMember>
              <TeamMember>
                {' '}
                정민규{' '}
                <a href='https://github.com/D-MG-lab'>
                  <Logo src={gitlogo} />
                </a>
              </TeamMember>
            </TeamMemberList>
          </div>
          {/* </div> */}

          <div>
            <a href='/'>
              <img src={logo}></img>
              <Copyright>
                <div>COPYRIGHT 2022 Conimals.,</div>
                <div>ALL RIGHTS RESERVED.</div>
              </Copyright>
            </a>
          </div>
        </FooterBlock>
      </FooterSection>
    </>
  );
}
