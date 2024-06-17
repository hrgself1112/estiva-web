// metaTags.js

export function generateMetaTags(data) {
  return data.map((item) => {
    let { titles, description, canonical, imagepath } = item;
    return (
      <>
        <title>{titles}</title>
        <meta name="description" content={description} />
        <meta id="subject" name="subject" content={titles} />
        <link rel="canonical" href={canonical} />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta property="og:url" content={canonical} />

        <meta property="og:title" content={titles} />
        <meta property="og:description" content={description} />

        <meta name="twitter:title" content={titles} />

        <meta name="twitter:description" content={description} />
        <meta
          property="og:image"
          content={`https://www.estivasoftech.com${imagepath}`}
        />
        <meta
          name="twitter:image"
          content={`https://www.estivasoftech.com${imagepath}`}
        />
        <meta name="DC.title" content={titles} />
        <meta name="Page-Topic" content={titles} />
      </>
    );
  });
}
