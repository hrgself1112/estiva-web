

import Head from "next/head"; 
import React from 'react'

import { schema } from "@/shared/website-schema";

const Headcontent = () => {
  return (
    <> 

<Head>
        <meta name="theme-color" content="#317EFB" />
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
    
    
    </>
  )
}

export default Headcontent