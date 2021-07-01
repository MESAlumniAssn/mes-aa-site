import Head from "next/head";
import { Fragment } from "react";
import CommonHeadLayout from "./CommonHeadLayout";

const FamousAlumniHeadLayout = (props) => {
  return (
    <Fragment>
      <CommonHeadLayout />
      <Head>
        <title>
          The MES College Alumni Association&reg; | The MES ALumni Who's Who
        </title>
        <meta
          name="description"
          content="MES College has a rich history of alumni who have emerged as stalwarts in their chosen vocations. This page is a compilation of an ever-growing list."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="The MES Alumni Association | The MES ALumni Who's Who"
        />
        <meta
          property="og:description"
          content="MES College has a rich history of alumni who have emerged as stalwarts in their chosen vocations. This page is a compilation of an ever-growing list."
        />
        <meta
          property="og:url"
          content="https://mesalumniassociation.com/famousalumni"
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
                    "url": "https://mesalumniassociation.com/famousalumni",
                    "description": "MES College has a rich history of alumni who have emerged as stalwarts in their chosen vocations. This page is a compilation of an ever-growing list.,
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

export default FamousAlumniHeadLayout;
