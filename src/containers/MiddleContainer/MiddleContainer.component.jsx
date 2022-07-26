import React from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import ProgresscardCotainer from "../ProgresscardContainer/ProgresscardCotainer";
import CurrentProjects from "../CurrentProjects/CurrentProjects.container";
import InvoiceContainer from "../InvoiceContainer/InvoiceContainer";
import { Container, Header, IconsDiv } from "./MiddleContainer.styles";

const MiddleContainer = () => {
  return (
    <Container>
      <Header>
        <h2>Welcome back, Andrew!</h2>
        <p>Have a look at the Quick Progress Bar.</p>
      </Header>
      <ProgresscardCotainer />
      <Header>
        <h2>Current Projects</h2>
        <p>Projects that are currently in progress</p>
        <IconsDiv>
          <div className="first">
            <span>Filter</span>
            <FilterAltIcon style={{ fontSize: "25px" }} />
          </div>
          <div className="second">
            <MoreVertIcon style={{ fontSize: "25px" }} />
          </div>
        </IconsDiv>
      </Header>
      <CurrentProjects />
      <Header>
        <h2>Pending Invoice</h2>
        <p>Invoices that are currently pending</p>
      </Header>
      <InvoiceContainer />
    </Container>
  );
};

export default MiddleContainer;
