import Navbar from "../components/Navbar"
import Map from "../components/Map"
import LocationSelector from "../components/LocationSelector"
import Confirm from "../components/Confirm"


const style = {
  wrapper: `h-screen w-screen flex flex-col`,
  main: `h-full overflow-hidden`,
  riderRequestContainer: `h-full w-[400px] absolute ml-[1rem] left-0 top-0 z-20 flex flex-col justify-end py-5`,
  rideRequest: `max-h-[600px] bg-white rounded-lg flex flex-col`,
}

export default function Home() {
  return (
    <div className={style.wrapper}>
      {/* navbar */}
      <Navbar />
      <div className={style.main}>
        {/* Map */}
        <Map />
      </div>
      <div className={style.riderRequestContainer}>
        <div className={style.rideRequest}>
          {/* location selector */}
          <LocationSelector />
          {/* confirm ride */}
          <Confirm />
        </div>
      </div>
    </div>
  )
}
