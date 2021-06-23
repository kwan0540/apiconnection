import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
require ('dotenv').config()

const containerStyle = {
  width: '400px',
  height: '400px'
};

console.log(process.env)
const apikey = process.env.REACT_APP_API_KEY
console.log(apikey)


function Map(props) {
  const remaining = (props.data[0])
  const remainingSecond = Math.floor(remaining/1000)
  console.log(remainingSecond)
  //const remaining = props.Time.getTime()
  //let remaining = Math.floor((props.data[0].BusEta.getTime() - props.Time.getTime())/1000)
  //console.log(remaining)
  let busMarker
  const startingPoint = {lat: 22.453130, lng: 114.003812}
  const endPoint = {lat: 22.452213, lng: 114.002155}
  const differenceLat = (startingPoint.lat-endPoint.lat)/14
  const [location,setLocation] = useState(startingPoint)
  const [center, setCenter] = useState({})
  const [zoom, setZoom] = useState()
  const [run, setRun] = useState(false)
  const [valid, setValid] = useState(null)

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apikey
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setCenter({lat: 22.452259, lng: 114.002123})
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setZoom(17)
    }, 250);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    
    const timer = setInterval(() => {
      setLocation((prevState) => {
          return {...prevState, lat: prevState.lat-differenceLat, 
            lng: (startingPoint.lng*(endPoint.lat-(prevState.lat-differenceLat))+endPoint.lng*((prevState.lat-differenceLat)-startingPoint.lat))/(endPoint.lat-startingPoint.lat) }
      })
    }, 1000)
    setValid(timer)
    console.log('initiate')
    return () => clearInterval(timer)
  }, [props.value]);

  console.log(props.value)

  useEffect(() => {
      clearInterval(valid)
      setLocation(startingPoint)
      console.log('clear')
  },[props.value])

  if (location.lat < endPoint.lat) {
      clearInterval(valid)

  }

  


  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={endPoint} />
        <Marker position={location} visible={remainingSecond < 500 && remainingSecond>0 && true || false} label={props.value}/>
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)