import Head from "next/head";
import { Fragment } from "react";
import CommonHeadLayout from "./CommonHeadLayout";

const PaymentInfoHeadLayout = (props) => {
  return (
    <Fragment>
      <CommonHeadLayout />
      <Head>
        <title>
          The MES College College Alumni Association&reg; | Thanks for
          registering!
        </title>
        <meta name="description" content="Your registration is successful!" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Thanks for registering!" />
        <meta
          property="og:description"
          content="You have successfully registered. Your membership details will be emailed to you."
        />
        <meta
          property="og:url"
          content={`https://mesalumniassociation.com/paymentinfo/${props.alumniInformation.id}`}
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
                "url": https://mesalumniassociation.com/paymentinfo/${props.alumniInformation.id},
                "description": "Started in 1956, MES College of Arts, Commerce and Science has been a cradle of talent and continues to see an ever-growing list of successful alumni. The Alumni Association aims to connect these various generations of alumni to participate in the development of the institution and society in general.",
                "name": "The MES College Alumni Association",
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

export default PaymentInfoHeadLayout;
