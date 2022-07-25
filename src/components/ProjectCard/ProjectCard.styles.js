import styled from "styled-components";

export const CardContainer = styled.div`
  border: 2px solid #e9ecf0;
  border-radius: 10px;
  padding: 5px 10px;
  width: 300px;
  height: 200px;
  margin: 10px;

  h3 {
    margin-bottom: 10px;
  }

  span {
    margin-bottom: 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

export const First = styled.div`
  display: flex;
  align-items: center;
  width: 40%;

  .MuiSvgIcon-root {
    margin-right: 10px;
  }
`;

export const Second = styled.div`
  display: flex;
  align-items: center;
  width: 60%;

  .MuiSvgIcon-root {
    margin-right: 10px;
  }
`;

export const Third = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 18px;

  div {
    display: flex;
    align-items: center;

    div {
      margin-left: 10px;
    }
  }

  button {
    background-color: #14a9f9;
    border: none;
    height: 40px;
    width: 60px;
    padding: 5px 10px;
    border-radius: 4px;
    color: white;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const ProgressBar = styled.div`
  height: 10px;
  position: relative;
  background: #ededed;
  border-radius: 4px;
  padding: 0px;
  margin: 10px 0;

  span {
    display: block;
    height: 100%;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    background-color: rgb(20, 169, 249);
    position: relative;
    overflow: hidden;
  }
`;
