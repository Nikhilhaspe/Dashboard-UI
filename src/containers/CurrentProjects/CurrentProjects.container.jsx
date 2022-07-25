import React from "react";
import Carousel from "react-elastic-carousel";

import ProjectCard from "../../components/ProjectCard/ProjectCard.component";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const CurrentProjects = () => {
  return (
    <Carousel breakPoints={breakPoints}>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </Carousel>
  );
};

export default CurrentProjects;
