import React from "react";

import PodcastsIcon from "@mui/icons-material/Podcasts";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

import {
  CardContainer,
  LiveProjects,
  ViewAll,
  Footer,
} from "./ProgressCard.styled";

const ProgressCard = ({ data }) => {
  var leftIcon, rightTop;
  if (data.topLeft.icon === "PodcastsIcon") {
    leftIcon = <PodcastsIcon />;
  } else if (data.topLeft.icon === "HourglassBottomIcon") {
    leftIcon = <HourglassBottomIcon />;
  } else {
    leftIcon = <AssignmentTurnedInIcon />;
  }
  rightTop = data.topRight;

  return (
    <CardContainer style={{ backgroundColor: data.background }}>
      <LiveProjects>
        {leftIcon}
        <span>{data.topLeft.text}</span>
      </LiveProjects>
      {data.topRight ? <ViewAll> {rightTop} </ViewAll> : null}
      <Footer>
        <h3>{data.footer.count}</h3>
        <span>{data.footer.text}</span>
      </Footer>
    </CardContainer>
  );
};

export default ProgressCard;
