import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  border-radius: 6px;
  width: 480px;
  box-shadow: 0px 4px 8px 0px rgba(36, 38, 39, 0.2);
`;

export const Avatar = styled.img`
  margin-top: 100px;
  border-radius: 50%;
  width: 100px;
  margin: 20px auto;
  border: 1px solid #4b4646;
`;

export const Description = styled.div`
  text-align: center;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
  color: #212121;
`;

export const Tag = styled.p`
  font-weight: 700;
  margin-top: 5px;
  color: rgb(142, 141, 141);
`;

export const Location = styled.p`
  font-weight: 700;
  margin-top: 5px;
  color: rgb(142, 141, 141);
`;

export const Stats = styled.ul`
  background-color: #f3f6f9;
  display: flex;
  padding: 6px 0 6px 0;
  border-radius: 0 0 6px 6px;
  margin-top: 50px;
`;

export const StatsItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: calc(100% / 3);
  padding: 15px 0;
`;

export const Label = styled.span`
  color: rgb(142, 141, 141);
  font-size: 14px;
`;

export const Quantity = styled.span`
  color: rgb(142, 141, 141);
  font-size: 14px;
`;
