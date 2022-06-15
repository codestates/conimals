import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  border: none;
  padding: 15px 30px;
  border-radius: 15px;
  margin-top: 15px;
  font-family: sans-serif;
  box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  font-weight: 600;
  transition: 0.25s;
  background-color: indianred;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: firebrick;
  }
`;

export const MainButton = styled(Button)`
  margin-top: 0px;
  border-radius: 0px;
  background-color: skyblue;

  &:hover {
    background-color: steelblue;
  }
`;

export const MainButton2 = styled(MainButton)`
  background-color: indianred;
  &:hover {
    background-color: firebrick;
  }
`;

export const WithdrawalButton = styled(Button)`
  padding: 1px 5px;
  margin-top: 30px;
  background-color: darkkhaki;

  &:hover {
    background-color: darkgoldenrod;
  }
`;

export const EditButton = styled(Button)`
  background-color: steelblue;

  &:hover {
    background-color: slateblue;
  }
`;

export const GuestButton = styled(Button)`
  background-color: lightseagreen;

  &:hover {
    background-color: skyblue;
  }
`;
