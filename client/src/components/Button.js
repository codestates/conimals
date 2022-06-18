import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  border: none;
  padding: 15px 30px;
  border-radius: 15px;
  margin-top: 15px;
  font-family: sans-serif;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
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
  border-radius: 1rem;
  background-color: #00b0ff;

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
  margin-top: 30px;
  padding: 10px 27px;
  background-color: white;
  border: 3px solid red;
  color: black;

  &:hover {
    color: white;
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
