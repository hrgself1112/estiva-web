import HorizontalCard from '@/components/blogs-components/horizontal-card'
import Layout from '@/components/headerMAin/layout'
import React from 'react'
import { Dummydata } from "../data"
import DynamicComponent from '../dynamic-component';
import CategoriePages from "@/components/CategorieComps/categoriePages";
import Link from 'next/link';
import Image from 'next/image';

export async function fetchDataofArticle(url) {
  try {
    const res = await fetch(`http://localhost:4000/api/blogs/getArticlebyurl/${url}`, { next: { revalidate: 3600 } });
    return res.json();
  } catch (error) {
    console.log(error)
    return error;
  }
}
export async function fetchDataofArticlemetadata(limit) {
  try {
    const res = await fetch(`http://localhost:4000/api/blogs/get-metadata?limit=${limit}`, { next: { revalidate: 3600 } });
    return res.json();
  } catch (error) {
    console.log(error)
    return error;
  }
}



const page = async ({ params }) => {

  const Blogdata = await fetchDataofArticle(params.blogs)
  const articles = await fetchDataofArticlemetadata(12)

  const { root, content } = Blogdata[0]?.data
 

   const schemaData= [{
    heading:root.props.Title,
    subheading:root.props.Title,
    para:root.props.Description,
   }]


   
   console.log(schemaData)

  return (
    <>



      <Layout footerone={false}>

        <CategoriePages items={schemaData} />

        <div className="mx-12 my-12">

          <div className="flex gap-4">
            <div style={{ flex: 9 }}>
              {content?.map((component, index) => (
                <DynamicComponent key={index} component={component} />
              ))}
            </div>
            <div className='h-[50rem] overflow-y-scroll top-[5rem] sticky ' style={{ flex: 4 }}>
              <KnowledgeBox />
            </div>
          </div>



          <div className="grid my-10 grid-cols-4 gap-10">

            {articles?.articles.map((article, index) => (
              <HorizontalCard
                image={article.data.root.props.Image}
                url={article.data.root.props.Url}
                alt={article.data.root.props.Alt}
                heading={article.data.root.props.Title}
                description={article.data.root.props.Description}

              />


            ))}
          </div>


        </div>

      </Layout>


    </>
  )
}

export default page


const KnowledgeBox = async () => {

  const data = await fetchDataofArticlemetadata()


  // const { root, content } = data[0]?.data

  console.log(data)

  return (
    <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md">
      <h2 className="text-purple-600 font-semibold mb-4">Recommedation</h2>
      <div className="space-y-4">
        {data?.articles.map((article, index) => (
          <Link className="" href={`/blogs/${article.data.root.props.Url}`}>
            <div
              key={article._id}
              className="flex items-center my-3 justify-between p-4 bg-zinc-100 dark:bg-zinc-700 rounded-lg">
              <div>
                <h3 className="text-zinc-900 dark:text-white font-semibold">{article.data.root.props.Title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                  {article.data.root.props.Tags ? article.data.root.props.Tags : "Development"} • {getDate(article.updatedAt)}
                </p>
              </div>
              <Image height={56} width={56} src={article.data.root.props.Image ? article.data.root.props.Image : "/icons/estivasoftech-logo.png"} alt={article.data.root.props.Alt} className="w-14 h-14 rounded-lg" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}




function getDate(str) {
  // Parse the date string
  const date = new Date(str);

  // Format the date
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  return formattedDate
}