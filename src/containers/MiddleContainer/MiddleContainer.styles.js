import styled from "styled-components";

export const Container = styled.div`
  margin: 0 15px;
`;

export const Header = styled.div`
  position: relative;
  margin: 20px 0;
  h2 {
    letter-spacing: 1px;
  }

  p {
    margin-top: 20px;
    color: #6e6f7d;
    font-weight: 600;
  }
`;

export const IconsDiv = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;

  .first {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    border-radius: 4px;
    padding: 5px 20px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    span {
      margin-right: 10px;
    }

    &:hover {
      cursor: pointer;
      border: 2px solid lightgray;
    }
  }

  .second {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    border-radius: 4px;
    padding: 5px 5px;
    margin-left: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    &:hover {
      cursor: pointer;
      border: 2px solid lightgray;
    }
  }
`;
