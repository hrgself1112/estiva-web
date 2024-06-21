import HorizontalCard from '@/components/blogs-components/horizontal-card'
import Layout from '@/components/headerMAin/layout'
import { Editor } from '@/components/page-builder/page-builder'
import React from 'react'
import CategoriePages from "@/components/CategorieComps/categoriePages";


 
  export async function fetchDataofArticlemetadata() {
    try {
      const res = await fetch(`http://localhost:4000/api/blogs/get-metadata` , { next: { revalidate: 3600 } }); 
      return res.json();
    } catch (error) { 
      console.log(error)
      return error;
    }
  }
  

  

  const CategorieData = [
    {
      heading:
        "Engineer Your Brand Growth with Real Software Development Solutions.",
      subheading:
        "A Digitally-Rooted Software Expert fueled on Talent, Agility & Unconventional Ideas",
      para: "Scale up your software solutions, and find the right tailored solutions from industry experts. We combine a modernized engineering approach and industry-specific knowledge to custom solutions for potential startups and graded businesses.",
    },
  ];

  
const  page = async  () => {

  const data = await fetchDataofArticlemetadata()
 
  
    return (
        <> 

 <Layout isHomePage footerone={false}>
 

 <CategoriePages items={CategorieData} />

 <div className="grid m-4  gap-6 grid-cols-4">
    
 {data?.articles.map((article, index) => (
<HorizontalCard 
image={article.data.root.props.Image}
url={article.data.root.props.Url}
alt={article.data.root.props.Alt}
heading={article.data.root.props.Title}
description={article.data.root.props.Description}

/> 


))}


</div>



 </Layout>

 
        </>
    )
}

export default page