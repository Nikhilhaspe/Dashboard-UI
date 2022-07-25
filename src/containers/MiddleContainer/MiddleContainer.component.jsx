import React from "react";

import ProgresscardCotainer from "../ProgresscardContainer/ProgresscardCotainer";
import { Container } from "./MiddleContainer.styles";

const MiddleContainer = () => {
  return (
    <Container>
      <h2>Welcome back, Andrew!</h2>
      <p>Have a look at the Quick Progress Bar.</p>
      <ProgresscardCotainer />
    </Container>
  );
};

export default MiddleContainer;
