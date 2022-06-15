import styled from 'styled-components';

export const BigInput = styled.input`
  margin-top: 3%;
  width: 30vw;
  height: 5vh;
  font-size: 15px;
  border: 0;
  border-radius: 10px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(253, 253, 253);
  box-shadow: none;
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

export const ShadowBigInput = styled(BigInput)`
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
`;

export const EditInput = styled.input`
  margin-top: 3%;
  width: 80%;
  height: 5vh;
  font-size: 15px;
  border: 0;
  border-radius: 10px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(253, 253, 253);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
`;

export const Line = styled.hr`
  margin-top: 5%;
  border-right: 1px solid gray;
  width: 100%;
`;
