import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DescriptionIcon from "@mui/icons-material/Description";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SendIcon from "@mui/icons-material/Send";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import CallIcon from "@mui/icons-material/Call";
import WorkspacesIcon from "@mui/icons-material/Workspaces";

import {
  Container,
  OptionContainer,
  PromotionsContainer,
} from "./LeftContainer.styles";

const LeftContainer = () => {
  return (
    <Container>
      <OptionContainer>
        <DashboardIcon className="blue" />
        <h6>Dashboard</h6>
      </OptionContainer>
      <OptionContainer>
        <DescriptionIcon />
        <h6>Project</h6>
      </OptionContainer>
      <OptionContainer>
        <CalendarMonthIcon />
        <h6>Calendar</h6>
      </OptionContainer>
      <OptionContainer>
        <SendIcon />
        <h6>Messages</h6>
      </OptionContainer>
      <OptionContainer>
        <NotificationsActiveIcon />
        <h6>Notifications</h6>
      </OptionContainer>
      <OptionContainer>
        <CallIcon />
        <h6>Contacts</h6>
      </OptionContainer>
      <PromotionsContainer>
        <h5>Promotions</h5>
        <OptionContainer>
          <WorkspacesIcon />
          <h6>Promotions</h6>
        </OptionContainer>
      </PromotionsContainer>
    </Container>
  );
};

export default LeftContainer;
