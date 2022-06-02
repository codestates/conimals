import React from 'react';
import styled, { css } from 'styled-components';

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: #000;
  outline: none;
  cursor: pointer;

  &:hover {
    background: #343a40;
    color: #fff;
  }
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
