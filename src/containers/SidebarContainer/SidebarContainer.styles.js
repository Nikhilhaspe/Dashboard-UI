import styled from "styled-components";

export const Container = styled.div`
  height: 156vh;
  position: absolute;
  top: 75px;
  right: 0;
  background-color: #fafbfc;
  width: 40%;
  z-index: 100;
  padding: 10px;
  border-left: 2px solid #ededed;
`;

export const SeactionOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 10px;

  h3 {
    color: #263446;
  }
`;

export const Seprator = styled.div`
  height: 2px;
  width: 100%;
  background-color: #ededed;
  margin: 10px 10px;
`;
