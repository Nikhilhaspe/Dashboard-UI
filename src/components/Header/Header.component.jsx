import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";

import SidebarContainer from "../../containers/SidebarContainer/SidebarContainer";
import {
  Container,
  Logo,
  SearchBar,
  Profile,
  UserDetails,
} from "./Header.styled";

const Header = () => {
  const [visibility, setVisibility] = useState(false);

  return (
    <Container>
      <Logo>
        <h1>LOGO</h1>
      </Logo>
      <SearchBar>
        <div>
          <IconButton>
            <SearchIcon style={{ fontSize: "30px", color: "#8c959f" }} />
          </IconButton>
          <input type="text" placeholder="search for projects" />
        </div>
      </SearchBar>
      <Profile>
        <IconButton>
          <AccountCircleIcon style={{ fontSize: "50px", color: "#8c959f" }} />
        </IconButton>
        <UserDetails>
          <h4>Oliver Smith</h4>
          <p>Vendor</p>
        </UserDetails>
        <IconButton>
          <ChevronRightIcon onClick={() => setVisibility(!visibility)} />
        </IconButton>
      </Profile>
      {visibility ? <SidebarContainer /> : null}
    </Container>
  );
};

export default Header;
