import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function LocationMap() {
    const { t } = useTranslation();
    const [userLocation, setUserLocation] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                },
                (error) => {
                    console.error("Geolocation error:", error);
                }
            );
        }
    }, []);

    const mosqueLocation = {
        lat: 33.4419,
        lng: 36.3038
    };

    const generateMapSrc = () => {
        const apiKey = "AIzaSyDUMMYKEY"; // استبدل هذا بمفتاحك الفعلي من Google Maps API
        let src = `https://www.google.com/maps/embed/v1/directions?key=${apiKey}&origin=`;
        src += userLocation
            ? `${userLocation.lat},${userLocation.lng}`
            : "current+location";
        src += `&destination=${mosqueLocation.lat},${mosqueLocation.lng}&zoom=14`;
        return src;
    };

    return (
        <div className="container text-center">
            <h2 className="mb-4">{t('mosque_location')}</h2>
            <p>{t('map_tracking_info')}</p>
            <div className="ratio ratio-16x9 shadow rounded mb-4">
                <iframe
                    title="Mosque Map"
                    src={generateMapSrc()}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
}

export default LocationMap;
