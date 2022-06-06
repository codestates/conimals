import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ProgressBar } from 'react-bootstrap';

import { ContainerRow, UDContainer } from '../../components/Container';
import SignsModal from '../../components/Modal/SignsModal';

const QuestionDiv = styled.div`
  background-color: lightcoral;
  padding: 0rem 0 3rem 0;
  font-size: 2.3rem;
  font-weight: 600;
  @media screen and (max-width: 760px) {
    font-size: 1.5rem;
  }
`;

const Select = styled.div`
  font-size: 2rem;
  background-color: lightgray;
`;

const checkGuest = () => {
  if (localStorage.user === 'guest') {
    localStorage.removeItem('user');
    localStorage.setItem('guest', 'use');
  }
};

function Test() {
  const navigate = useNavigate();

  const [isQ1, setIsQ1] = useState(true);
  const [isQ2, setIsQ2] = useState(true);
  const [isQ3, setIsQ3] = useState(true);
  const [isQ4, setIsQ4] = useState(true);
  const [isQ5, setIsQ5] = useState(true);

  const [score, setScore] = useState(40);
  const [progress, setProgress] = useState(20);
  const [count, setCount] = useState('0 / 5');
  const [select, setSelect] = useState({
    size: null,
    space: null,
    species: null,
  });

  const handleSelect = (key) => (e) => {
    setSelect({ ...select, [key]: e.target.id });
    if (key === 'q1-a') {
      setIsQ1(false);
      setScore(score + 5);
      setProgress(progress + 20);
      setCount('1 / 5');
    }
    if (key === 'q1-b') {
      setIsQ1(false);
      setScore(score + 10);
      setProgress(progress + 20);
      setCount('1 / 5');
    }
    if (key === 'q2-a') {
      setIsQ2(false);
      setScore(score + 10);
      setProgress(progress + 20);
      setCount('2 / 5');
    }
    if (key === 'q2-b') {
      setIsQ2(false);
      setScore(score + 5);
      setProgress(progress + 20);
      setCount('2 / 5');
    }
    if (key === 'q2-c') {
      setIsQ2(false);
      setScore(score + 20);
      setProgress(progress + 20);
      setCount('2 / 5');
    }
    if (key === 'q3-a') {
      setIsQ3(false);
      setScore(score + 10);
      setProgress(progress + 20);
      setCount('3 / 5');
    }
    if (key === 'q3-b') {
      setIsQ3(false);
      setScore(score + 5);
      setProgress(progress + 20);
      setCount('3 / 5');
    }
    if (key === 'q4-a') {
      setIsQ4(false);
      setScore(score + 10);
      setProgress(progress + 20);
      setCount('4 / 5');
    }
    if (key === 'q4-b') {
      setIsQ4(false);
      setScore(score + 5);
      setProgress(progress + 20);
      setCount('4 / 5');
    }
    if (key === 'q5-a') {
      setIsQ5(false);
      setScore(score + 5);
      setProgress(progress + 20);
      setCount('5 / 5');
      if (score >= 80) {
        navigate('/results1');
        checkGuest();
      }
      if (70 <= score < 80) {
        navigate('/results2');
        checkGuest();
      }
      if (score < 70) {
        navigate('/results3');
        checkGuest();
      }
    }
    if (key === 'q5-b') {
      setIsQ5(false);
      setScore(score + 10);
      setProgress(progress + 20);
      setCount('5 / 5');
      if (score >= 80) {
        navigate('/results1');
        checkGuest();
      }
      if (70 <= score < 80) {
        navigate('/results2');
        checkGuest();
      }
      if (score < 70) {
        navigate('/results3');
        checkGuest();
      }
    }
  };

  return (
    <>
      {localStorage.getItem('guest') ? (
        <SignsModal />
      ) : (
        <>
          {localStorage.getItem('user') ? (
            <>
              <ProgressBar now={progress} label={`${count}`} />
              {isQ1 ? (
                <UDContainer>
                  <QuestionDiv>
                    <div>Q1.</div>
                    현재 함께 거주 중인 가구원 수가 어떻게 되시나요?
                  </QuestionDiv>
                  <Select onClick={handleSelect('q1-a')}>
                    <div style={{ position: 'relative' }}>
                      <div>A. 단독 가구입니다.</div>
                    </div>
                  </Select>
                  <Select onClick={handleSelect('q1-b')}>
                    <div style={{ position: 'relative' }}>
                      <div>B. 2인 이상이 함께 거주합니다.</div>
                    </div>
                  </Select>
                </UDContainer>
              ) : (
                <>
                  {isQ2 ? (
                    <UDContainer>
                      <QuestionDiv>
                        <div>Q2.</div>
                        거주 환경의 타입은 어떻게 되시나요?
                      </QuestionDiv>
                      <Select onClick={handleSelect('q2-a')}>
                        <div style={{ position: 'relative' }}>
                          <div>A. 아파트입니다.</div>
                        </div>
                      </Select>
                      <Select onClick={handleSelect('q2-b')}>
                        <div style={{ position: 'relative' }}>
                          <div>B. 빌라 또는 오피스텔입니다.</div>
                        </div>
                      </Select>
                      <Select onClick={handleSelect('q2-c')}>
                        <div style={{ position: 'relative' }}>
                          <div>C. 마당이 딸린 전원주택입니다.</div>
                        </div>
                      </Select>
                    </UDContainer>
                  ) : (
                    <>
                      {isQ3 ? (
                        <UDContainer>
                          <QuestionDiv>
                            <div>Q3.</div>
                            반려동물과 함께 정기적인 산책과 놀이, 훈련 등을 할
                            수 있나요?
                          </QuestionDiv>
                          <Select onClick={handleSelect('q3-a')}>
                            <div style={{ position: 'relative' }}>
                              <div>A. 매일 1시간 이상 가능합니다.</div>
                            </div>
                          </Select>
                          <Select onClick={handleSelect('q3-b')}>
                            <div style={{ position: 'relative' }}>
                              <div>B. 시간적 여유가 많지 않습니다.</div>
                            </div>
                          </Select>
                        </UDContainer>
                      ) : (
                        <>
                          {isQ4 ? (
                            <UDContainer>
                              <QuestionDiv>
                                <div>Q4.</div>
                                반려동물에게 들어가는 양육비는 월 평균 15만원
                                입니다.
                              </QuestionDiv>
                              <Select onClick={handleSelect('q4-a')}>
                                <div style={{ position: 'relative' }}>
                                  <div>A. 평균 비용 혹은 그 이상도 괜찮다.</div>
                                </div>
                              </Select>
                              <Select onClick={handleSelect('q4-b')}>
                                <div style={{ position: 'relative' }}>
                                  <div>B. 부담스러운 편이다.</div>
                                </div>
                              </Select>
                            </UDContainer>
                          ) : (
                            <>
                              {isQ5 ? (
                                <UDContainer>
                                  <QuestionDiv>
                                    <div>Q5.</div>
                                    본인 또는 가족 구성원이 반려동물 관련 알러지
                                    반응을 나타내나요?
                                  </QuestionDiv>
                                  <Select onClick={handleSelect('q5-a')}>
                                    <div style={{ position: 'relative' }}>
                                      <div>A. 네.</div>
                                    </div>
                                  </Select>
                                  <Select onClick={handleSelect('q5-b')}>
                                    <div style={{ position: 'relative' }}>
                                      <div>B. 아니오.</div>
                                    </div>
                                  </Select>
                                </UDContainer>
                              ) : null}
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </>
          ) : (
            <SignsModal />
          )}
        </>
      )}
    </>
  );
}

export default Test;
