import { AboutMe } from "@/components/AboutMe";
import Layout from "@/components/Layout";
import React from "react";

const About = () => {
  return (
    <Layout>
      <div className="max-w-[1200px] mx-auto">
        <h1></h1>

        <AboutMe />
      </div>
    </Layout>
  );
};

export default About;
