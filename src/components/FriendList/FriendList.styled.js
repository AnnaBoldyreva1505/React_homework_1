import styled from "styled-components";


export const List = styled.ul`
  margin: 10px auto;
  padding: 0;
  list-style: none;
  width: 480px;
`

export const Item = styled.li`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 3fr;
  margin-top: 10px;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.5rem;
`

export const Status = styled.span`
  border-radius: 50%;
  margin: auto 20px;
  height: 15px;
  width: 15px;
  color: ${p => p.active ? "green" : "red"};
`

export const Name = styled.p`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 0;
  text-align: left;
  font-weight: bold;
  font-size: 20px;
`