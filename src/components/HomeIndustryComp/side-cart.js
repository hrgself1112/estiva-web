import React from 'react';
import { data } from './data';

// eslint-disable-next-line react/display-name
const Sidecart = React.forwardRef(({ activeButton , ...props  }, ref) => {
  return (
<>
      <div className='flex flex-col max-sm:w-full '>
        {data.map((items, index) => (
          <button
            id={items.id}
            {...props}
            key={index}
            className={` border-notblacck py-8  bg-[#eefaff] ${activeButton(items.id)}`}
            ref={ref} // Attach the ref from props to the button
          >
            {items.title}
          </button>
        ))}
      </div>
    </>
  );
});

export default Sidecart;