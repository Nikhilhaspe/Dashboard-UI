import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";

import MeetingAccordion from "../MeetingAccordion/MeetingAccordion.container";
import ActivityContainer from "../ActivityAccordian/ActivityContainer.cotainer";
import { Container, SeactionOne, Seprator } from "./SidebarContainer.styles";

const SidebarContainer = () => {
  return (
    <Container>
      <SeactionOne>
        <h3>Upcoming Meeting</h3>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </SeactionOne>
      <Seprator />
      <MeetingAccordion />
      <Seprator />
      <ActivityContainer />
    </Container>
  );
};

export default SidebarContainer;
