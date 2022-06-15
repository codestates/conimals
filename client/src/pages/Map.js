import React, { useState } from 'react';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import { dummydata } from '../lib/dummydata';

const MarkerWithCustomOverlayStyle = styled.div`
  margin-top: 100px;
  .customoverlay {
    position: relative;
    bottom: 85px;
    border-radius: 6px;
    border: 1px solid #ccc;
    border-bottom: 2px solid #ddd;
    float: left;
  }
  .customoverlay:nth-of-type(n) {
    border: 0;
    box-shadow: 0px 1px 2px #888;
  }
  .customoverlay a {
    display: block;
    text-decoration: none;
    color: #000;
    text-align: center;
    border-radius: 6px;
    font-size: 14px;
    font-weight: bold;
    overflow: hidden;
    background: #d95050;
    background: #d95050
      url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png)
      no-repeat right 14px center;
  }
  .customoverlay .title {
    display: block;
    text-align: center;
    background: #fff;
    margin-right: 35px;
    padding: 10px 15px;
    font-size: 14px;
    font-weight: bold;
  }
  .customoverlay:after {
    content: '';
    position: absolute;
    margin-left: -12px;
    left: 50%;
    bottom: -12px;
    width: 22px;
    height: 12px;
    background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png');
  }
`;

/**
 * !!! 해결해야할 문제들과 구현했으면 하는 것들 (어려움ㅠㅠ)
 * 마커 클릭시 따로 따로 인포창이 뜨게 하는 기능 (useState로 해결)
 * 마우스 호버하면 해당 인포창이 잠시 보이는 기능
 * 마커를 클릭하면 옆 목록창에 해당 보호소 정보창이 강조
 * 해당 정보창을 클릭하면 현재 유기된 동물들의 사진이 보여지는 기능
 */

function ConimalsMap() {
  const [markers, setMarkers] = useState(dummydata);
  const [isOpen, setIsOpen] = useState(false);

  //setMarkers 사용은 어떻게 하면 좋을지 고민할 것

  function openIf() {
    setIsOpen(isOpen === true ? false : true);
  }
  return (
    <>
      <MarkerWithCustomOverlayStyle>
        <Map // 지도를 표시할 Container
          center={{
            // 지도의 중심좌표
            lat: 37.51724,
            lng: 126.97052,
          }}
          style={{
            // 지도의 크기
            width: '100vw',
            height: '100vh',
          }}
          level={8} // 지도의 확대 레벨
        >
          {markers.map((el, i) => (
            <>
              <MapMarker // 마커를 생성합니다
                key={'marker' + i}
                onClick={openIf}
                position={{
                  lat: `${markers[i].lat}`,
                  lng: `${markers[i].lng}`,
                }}
                image={{
                  src: 'https://i.ibb.co/3yT5JP8/Conimals-pin.png', // 마커이미지의 주소입니다
                  size: {
                    width: 64,
                    height: 69,
                  }, // 마커이미지의 크기입니다
                  options: {
                    offset: {
                      x: 27,
                      y: 69,
                    }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
                  },
                }}
              />
              {isOpen && (
                <CustomOverlayMap //버튼 클릭 관련
                  key={'custom' + i}
                  position={{
                    lat: `${markers[i].lat}`,
                    lng: `${markers[i].lng}`,
                  }}
                  yAnchor={1}
                >
                  <div className='customoverlay'>
                    <a
                      href={markers[i].kakaolink}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <span className='title'>{markers[i].title}</span>
                    </a>
                  </div>
                </CustomOverlayMap>
              )}
            </>
          ))}
        </Map>
      </MarkerWithCustomOverlayStyle>
    </>
  );
}

export default ConimalsMap;
