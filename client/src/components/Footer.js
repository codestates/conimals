import React from 'react';
import styled from 'styled-components';
import logo from '../assets/Conimals_logo_horizontal1.png';
import './Footer.css';

const FooterSection = styled.footer`
  width: 100%;
  background-color: rgb(93, 137, 179);
  margin-top: 100px;
`;

const FooterBlock = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Footer() {
  return (
    <>
      <FooterSection>
        <FooterBlock className='container'>
          <div className='recommend-site'>
            <div className='recommend-site-title'>
              유기동물 관련 추천 사이트
            </div>
            <br />
            <div>동물보호관리시스템</div>
          </div>
          <div className='policy'>개인정보처리방침</div>
          <div></div>
          <div className='team-petmily'>
            <div className='team-text'>
              <div className='team-link'>
                <a href='https://github.com/codestates/conimals'>
                  {' '}
                  <div>
                    코드스테이츠 Software Engineering Bootcamp 38기 Final
                    Project
                  </div>
                  <br />
                  <div>Team Petmily</div>
                </a>
              </div>
              <div id='team-member'>
                <div className='team-member1'>조진형</div>
                <div className='team-member2'>정새얀</div>
                <div className='team-member3'>박선교</div>
                <div className='team-member4'>정민규</div>
              </div>
            </div>
          </div>

          <div className='4/4'>
            <img src={logo}></img>
            <div className='copyright'>
              <div>COPYRIGHT 2022 Conimals.,</div>
              <div>ALL RIGHTS RESERVED.</div>
            </div>
          </div>
        </FooterBlock>
      </FooterSection>
    </>
  );
}
