import styled from "styled-components";

export const CardContainer = styled.div`
  margin: 10px 40px;
  padding: 10px 20px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: #229ada;
    font-size: small;
  }
`;

export const MeetStatus = styled.div`
  margin: 10px 0px;
  font-size: 12px;

  span {
    display: inline-block;
    margin-right: 10px;
    color: #8e97a2;
  }

  p {
    display: inline-block;
    font-weight: bold;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InviteBtn = styled.div`
  background-color: rgba(20, 169, 249, 1);
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  border-radius: 6px;
  align-items: center;
  color: white;

  &:hover {
    cursor: pointer;
    background-color: rgba(20, 169, 249, 0.7);
  }
`;
