import { Signika } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import FooterUppernew from "@/components/footer_estiva/footerUppernew";
import FooterMain from "@/components/footer_estiva/footerMain";
import FooterBottom from "@/components/footer_estiva/footer";
import { ServiceSlider } from "@/components/SliderServices/sliderservices";
import Head from "next/head";
import FormMian from "@/components/form/formStructure";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Signika({ subsets: ["latin"] });
const schema = {
  "@context": "http://www.schema.org",
  "@type": "Organization",
  name: "EstivaSoftech",
  description:
    "Estivasoftech stands as a leading global digital marketing, software development, and design firm, offering innovative IT solutions to enterprises on a worldwide scale. With a foundation built on proven technological expertise and a keen awareness of emerging business trends, Estivasoftech provides a diverse range of software development solutions. These encompass e-business solutions, enterprise applications, professional website design and development, product engineering, Electronic Health Records, CMS Softwares, Payment Gateway solutions, Time and attendance tracking software, Appointment Reminder Solutions, Medical Transcription Services, and more. Our comprehensive approach involves studying, designing, developing, enhancing, customizing, implementing, maintaining, and supporting various facets of information technology, ensuring our clients receive tailored and effective solutions.",
  url: "https://www.estivasoftech.com/",
  logo: "/icons/estivasoftech-logo.png",
  image: "/icons/estivasoftech.png",

  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+919990140888",
      email: "mailto:sales@estivasoftech.com",
    },
  ],
  sameAs: [
    "https://www.facebook.com/estivasoftech.india/",
    "https://twitter.com/estivasoftech",
    "https://www.instagram.com/estivasoftech_india/",
    "https://www.linkedin.com/company/estivasoftech/",
    "https://in.pinterest.com/estivasoftech/",
  ],

  address: {
    "@type": "PostalAddress",
    streetAddress: "A-1233 Gd Colony Mayur Vihar Phase 3",
    addressLocality: "Mayur Vihar Phase 3",
    addressRegion: "Delhi",
    postalCode: "110096",
    addressCountry: "India",
  },
  hasMap: "https://g.page/estivasoftech",
  openingHours: "Mo, Tu, We, Th, Fr, Sa, 09:00-20:00",
  contactPoint: { "@type": "ContactPoint", telephone: "+91 9990140888" },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "28.612556",
    longitude: "77.336103",
  },
};

// export const metadata = {
//   manifest: "/manifest.json",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* <meta name="theme-color" content="#317EFB" /> */}
        <meta name="msvalidate.01" content="D7FF84333D7BE7EF70EA01EFBB714822" />
        <meta
          name="google-site-verification"
          content="e5hm7P2PvsQvVJFkOTL34micKky5bvn0-JqhNq0D39o"
        />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="author" content="Estivasoftech" />
        <meta name="publisher" content="Estivasoftech" />
        <meta
          content=" A - 1233, G. D. COLONY MAYUR VIHAR PHASE -3, DELHI 110096, INDIA"
          name="geography"
          id="geography"
        />
        <meta content="Index,Follow" name="YahooSeeker" />
        <meta content="en" name="language" id="language" />
        <meta content="28.6119759; 77.335521" name="ICBM" />
        <meta content="@estivasoftech" name="twitter:creator" />
        <meta content="never" id="expires" https-equiv="expires" />
        <meta content="general" name="rating" />
        <meta content="public" id="cache-control" https-equiv="cache-control" />
        <meta content="public" name="document-type" id="document-type" />
        <meta content="@estivasoftech" name="twitter:site" />
        <meta content="estivasoftech.com" name="DC.source" />
        <meta
          content="Copyright 2012 Estivasoftech"
          name="Copyright"
          id="Copyright"
        />
        <meta content="1 day" name="Revisit-After" id="Revisit-After" />
        <meta content="True" name="HandheldFriendly" />
        <meta content="Estivasoftech, Delh-110096, INDIA" name="DC.title" />
        <meta
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          name="robots"
        />
        <meta content="Global" name="distribution" id="distribution" />
        <meta content="summary" name="twitter:card" />
        <meta content="INDEX,FOLLOW" name="robots" id="robots" />
        <meta content="New Delhi, Delhi" name="city" id="city" />
        <meta content="India" name="country" id="country" />
        <meta content="All, Business" name="audience" id="audience" />
        <meta content="index, follow" name="googlebot" id="googlebot" />
        <meta content="general" name="rating" id="rating" />
        <meta content="no-cache" name="Pragma" id="Pragma" />

        <script
          type="application/ld+json"
          key="structured-data"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <body className={inter.className}>
        <NextTopLoader />
        {children}
        <FormMian />
        <FooterUppernew />
        <ServiceSlider />

        <FooterMain />

        <FooterBottom />
      </body>
      <GoogleTagManager gtmId="GTM-W3QZ559" />
    </html>
  );
}
