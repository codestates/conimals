import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { TestContainer } from '../../components/Container';
import SignsModal from '../../components/Modal/SignsModal';
import TestVector from '../../assets/TestVector';

const QuestionDiv = styled.div`
  padding: 0rem 0 3rem 0;
  text-align: center;
  font-size: 2rem;
  @media screen and (max-width: 450px) {
    font-size: 1.5rem;
    width: 400px;
  }
`;

const TestText = styled.div`
  width: 50%;
  height: 50%;
  transform: translate(-90%, 0%);
  z-index: 2;
`;

const Select = styled.div`
  font-size: 1.5rem;
  position: 'relative';
  background-color: orange;
  margin: 2%;
  padding: 2%;
  border-radius: 10px;
  padding-left: 10px;
  color: white;
  cursor: pointer;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
  transition: 0.25s;
  @media screen and (max-width: 450px) {
    font-size: 1rem;
    width: 350px;
  }
  &:hover {
    background-color: #e49400;
  }
`;

const ProgressBar = styled.div`
  width: ${({ progress }) => progress}%;
  height: 1rem;
  background: linear-gradient(to left, rgb(255, 166, 166), rgb(126, 197, 255));
  text-align: center;
  color: white;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const PBContainer = styled.div`
  margin-top: 7%;
`;

const checkGuest = () => {
  if (localStorage.getItem('first-guest')) {
    localStorage.removeItem('first-guest');
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
    }
    if (key === 'q1-b') {
      setIsQ1(false);
      setScore(score + 10);
      setProgress(progress + 20);
    }
    if (key === 'q2-a') {
      setIsQ2(false);
      setScore(score + 10);
      setProgress(progress + 20);
    }
    if (key === 'q2-b') {
      setIsQ2(false);
      setScore(score + 5);
      setProgress(progress + 20);
    }
    if (key === 'q2-c') {
      setIsQ2(false);
      setScore(score + 20);
      setProgress(progress + 20);
    }
    if (key === 'q3-a') {
      setIsQ3(false);
      setScore(score + 10);
      setProgress(progress + 20);
    }
    if (key === 'q3-b') {
      setIsQ3(false);
      setScore(score + 5);
      setProgress(progress + 20);
    }
    if (key === 'q4-a') {
      setIsQ4(false);
      setScore(score + 10);
      setProgress(progress + 20);
    }
    if (key === 'q4-b') {
      setIsQ4(false);
      setScore(score + 5);
      setProgress(progress + 20);
    }
    if (key === 'q5-a') {
      setIsQ5(false);
      setScore(score + 5);
      setProgress(progress + 20);
      if (score >= 80) {
        navigate('/results1');
        checkGuest();
      }
      if (70 <= score && score < 80) {
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
      if (score >= 80) {
        navigate('/results1');
        checkGuest();
      }
      if (70 <= score && score < 80) {
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
          {localStorage.getItem('user') ||
          localStorage.getItem('kakao') ||
          localStorage.getItem('first-guest') ? (
            <>
              <PBContainer>
                <ProgressBar progress={progress} />
              </PBContainer>
              {isQ1 ? (
                <TestContainer>
                  <TestVector />
                  <TestText>
                    <QuestionDiv>
                      <div>Q1.</div>
                      <br />
                      <br />
                      <div>현재 함께 거주 중인</div>
                      <br />
                      <div> 가구원 수가 어떻게 되시나요?</div>
                    </QuestionDiv>
                    <Select onClick={handleSelect('q1-a')}>
                      <div>
                        <div>A. 단독 가구입니다.</div>
                      </div>
                    </Select>
                    <Select onClick={handleSelect('q1-b')}>
                      <div>
                        <div>B. 2인 이상이 함께 거주합니다.</div>
                      </div>
                    </Select>
                  </TestText>
                </TestContainer>
              ) : (
                <>
                  {isQ2 ? (
                    <TestContainer>
                      <TestVector />
                      <TestText>
                        <QuestionDiv>
                          <div>Q2.</div>
                          <br />
                          <br />
                          <div>거주 환경의 타입은</div>
                          <br />
                          <div>어떻게 되시나요?</div>
                        </QuestionDiv>
                        <Select onClick={handleSelect('q2-a')}>
                          <div>
                            <div>A. 아파트입니다.</div>
                          </div>
                        </Select>
                        <Select onClick={handleSelect('q2-b')}>
                          <div>
                            <div>B. 빌라 또는 오피스텔입니다.</div>
                          </div>
                        </Select>
                        <Select onClick={handleSelect('q2-c')}>
                          <div>
                            <div>C. 마당이 딸린 전원주택입니다.</div>
                          </div>
                        </Select>
                      </TestText>
                    </TestContainer>
                  ) : (
                    <>
                      {isQ3 ? (
                        <TestContainer>
                          <TestVector />
                          <TestText>
                            <QuestionDiv>
                              <div>Q3.</div>
                              <br />
                              <br />
                              <div>반려동물과 함께 정기적인</div>
                              <br />
                              <div>산책과 놀이, 훈련 등을 할 수 있나요?</div>
                            </QuestionDiv>
                            <Select onClick={handleSelect('q3-a')}>
                              <div>
                                <div>A. 매일 30분 이상 가능합니다.</div>
                              </div>
                            </Select>
                            <Select onClick={handleSelect('q3-b')}>
                              <div>
                                <div>B. 시간적 여유가 많지 않습니다.</div>
                              </div>
                            </Select>
                          </TestText>
                        </TestContainer>
                      ) : (
                        <>
                          {isQ4 ? (
                            <TestContainer>
                              <TestVector />
                              <TestText>
                                <QuestionDiv>
                                  <div>Q4.</div>
                                  <br />
                                  <br />
                                  <div>
                                    반려동물에게 들어가는 양육비는
                                    <br />월 평균 15만원 입니다.
                                  </div>
                                </QuestionDiv>
                                <Select onClick={handleSelect('q4-a')}>
                                  <div>
                                    <div>
                                      A. 평균 비용 혹은 그 이상도 괜찮다.
                                    </div>
                                  </div>
                                </Select>
                                <Select onClick={handleSelect('q4-b')}>
                                  <div>
                                    <div>B. 부담스러운 편이다.</div>
                                  </div>
                                </Select>
                              </TestText>
                            </TestContainer>
                          ) : (
                            <>
                              {isQ5 ? (
                                <TestContainer>
                                  <TestVector />
                                  <TestText>
                                    <QuestionDiv>
                                      <div>
                                        Q5.
                                        <br />
                                        <br />
                                        본인 또는 가족 구성원이
                                        <br />
                                        반려동물 관련 알러지 반응을
                                        <br />
                                        나타내나요?
                                      </div>
                                    </QuestionDiv>
                                    <Select onClick={handleSelect('q5-a')}>
                                      <div>
                                        <div>A. 네.</div>
                                      </div>
                                    </Select>
                                    <Select onClick={handleSelect('q5-b')}>
                                      <div>
                                        <div>B. 아니오.</div>
                                      </div>
                                    </Select>
                                  </TestText>
                                </TestContainer>
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
