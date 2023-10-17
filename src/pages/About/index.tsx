import { AboutMe } from "@/components/AboutMe";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";

const About = () => {
  return (
    <>
      <Head>
        <title>Stanko Tomic | About</title>
      </Head>
      <Layout>
        <div className="max-w-[1200px] mx-auto">
          <AboutMe />
        </div>
      </Layout>
    </>
  );
};

export default About;
