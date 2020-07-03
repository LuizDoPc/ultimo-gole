import React from 'react';
import styled from 'styled-components';

import Button from 'components/core/Button';

const Header = ({ title, subtitle, isButtonsVisible }) => {
  return (
    <StyledHeaderContainer>
      <div>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
      </div>

      <StyledButtonContainer>
        <Button backgroundColor='#FFCC28' textColor='white'>
          Pagar a casa
        </Button>
        <Button backgroundColor='#FFCC28' textColor='white' marginLeft={10}>
          Fechar o mês
        </Button>
      </StyledButtonContainer>
    </StyledHeaderContainer>
  );
};

const StyledTitle = styled.div`
  font-size: 30px;
  font-family: 'GilroyExtraBold';
`;

const StyledSubtitle = styled.div`
  color: #a6acbe;
`;

const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: calc(95vw - 64px);
  padding-left: 2%;
  padding-top: 2%;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Header;
