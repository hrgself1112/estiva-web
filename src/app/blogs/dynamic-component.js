import React from 'react';
import Image from  "next/image"
import { parseContent } from '@/components/content-parser/parser';



const Heading = ({ title, textAlign, FontSize, HeadingType }) => {
  const HeadingTag = `h${HeadingType}`;
  return (
    <HeadingTag className={`text-${textAlign} text-${FontSize}`}>
      {title}
    </HeadingTag>
  );
};

const ImageComponent = ({ url, alt }) => {
  return (
    <div className="relative h-[540px] w-auto">
              <Image alt={alt} fill src={url}/>
            </div>
  )
};

const Typography = ({ title, textAlign, FontSize }) => {
  console.log(title)
  return (
    <p className={`text-${textAlign} text-${FontSize}`}>
      {parseContent(title)}
    </p>
  );
};
 



const ListItems = ({ items }) => {
  return (
    <ul>
      {items?.map((item, index) => (
        <li key={index}>{item.title}</li>  
      ))}
    </ul>
  );
};

const LineSpace = ({ height }) => {
  return (
    <div style={{ height: `${height}px` }}></div> // Spacer div with dynamic height
  );
};

const DynamicComponent = ({ component }) => {
  switch (component.type) {
    case 'Heading':
      return <Heading {...component.props} />;
    case 'Image':
      return <ImageComponent {...component.props} />;
    case 'Typography':
      return <Typography {...component.props} />;
    case 'ListItems': // Assuming 'ListItems' component based on your configuration
      return <ListItems {...component.props} />;
    case 'LineSpace': // New case for handling LineSpace component
      return <LineSpace {...component.props} />;
    default:
      return null; // Handle unknown components gracefully
  }
};

export default DynamicComponent;
