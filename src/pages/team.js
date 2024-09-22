import Breadcrumb from "@/components/common/Breadcrumb";
import Home3Team from "@/components/Team/Home3Team";
import Layout from "@/components/layout/Layout";
import React from "react";

function Team() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Nossa Equipe"
        title="Conheça nossa Equipe"
        pageName="NOSSA EQUIPE"
      />
      <Home3Team showTitle={false} />
    </Layout>
  );
}

export default Team;
