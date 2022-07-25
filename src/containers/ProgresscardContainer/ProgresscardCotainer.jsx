import React from "react";

import ProgressCard from "../../components/ProgressCard/ProgressCard.component";
import { Container } from "./ProgresscardCotainer.styles";

const ProgresscardCotainer = () => {
  const cardsData = [
    {
      topLeft: {
        icon: "PodcastsIcon",
        text: "Live Projects",
      },
      topRight: "View All",
      footer: {
        count: "56",
        text: "Currently, the projects are in progress",
      },
      background: "#6590ff",
    },
    {
      topLeft: {
        icon: "HourglassBottomIcon",
        text: "In Progress",
      },
      footer: {
        count: "124",
        text: "Projects in progress",
      },
      background: "#65caff",
    },
    {
      topLeft: {
        icon: "AssignmentTurnedInIcon",
        text: "Completed",
      },
      footer: {
        count: "24",
        text: "Completed projects",
      },
      background: "#ad65ff",
    },
  ];

  return (
    <Container>
      {cardsData.map((card) => {
        return <ProgressCard data={card} />;
      })}
    </Container>
  );
};

export default ProgresscardCotainer;
