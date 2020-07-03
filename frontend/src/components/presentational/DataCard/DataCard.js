import React from 'react';
import styled from 'styled-components';

const DataCard = ({ icon, value, color, subtitle }) => {
  return (
    <StyledCardContainer>
      <StyledImage src={icon} alt='' />
      <StyledCard>
        <StyledValue color={color}>R$ {value}</StyledValue>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
      </StyledCard>
    </StyledCardContainer>
  );
};

const StyledCard = styled.div`
  margin-left: 1vw;
`;

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 1vw;
  padding-left: 2vw;
  padding-right: 5vw;
  padding-top: 2vw;
  padding-bottom: 2vw;
  margin-left: 2vw;
  background-color: white;
  box-shadow: -2px 13px 20px -8px #ededf6;
`;

const StyledImage = styled.img``;

const StyledValue = styled.div`
  font-family: 'GilroyExtraBold';
  color: ${({ color }) => color};
  font-size: 30px;
  width: 200px;
`;

const StyledSubtitle = styled.div`
  color: #a6acbe;
`;

export default DataCard;
