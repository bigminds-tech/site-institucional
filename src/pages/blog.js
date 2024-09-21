import BlogBanner from "@/components/blog/BlogBanner";
import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import React from "react";
import Home3Blog from "../components/blog/Home3Blog";
function BlogPgage() {
  return (
    <Layout>
      <Breadcrumb pageList="Blog" title="Inovações em Foco" pageName="BLOG" />
      <BlogBanner />
      <Home3Blog />
    </Layout>
  );
}

export default BlogPgage;
