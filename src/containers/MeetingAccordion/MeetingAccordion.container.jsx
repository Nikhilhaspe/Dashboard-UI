import React, { useState } from "react";
import { IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import { Container, Header, Content } from "./MeetingAccordion.styles";
import MeetingCard from "../../components/MeetingCard/MeetingCard.component";

const MeetingAccordion = () => {
  const [show, setShow] = useState(true);

  return (
    <Container>
      <Header>
        <p>Today's Meetings</p>
        <IconButton onClick={() => setShow(!show)}>
          <IconButton>
            {show ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          </IconButton>
        </IconButton>
      </Header>
      {show && (
        <Content>
          <MeetingCard />
          <MeetingCard />
          <MeetingCard />
          <MeetingCard />
        </Content>
      )}
    </Container>
  );
};

export default MeetingAccordion;
