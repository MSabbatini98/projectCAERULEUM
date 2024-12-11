'use client'
import { Loader } from "@googlemaps/js-api-loader";
import React, {useEffect} from "react";


export default function GoogleMaps () {
    const mapRef = React.useRef<HTMLDivElement>(null);

    useEffect (() => {

        const initMap = async () => {

            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                version: "weekly"
            });

            const { Map } = await loader.importLibrary('maps');
            
            const position = {
                lat: 44.4949,
                lng: 11.3426
            }

            //map options
            const mapOptions: google.maps.MapOptions = {
                center: position,
                zoom : 14,
                mapId: 'FIND_ME_MAPS'
            }

            //setup the map
            const map = new Map(mapRef.current as HTMLDivElement, mapOptions);


        }

        initMap();
    }, []);

    return (

        <div className="map"  
            ref={mapRef} 
            style={{height: '350px', width:'100%'}}>
            </div>
    )
}