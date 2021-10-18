import Head from "next/head";
import { Fragment } from "react";
import CommonHeadLayout from "./CommonHeadLayout";

const GalleryHeadLayout = (props) => {
  return (
    <Fragment>
      <CommonHeadLayout />
      <Head>
        <title>
          The MES College Alumni Association&reg; | A Trip Down Memory Lane
        </title>
        <meta
          name="description"
          content="Take a trip down memory lane and feel the nostalgia flood in as you scroll through hand-picked images of MES College taken over the years."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="The MES Alumni Association | A Trip Down Memory Lane"
        />
        <meta
          property="og:description"
          content="Take a trip down memory lane and feel the nostalgia flood in as you scroll through hand-picked images of MES College taken over the years."
        />
        <meta
          property="og:url"
          content="https://mesalumniassociation.com/gallery"
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
                        "telephone": "+91 9480797323"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "datePublished": "10-06-2021",
                "dateModified": "10-06-2021",
                "url": "https://mesalumniassociation.com/gallery",
                "description": "Take a trip down memory lane and feel the nostalgia flood in as you scroll through hand-picked images of MES College taken over the years",
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

export default GalleryHeadLayout;
