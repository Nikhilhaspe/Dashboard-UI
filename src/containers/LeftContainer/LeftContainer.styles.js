import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  background-color: #fafafa;
  padding-right: 25px;
  padding-top: 30px;
  height: 156vh;
`;

export const OptionContainer = styled.div`
  display: flex;
  height: 50px;
  margin-left: 20px;
  align-items: center;
  position: relative;

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
  padding-left: 10px;
  h5 {
    margin: 25px 0;
  }
`;

export const Selected = styled.div`
  position: absolute;
  height: 100%;
  width: 8px;
  background-color: #14a9f9;
  top: 0px;
  left: -20px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const Alert = styled.div`
  position: absolute;
  height: 20px;
  width: 25px;
  border-radius: 5px;
  background-color: #14a9f9;
  top: 10px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 1.5px 3px;
`;
