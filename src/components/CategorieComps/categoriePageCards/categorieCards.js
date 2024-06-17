import Image from "next/image";

export const ProductCards = ({ items }) => {
    return (
      <>
        {items.map((items, i) => {
          let { title, dec } = items;
          return (
            <>
              <div
                className="flex items-center  "
                style={{ padding: "7px 21px", border: "1px dashed white" }}
              >
                <div key={i} className="w-1/6 mr-3">
                  <Image
                    src="/icon-product-strategy.png"
                    alt=""
                    height={60}
                    width={60}
                  />
                </div>
                <div className="w-4/6">
                  <h4 className="capitalize">{title}</h4>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };