import React from "react";

import { createClient } from "contentful";

// Component imports
import BlogHeadLayout from "../../components/layout/head/BlogHeadLayout";
import BlogDetails from "../../components/utils/blog/BlogDetails";
import Footer from "../../components/layout/Footer";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const blogpost = ({ blog }) => {
  return (
    <BlogHeadLayout>
      <BlogDetails blog={blog} />
      <Footer />
    </BlogHeadLayout>
  );
};

export const getStaticPaths = async () => {
  const res = client.getEntries({
    content_type: "blog",
  });

  const paths = (await res).items.map((item) => {
    return {
      params: {
        slug: item.fields.slug,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "blog",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/blog",
        permanent: false,
      },
    };
  }

  return {
    props: {
      blog: items[0],
    },
    revalidate: 1,
  };
};

export default blogpost;
