import Head from "next/head";
import { Fragment } from "react";
import CommonHeadLayout from "./CommonHeadLayout";

const HomeHeadLayout = (props) => {
  return (
    <Fragment>
      <CommonHeadLayout />
      <Head>
        <title>The MES College College Alumni Association&reg;</title>
        <meta
          name="description"
          content="Started in 1956, MES College of Arts, Commerce and Science has been a cradle of talent and continues to see an ever-growing list of successful alumni. The Alumni Association aims to connect these various generations of alumni to participate in the development of the institution and society in general."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="The MES College Alumni Association&reg;"
        />
        <meta
          property="og:description"
          content="Started in 1956, MES College of Arts, Commerce and Science has been a cradle of talent and continues to see an ever-growing list of successful alumni. The Alumni Association aims to connect these various generations of alumni to participate in the development of the institution and society in general."
        />
        <meta property="og:url" content="https://mesalumniassociation.com/" />
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
              }
            ]`,
          }}
        />
      </Head>
      {props.children}
    </Fragment>
  );
};

export default HomeHeadLayout;
