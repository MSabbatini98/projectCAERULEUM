'use client';

import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

export default function GoogleMaps() {
  const mapRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const initMap = async () => {
      const apiKey = process.env.NEXT_PUBLIC_MAPS_API_KEY;

      if (!apiKey) {
        console.error("Missing Google Maps API key");
        return;
      }

      if (!mapRef.current) return;

      const loader = new Loader({
        apiKey,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");

      const position = {
        lat: 44.4949,
        lng: 11.3426,
      };

      const mapOptions = {
        center: position,
        zoom: 14,
        mapId: "FIND_ME_MAPS",
      } as const;

      new Map(mapRef.current, mapOptions);
    };

    initMap();
  }, []);

  return (
    <div
      ref={mapRef}
      className="map"
      style={{ height: "350px", width: "100%" }}
    />
  );
}