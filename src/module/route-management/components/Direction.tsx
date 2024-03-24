import { useMap, useMapsLibrary } from '@vis.gl/react-google-maps'
import { useEffect, useState } from 'react'

const Direction = () => {
  const map = useMap()
  const routesLibrary = useMapsLibrary('routes')
  const [directionsService, setDirectionsService] =
    useState<google.maps.DirectionsService>()
  const [directionsRenderer, setDirectionsRenderer] =
    useState<google.maps.DirectionsRenderer>()
  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([])

  useEffect(() => {
    if (!map || !routesLibrary) return

    setDirectionsService(new routesLibrary.DirectionsService())
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }))
  }, [routesLibrary, map])

  useEffect(() => {
    if (!directionsService || !directionsRenderer) return

    directionsService.route(
      {
        origin:
          'GoldFruit Trái Cây, 2P5Q+34V, Unnamed Road, Tây Mỗ, Từ Liêm, Hà Nội, Vietnam',
        destination: 'Số 102 Phố Yên Bình, Hà Đông, Hà Nội, Vietnam',
        travelMode: google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result)
          setRoutes(result?.routes || [])
        }
      }
    )
  }, [directionsService, directionsRenderer])

  return null
}

export default Direction
