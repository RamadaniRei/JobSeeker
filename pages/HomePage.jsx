import React from "react";
import Hero from "../src/components/hero";
import HomeCards from "../src/components/HomeCards";

import JobListings from "../src/components/JobListings";
import ViewAllJobs from "../src/components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
