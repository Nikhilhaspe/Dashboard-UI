import styled from "styled-components";

export const CardContainer = styled.div`
  height: 200px;
  width: 300px;
  border-radius: 10px;
  position: relative;
  margin-right: 15px;
`;

export const LiveProjects = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  align-items: center;
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgb(110, 110, 110, 0.4);
  color: white;
  border-radius: 7px;

  span {
    margin-left: 8px;
    word-spacing: 1px;
    letter-spacing: 0.7px;
  }
`;

export const ViewAll = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgb(128, 128, 128, 0.4);
  color: white;
  border-radius: 7px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  border-radius: 7px;

  h3 {
    font-size: 35px;
    letter-spacing: 1.5px;
    margin-bottom: 4px;
  }

  span {
    font-size: 15px;
    letter-spacing: 0.5px;
  }
`;
