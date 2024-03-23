'use client'

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import '../styles/route.css'
import { APIProvider, Map } from '@vis.gl/react-google-maps'

const latDefault = 21.0677385
const lngDefault = 105.8114404

const VIET_NAM_BOUNDS = {
  north: 26.625282609530778,
  south: 7.403234941112085,
  west: 91.39500174206523,
  east: 119.49802908581523
}

const defaultProps = {
  center: { lat: 21.0278, lng: 105.8342 },
  restriction: {
    latLngBounds: VIET_NAM_BOUNDS,
    strictBounds: false
  },
  zoom: 13
}

const RouterMngtTemplate = () => {
  return (
    <APIProvider apiKey='AIzaSyBEYKsBNZdwFNwobQFD8XNtN-DKSk70LA0'>
      <Map
        zoom={defaultProps.zoom}
        center={defaultProps.center}
        zoomControl={true}
        clickableIcons={false}
      ></Map>
    </APIProvider>
  )
}

export default RouterMngtTemplate
