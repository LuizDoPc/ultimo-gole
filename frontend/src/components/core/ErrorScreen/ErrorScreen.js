import React from 'react';
import styled from 'styled-components';

const ErrorScreen = () => {
  return <StyledErrorContainer>ERROR</StyledErrorContainer>;
};

const StyledErrorContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'GilroyExtraBold';
  font-size: 80px;
`;

export default ErrorScreen;
