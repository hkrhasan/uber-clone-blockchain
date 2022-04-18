import { useEffect, useContext } from "react"
import mapboxGl from "mapbox-gl"
import { UberContext } from "../context/uberContext"

const style = {
    wrapper: `h-full w-full`,
}

mapboxGl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN



const Map = () => {
  const { pickupCoordinates, dropoffCoordinates } = useContext(UberContext)

    useEffect(() => {
        const map = new mapboxGl.Map({
            container: "map",
            style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
            center: [
                77.2596337,
                28.6756862 
              ],
            zoom: 10,
        })

        if (pickupCoordinates) addToMap(map, pickupCoordinates) 
        if (dropoffCoordinates) addToMap(map, dropoffCoordinates)

        if (pickupCoordinates && dropoffCoordinates) {
            map.fitBounds([dropoffCoordinates, pickupCoordinates], {
                padding: 400,
            })
        }


    },[pickupCoordinates, dropoffCoordinates])

    const addToMap = (map, coordinates) => {
      const marker1 = new mapboxGl.Marker().setLngLat(coordinates).addTo(map)
    }

  return (
    <div className={style.wrapper} id="map" />
  )
}

export default Map



