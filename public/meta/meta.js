import Script from "next/script"
const Data = {
    "@context": "http://www.schema.org", "@type": "Organization", "name": "EstivaSoftech", "url": "https://www.estivasoftech.com/", "logo": "https://www.estivasoftech.com/bg/og-image.png", "image":"https://www.estivasoftech.com/bg/og-image.png", "sameAs": [ "https://www.facebook.com/estivasoftech.india/",  "https://twitter.com/estivasoftech", "https://www.instagram.com/estivasoftech_india/", "https://www.linkedin.com/company/estivasoftech/", "https://in.pinterest.com/estivasoftech/"], "description": "Estivasoftech is an India-based software development & Digital marketing company. We're providing services best digital marketing, Software & web development worldwide.", "address":{"@type": "PostalAddress", "streetAddress": "A-1233 Gd Colony Mayur Vihar Phase 3", "addressLocality": "Delhi", "addressRegion": "Delhi", "postalCode": "110096", "addressCountry": "India"}, "hasMap": "https://g.page/estivasoftech", "openingHours": "Mo, Tu, We, Th, Fr, Sa, 09:00-20:00", "contactPoint":{"@type": "ContactPoint", "telephone": "+91 9990140888"}, "geo":{"@type": "GeoCoordinates", "latitude": "28.612556", "longitude": "77.336103"
  }
  };
const Meta = () => {
  return (
   <>
    <Script id="AfterInteractive"
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(Data) }}
      />


     <Script id="AfterInteractive"  strategy="afterInteractive" dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
{/* })(window,document,'script','dataLayer','GTM-W3QZ559');`}}/>



   </>
  )
}

export default Meta