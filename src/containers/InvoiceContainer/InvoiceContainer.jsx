import React from "react";

import InvoiceCard from "../../components/InvoiceCard/InvoiceCard.component";
import { Container } from "./InvoiceContainer.styles";

const InvoiceContainer = () => {
  return (
    <Container>
      <InvoiceCard />
      <InvoiceCard />
      <InvoiceCard />
    </Container>
  );
};

export default InvoiceContainer;
