import styled from 'styled-components';

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

export const StatisticsSection = styled.section`
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  padding: 0;
  width: 480px;
  box-shadow: 0px 4px 8px 0px rgba(36, 38, 39, 0.2);
`;

export const Title = styled.h2`
  text-align: center;
  padding-top: 15px;
`;

export const ListStat = styled.ul`
  text-align: center;
  padding: 10px 15px;
  display: flex;
`;

export const Item = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: calc(100% / 4);
  padding: 15px 15px;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span`
  text-align: center;
  padding-top: 15px;
`;

export const Percentage = styled.span`
  font-size: 18px;
  margin-top: 5px;
  font-weight: 700;
`;
