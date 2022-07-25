import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 10px 0;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.div`
  width: 20%;
  text-align: center;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  margin: 0 10px;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f6f6f6;
    border-radius: 5px;

    input {
      width: 90%;
      height: 50px;
      font-size: 20px;
      color: #8c959f;
      background-color: #f6f6f6;
      border: none;
      outline: none;
    }
  }
`;

export const Profile = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;
