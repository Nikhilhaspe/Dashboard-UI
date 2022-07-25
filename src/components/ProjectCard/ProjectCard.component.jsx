import React from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Avatar } from "@mui/material";

import {
  CardContainer,
  First,
  Second,
  Third,
  Wrapper,
  ProgressBar,
} from "./ProjectCard.styles";

const ProjectCard = () => {
  return (
    <CardContainer>
      <h3>Construction Project</h3>
      <span>Property name</span>
      <Wrapper>
        <First>
          <AttachMoneyIcon />
          100 - 800
        </First>
        <Second>
          <CalendarMonthIcon />
          Deadline - 25 May
        </Second>
      </Wrapper>
      <ProgressBar>
        <span style={{ width: "25%" }}></span>
      </ProgressBar>
      <p style={{ fontSize: "10px", margin: "10px 0" }}>Progress Bar</p>
      <Third>
        <div>
          <Avatar />
          <div>Vender's name</div>
        </div>
        <button>View</button>
      </Third>
    </CardContainer>
  );
};

export default ProjectCard;
