import React from "react";
import { Avatar } from "@mui/material";

import {
  CardContainer,
  Logo,
  Seprator,
  NewMessage,
} from "./ActivityCard.styles";

const logoStyling = {
  fontSize: "30px",
};

const ActivityCard = () => {
  return (
    <CardContainer>
      <p>Thank you for booking a meeting with JJ</p>
      <div>
        <p>Kavin Dukkon</p>
      </div>
      <div>
        <span>Jun 14, 2021 at 5:31 PM</span>
      </div>
      <Logo>
        <Avatar style={{ logoStyling }} />
      </Logo>
      <Seprator />
      <NewMessage />
    </CardContainer>
  );
};

export default ActivityCard;
