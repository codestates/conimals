import React from 'react';

import logo from '../assets/Conimals_logo_horizontal1.png';
import './Footer.css';

export default function Footer() {
  return (
    <>
      <div className='container'>
        <div className='recommend-site'>
          <div className='recommend-site-title'>유기동물 관련 추천 사이트</div>
          <br />
          <div>동물보호관리시스템</div>
        </div>
        <div className='policy'>개인정보처리방침</div>
        <div className='team-petmily'>
          <div className='team-text'>
            <div className='team-link'>
              <a href='https://github.com/codestates/conimals'>
                {' '}
                <div>
                  코드스테이츠 Software Engineering Bootcamp 38기 Final Project
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
        <img src={logo}></img>
        <div className='copyright'>
          <div>COPYRIGHT 2022 Conimals.,</div>
          <div>ALL RIGHTS RESERVED.</div>
        </div>
      </div>
    </>
  );
}
