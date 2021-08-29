import React from "react";
import { createClient } from "contentful";

// Component imports
import BlogHeadLayout from "../../components/layout/head/BlogHeadLayout";
import BlogHeader from "../../components/utils/blog/BlogHeader";
import Footer from "../../components/layout/Footer";

const blog = ({ blogs }) => {
  return (
    <BlogHeadLayout>
      <BlogHeader blogs={blogs} />
      <Footer />
    </BlogHeadLayout>
  );
};

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "blog" });

  return {
    props: {
      blogs: res.items,
    },
    revalidate: 1,
  };
};

export default blog;
