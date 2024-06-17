import Image from 'next/image';



export const SeperateAcordian = ({data_opener}) => {
  
  return (
    <> 
    <div className="accordian my-3 pb-6">
    <div className="accordian_head" data-opener={`${data_opener}`}  >
      <div className="accordian_toggler"></div>
      <div className="accordian_title flex items-center">
      <span className='relative h-8 w-8 mr-3'><Image className='object-contain' fill src="/acordian-logo.png" alt="logo" /></span>
      <span className="font-semibold text-xl ">Healthcare</span>
      </div>
    </div>
    <div className="accordian_body">
      <p className="accordian_description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
        porro facere saepe, repellat accusamus ea quia aperiam vitae fuga
      </p>
    </div>
  </div>
</>
  )
}

