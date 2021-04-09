import React from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";

import Layout from "../components/Layout/Layout";
import Portfolio from "../components/Portfolio/Portfolio";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/projects/");
  const { data } = await res.json();
  return {
    props: {
      projects: data,
    },
  };
};

const Projects = ({ projects }) => {
  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
      </Head>
      {/* <div>
        <div>Tic-Tac-Toe</div>
        <div>To-Do</div>
        <div>BomberMan</div>
        <div>Game card</div>
      </div> */}
      <Portfolio projects={projects} />
    </Layout>
  );
};

export default Projects;