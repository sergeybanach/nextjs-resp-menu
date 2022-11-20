import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import { Wrapper, Status } from "@googlemaps/react-wrapper";



const render = status => <h1>{status}</h1>
const Map = () => {}

export default function Home() {
  const [menu, setMenu] = useState(false)
  const ref = useRef(null);
  const [map, setMap] = useState();
  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);
  return (
    <div>


      <div className={menu ? "topnav" : "topnav responsive"} id="myTopnav">
        <a href="#home" className="active">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="#" className="icon" onClick={() => {
          setMenu(!menu)
        }}>
          <i className="fa fa-bars"></i>
        </a>
      </div>

      <Wrapper apiKey='AIzaSyA_lr357Ri3CoCIP28GGlCSHaaCnyxM2mY' render={render}>

      </Wrapper>
    </div>



  )
}
