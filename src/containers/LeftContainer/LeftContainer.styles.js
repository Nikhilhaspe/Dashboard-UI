import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  background-color: #fafafa;
  margin-left: 25px;
  padding-top: 20px;
`;

export const OptionContainer = styled.div`
  display: flex;
  height: 40px;
  margin-left: 10px;
  align-items: center;

  h6 {
    margin-left: 10px;
    font-size: 15px;
    color: #8b95a2;
  }

  .blue {
    color: #14a9f9 !important;
  }

  .MuiSvgIcon-root {
    color: #8b95a2;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const PromotionsContainer = styled.div`
  h5 {
    margin: 25px 0;
  }
`;
