import styled from "styled-components";

export const CardContainer = styled.div`
  margin: 10px 40px;
  padding: 10px 20px;
  position: relative;

  p {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  div {
    margin-top: 18px;
  }

  span {
    font-size: 14px;
    color: #b0b6be;
  }
`;

export const Logo = styled.div`
  position: absolute;
  top: -25px;
  right: 10px;
`;

export const Seprator = styled.div`
  height: 2px;
  width: 100%;
  background-color: #ededed;
`;

export const NewMessage = styled.div`
  position: absolute;
  top: -10px;
  left: 0px;
  background-color: #14a9f9;
  height: 10px;
  width: 10px;
  border-radius: 50%;
`;
