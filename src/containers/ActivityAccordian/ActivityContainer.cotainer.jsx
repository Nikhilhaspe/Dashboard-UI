import React from "react";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import ActivityCard from "../../components/ActivityCard/ActivityCard.component";
import { Container, SeactionOne } from "./ActivityContainer.styles";

const ActivityContainer = () => {
  return (
    <Container>
      <SeactionOne>
        <h3>Recent Activity</h3>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </SeactionOne>
      <ActivityCard />
      <ActivityCard />
    </Container>
  );
};

export default ActivityContainer;
