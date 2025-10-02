import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { Facility } from "@/data/facilities";

interface MapProps {
  facilities: Facility[];
  selectedFacility?: Facility | null;
}

const Map = ({ facilities, selectedFacility }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const markers = useRef<maplibregl.Marker[]>([]);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map with OpenStreetMap style
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {
          "osm-tiles": {
            type: "raster",
            tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            tileSize: 256,
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          },
        },
        layers: [
          {
            id: "osm-tiles",
            type: "raster",
            source: "osm-tiles",
            minzoom: 0,
            maxzoom: 19,
          },
        ],
      },
      center: [80.7718, 7.8731], // Center of Sri Lanka
      zoom: 7.5,
    });

    // Add navigation controls
    map.current.addControl(
      new maplibregl.NavigationControl({
        visualizePitch: false,
      }),
      "top-right"
    );

    // Cleanup
    return () => {
      markers.current.forEach((marker) => marker.remove());
      map.current?.remove();
    };
  }, []);

  // Update markers when facilities change
  useEffect(() => {
    if (!map.current) return;

    // Remove existing markers
    markers.current.forEach((marker) => marker.remove());
    markers.current = [];

    // Add new markers
    facilities.forEach((facility) => {
      const el = document.createElement("div");
      el.className = "custom-marker";
      el.style.width = "30px";
      el.style.height = "30px";
      el.style.borderRadius = "50%";
      el.style.cursor = "pointer";
      el.style.border = "3px solid white";
      el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.3)";
      el.style.transition = "transform 0.2s";

      // Set color based on status
      if (facility.status === "available") {
        el.style.backgroundColor = "hsl(142, 76%, 36%)";
      } else if (facility.status === "limited") {
        el.style.backgroundColor = "hsl(38, 92%, 50%)";
      } else {
        el.style.backgroundColor = "hsl(0, 84%, 60%)";
      }

      el.addEventListener("mouseenter", () => {
        el.style.transform = "scale(1.2)";
      });

      el.addEventListener("mouseleave", () => {
        el.style.transform = "scale(1)";
      });

      const popup = new maplibregl.Popup({ offset: 25 }).setHTML(
        `<div style="padding: 8px;">
          <h3 style="font-weight: bold; margin-bottom: 4px;">${
            facility.name
          }</h3>
          <p style="font-size: 12px; color: #666; margin-bottom: 4px;">${
            facility.type
          }</p>
          <p style="font-size: 12px; color: #666; margin-bottom: 4px;">${
            facility.address
          }</p>
          <p style="font-size: 12px; margin-bottom: 4px;">
            <strong>Status:</strong> 
            <span style="color: ${
              facility.status === "available"
                ? "green"
                : facility.status === "limited"
                ? "orange"
                : "red"
            }">
              ${facility.status.toUpperCase()}
            </span>
          </p>
          <p style="font-size: 12px;"><strong>Phone:</strong> ${
            facility.phone
          }</p>
        </div>`
      );

      const marker = new maplibregl.Marker({ element: el })
        .setLngLat([facility.lng, facility.lat])
        .setPopup(popup)
        .addTo(map.current!);

      markers.current.push(marker);
    });
  }, [facilities]);

  // Fly to selected facility
  useEffect(() => {
    if (!map.current || !selectedFacility) return;

    map.current.flyTo({
      center: [selectedFacility.lng, selectedFacility.lat],
      zoom: 14,
      duration: 1500,
    });

    // Find and open the popup for the selected facility
    const marker = markers.current.find((m) => {
      const lngLat = m.getLngLat();
      return (
        lngLat.lng === selectedFacility.lng &&
        lngLat.lat === selectedFacility.lat
      );
    });

    if (marker) {
      marker.togglePopup();
    }
  }, [selectedFacility]);

  return <div ref={mapContainer} className="absolute inset-0 rounded-lg" />;
};

export default Map;
