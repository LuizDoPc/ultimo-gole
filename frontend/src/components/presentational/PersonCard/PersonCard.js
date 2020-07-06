import React from "react";
import styled from "styled-components";

const PersonCard = ({ icon, name, value, valueTwo, subtitle, subtitleTwo }) => {
  return (
    <StyledCardContainer>
      <StyledImage src={icon} alt="" />
      <StyledCard>
        <StyledName>{name}</StyledName>
        <StyledSubCard>
          <StyledSubtitle>{subtitle}</StyledSubtitle>
          <StyledValue color={"#26E122"}>R$ {value}</StyledValue>
        </StyledSubCard>
        <StyledSubCard>
          <StyledSubtitle>{subtitleTwo}</StyledSubtitle>
          <StyledValue color={"red"}> {valueTwo}</StyledValue>
        </StyledSubCard>
      </StyledCard>
    </StyledCardContainer>
  );
};

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1vw;
  padding-left: 2vw;
  padding-right: 2vw;
  padding-top: 1vw;
  padding-bottom: 2vw;
  margin-left: 2vw;
  background-color: white;
  box-shadow: -2px 13px 20px -8px #ededf6;
  text-align: center;
`;

const StyledImage = styled.img`
  border-radius: 10px;
  width: 100px;
  heigth: 100px;
`;

const StyledValue = styled.div`
  font-family: "GilroyExtraBold";
  color: ${({ color }) => color};
  font-size: 25px;
  text-align: right;
  padding-left: 1vw;
`;

const StyledSubtitle = styled.div`
  color: #000;
  text-align: left;
`;

const StyledName = styled.div`
  font-family: "GilroyExtraBold";
  font-size: 28px;
`;

const StyledSubCard = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1vw;
`;
export default PersonCard;
