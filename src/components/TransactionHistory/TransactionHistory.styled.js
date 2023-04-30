import styled from 'styled-components';

export const History = styled.table`
  width: 480px;
  margin-left: auto;
  margin-right: auto;
  border-collapse: collapse;
  border-radius: 6px;
  box-shadow: 0px 5px 10px 0px rgba(105, 114, 121, 0.2);
`;

export const Th = styled.th`
  background-color: #188d9f;
  color: white;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 400;
  padding: 10px 20px;

  :not(:last-child) {
    border-right: 2px solid #fff;
  }
`;

export const Td = styled.td`
  padding: 10px 20px;
  text-align: center;
  color: #92979d;
  text-transform: capitalize;

  :not(:last-child) {
    border-right: 1px solid #fff;
  }
`;

export const Tr = styled.tr`
  :nth-child(even) {
    background-color: rgb(231, 219, 219);
  }
`;
