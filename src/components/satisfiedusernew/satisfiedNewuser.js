import styles from "./satisfied.module.css";

const SatisfiedNewuser = ({ items }) => {
  let { number, mainBox, dec } = styles;

  return (
    <>
      <section className=" lg:px-20 overflow-x-hidden lg:py-5 md:p-12 p-10 max-sm:p-4 bg-slate-900">
        <div className="container mx-auto">
          <div className=" grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-xl:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-2">
            {items.map((items, i) => {
              let { count, para } = items;
              return (
                <>
                  <div key={i} className={`${mainBox} `}>
                    <div>
                      <span className={`${number} text-[5rem] max-sm:text-[2rem] `}>{count}</span>
                    </div>
                    <strong className={dec}>{para}</strong>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default SatisfiedNewuser;
