import React from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Avatar } from "@mui/material";

import {
  CardContainer,
  PriceContainer,
  StatusContainer,
  Info,
  Details,
} from "./InvoiceCard.styles";

const InvoiceCard = () => {
  return (
    <CardContainer>
      <PriceContainer>
        <AttachMoneyIcon />
        <h3>137.00</h3>
      </PriceContainer>
      <StatusContainer>
        Amount
        <div>Approved</div>
      </StatusContainer>
      <Info>
        <Avatar />
        <Details>
          <h4>Erin Gonzales</h4>
          <div>
            <span style={{ display: "inline-block", color: "#9399a3" }}>
              #5331
            </span>
            <p>Date: 25 May</p>
          </div>
        </Details>
      </Info>
    </CardContainer>
  );
};

export default InvoiceCard;
