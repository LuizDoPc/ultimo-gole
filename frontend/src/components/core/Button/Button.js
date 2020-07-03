import React from 'react';
import styled from 'styled-components';

const Button = ({
  type,
  onClick,
  children,
  textColor,
  backgroundColor,
  borderWidth,
  borderColor,
  width,
  height,
  marginLeft,
}) => (
  <StyledButton
    onClick={onClick}
    style={{
      backgroundColor,
      color: textColor,
      borderWidth,
      borderColor,
      width,
      height,
      marginLeft,
    }}
  >
    {children}
  </StyledButton>
);

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  height: 38px;
  padding: 0 0.7em;
  min-width: 138px;
  font-size: 0.8em;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
`;

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
