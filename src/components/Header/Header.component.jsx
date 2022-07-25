import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';

import {Container, Logo, SearchBar, Profile, UserDetails} from "./Header.styled";
 
const Header = () => {
    return(
        <Container>
            <Logo>
                <h1>LOGO</h1>
            </Logo>
            <SearchBar>
                <div>
                <IconButton>
                    <SearchIcon style={{fontSize: "30px", color: "#8c959f"}}/>   
                </IconButton>
                <input type="text" placeholder='search for projects'/>
                </div>
            </SearchBar>
            <Profile>
                <IconButton>
                    <AccountCircleIcon style={{fontSize: "30px", color: "#8c959f"}}/>
                </IconButton>
                <UserDetails>
                    <h2>Oliver Smith</h2>
                    <p>Vendor</p>
                </UserDetails>
                <IconButton>
                    <ChevronRightIcon/>
                </IconButton>
            </Profile>
        </Container>
    );
};

export default Header;