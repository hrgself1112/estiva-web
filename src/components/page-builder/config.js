import Image from "next/image";

export const config = {

  components: {


 


    Heading: {
      fields: {
        title: { type: "text" },
        textAlign: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        FontSize: {
          type: "select",
          options: [
            { label: "12px", value: "12" },
            { label: "16px", value: "16" },
            { label: "20px", value: "20" },
            { label: "24px", value: "24" },
            { label: "28px", value: "28" },
            { label: "32px", value: "32" },
            { label: "36px", value: "36" },
          ],
        },
        HeadingType: {
          type: "select",
          options: [
            { label: "h1", value: "1" },
            { label: "h2", value: "2" },
            { label: "h3", value: "3" },
            { label: "h4", value: "4" },
            { label: "h5", value: "5" },
            { label: "h6", value: "6" },
          ],
        },
      },
      defaultProps: {
        textAlign: "left",
        FontSize: "20",
        HeadingType: "1",
      },
      render: ({ title, textAlign, FontSize, HeadingType }) => {
        const HeadingTag = `h${HeadingType}`;
        return (
          <HeadingTag className={`text-${textAlign} text-${FontSize} `} >
            {title}
          </HeadingTag>
        );
      },
    },
    Typography: {
      fields: {
        title: { type: "textarea" },
        textAlign: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        FontSize: {
          type: "select",
          options: [
            { label: "12px", value: "12" },
            { label: "16px", value: "16" },
            { label: "20px", value: "20" },
            { label: "24px", value: "24" },
            { label: "28px", value: "28" },
            { label: "32px", value: "32" },
            { label: "36px", value: "36" },
          ],
        },

      },
      defaultProps: {
        textAlign: "left",
        FontSize: "20",
      },
      render: ({ title, textAlign, FontSize, HeadingType }) => {
        const HeadingTag = `p`;
        return (
          <HeadingTag className={`text-${textAlign}`} style={{ fontSize: `${FontSize}px` }}>
            {title}
          </HeadingTag>
        );
      },
    },

    Image: {
      fields: {
        url: { type: "textarea" },
        alt: { type: "textarea" }
      },

      render: ({ url, alt }) => {

        return (
          <div className="relative h-[540px] w-auto">
            <Image alt={alt} fill src={url} />
          </div>
        );
      },
    },

    ListItems: {
      fields: {
        items: {
          type: "array",
          arrayFields: {
            title: { type: "text" },
          },
        },
      },
      render: ({ items }) => {
        return (
          <ul>
            {items?.map((item, i) => (
              <li key={i}>{item.title}</li>
            ))}
          </ul>
        );
      },
    }, 

    LineSpace: {
      fields: {
        height: {
          type: "select",
          options: [
            { label: "12px", value: "12" },
            { label: "16px", value: "16" },
            { label: "20px", value: "20" },
            { label: "24px", value: "24" },
            { label: "28px", value: "28" },
            { label: "32px", value: "32" },
            { label: "36px", value: "36" },
          ],
        },
      },
      defaultProps: {
        height: "16",
      },
      render: ({ height }) => {
        return (
          <div style={{ height: `${height}px` }}>

          </div>
        );
      },
    }, 

 

    

  },

  root: {
    fields: {
      Url: { type: "text" },
      Title: { type: "text" },
      Description: { type: "text" },
      Keywords: { type: "text" },
      Image: { type: "text" },
      Alt: { type: "text" },
      Tags: { type: "text" }
    },

  }
}


 