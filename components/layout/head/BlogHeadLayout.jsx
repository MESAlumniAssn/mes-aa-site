import Head from "next/head";
import { Fragment } from "react";
import CommonHeadLayout from "./CommonHeadLayout";

const BlogHeadLayout = (props) => {
  return (
    <Fragment>
      <CommonHeadLayout />
      <Head>
        <title>The MES College Alumni Association&reg; | Blog</title>
        <meta
          name="description"
          content="A growing collection of articles submitted by our talented alumni."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="The MES Alumni Association | Blog" />
        <meta
          property="og:description"
          content="A growing collection of articles submitted by our talented alumni."
        />
        <meta
          property="og:url"
          content="https://mesalumniassociation.com/blog"
        />
        <meta property="og:site_name" content="mesalumniassociation.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `[
              {
 	              "@context": "https://schema.org",
                "@type": "EducationalOrganization",
                "name": "MES College of Arts, Commerce and Science",
                "address": {
     	                  "@type": "PostalAddress",
                        "streetAddress": "Vidyasagara Prof. M.P.L Sastry Road, 15th Cross, 10th Main, Malleshwaram",
                        "addressRegion": "Bengaluru, KA",
                        "postalCode": "560003",
		                    "addressCountry": "IN",
                        "email": "mesalumniassn@gmail.com",
                        "telephone": "08023562536"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "datePublished": "10-06-2021",
                "dateModified": "10-06-2021",
                "url": "https://mesalumniassociation.com/blog",
                "description": "Contact the Alumni Association or follow us on social media.,
                "inLanguage": "en",
                "isPartOf": "https://mesalumniassociation.com",
                "potentialAction": {
                  "@type": "ReadAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://mesalumniassociation.com"
                  }
                }
              }
            ]`,
          }}
        />
      </Head>
      {props.children}
    </Fragment>
  );
};

export default BlogHeadLayout;
