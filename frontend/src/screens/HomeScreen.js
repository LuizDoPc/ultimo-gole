import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import Header from "components/core/Header";
import Loader from "components/core/Loader";
import ErrorScreen from "components/core/ErrorScreen";

import DataCard from "components/presentational/DataCard";
import PersonCard from "components/presentational/PersonCard";

import { GET_DASH } from "store/actions";

import icMoney from "assets/money.svg";
import icWings from "assets/wings.svg";
import icHouse from "assets/house.svg";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const { isLoading, dashData, error } = useSelector(({ app }) => app);

  useEffect(() => {
    dispatch({ type: GET_DASH });
  }, [dispatch]);

  if (isLoading) return <Loader />;
  if (error) return <ErrorScreen />;

  return (
    <div>
      <Header
        title={`Bem Vindo ${dashData?.user?.name}`}
        subtitle={dashData?.user?.role}
        isButtonsVisible
      />

      <StyledCardContainer>
        <DataCard
          icon={icMoney}
          value={5500}
          color="#26E122"
          subtitle="Receita"
        />
        <DataCard
          icon={icWings}
          value={5500}
          color="#E12222"
          subtitle="Custo"
        />
        <DataCard
          icon={icHouse}
          value={5500}
          color="#000000"
          subtitle="Caixinha"
        />
      </StyledCardContainer>

      <StyledCardPersonContainer>
        <PersonCard
          icon={icMoney}
          name="Sarrada"
          value={550}
          subtitle="Já passou"
        />
        <PersonCard
          icon={icMoney}
          name="Saracura"
          value={550}
          subtitle="Já passou"
        />
        <PersonCard
          icon={icMoney}
          name="Fejuada"
          value={300}
          subtitle="Já passou"
          subtitleTwo="Falta"
          valueTwo="R$250"
        />
        <PersonCard
          icon={icMoney}
          name="Rufião"
          value={550}
          subtitle="Já passou"
        />
      </StyledCardPersonContainer>
    </div>
  );
};

const StyledCardContainer = styled.div`
  display: flex;
  margin-top: 3%;
`;

const StyledCardPersonContainer = styled.div`
  display: flex;
  margin-top: 1%;
`;

export default HomeScreen;
