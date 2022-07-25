import styled from "styled-components";

export const CardContainer = styled.div`
  border: 2px solid #e9ecf0;
  padding: 10px !important;
  border-radius: 10px;
  padding: 5px 10px;
  width: 300px;
  height: 150px;
`;

export const PriceContainer = styled.div`
  display: flex;

  h3 {
    color: #192434;
  }
`;

export const StatusContainer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 5px;
  color: #7c8590;

  div {
    color: white;
    background-color: #15c15d;
    padding: 5px 15px;
    border-radius: 4px;
  }
`;
// 77828f
export const Info = styled.div`
  display: flex;
  padding: 0px 5px;
  margin-top: 20px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: 15px;

  h4 {
    color: #192434;
  }

  div {
    padding-top: 10px;
    display: flex;
    justify-content: space-between;

    p {
      color: #bbc1c7;
    }
  }
`;
