import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Avatar } from "@mui/material";

import {
  CardContainer,
  Header,
  MeetStatus,
  Footer,
  InviteBtn,
} from "./MeetingCard.styles";

const MeetingCard = () => {
  return (
    <CardContainer>
      <Header>
        <p>30 minute call with clients</p>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Header>
      <h4>Project Discovery Call</h4>
      <MeetStatus>
        <span>Due Soon</span>
        <p>09:20 am</p>
      </MeetStatus>
      <Footer>
        <div>
          <Avatar />
        </div>
        <InviteBtn>+ Invite</InviteBtn>
      </Footer>
    </CardContainer>
  );
};

export default MeetingCard;
