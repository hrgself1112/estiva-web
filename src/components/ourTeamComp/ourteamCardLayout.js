import { OurteamData } from "@/data/OurTeamData"
import OurTeamCard from "./OurTeamCard"


const OurteamCardLayout = () => {
  return (
    <>
    <section className="max-sm:px-1 lg:px-20 py-20 ">
        <div className="container mx-auto">
<div className="grid grid-cols-4 gap-2 max-lg:grid-cols-2 max-sm:grid-cols-2">
<OurTeamCard  items={OurteamData}/>

</div>
        </div>
    </section>

    </>
  )
}

export default OurteamCardLayout