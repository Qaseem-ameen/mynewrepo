import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function MapLocation() {
    const { t } = useTranslation();
    const [userLocation, setUserLocation] = useState(null);

    const mosqueLocation = { lat: 33.4569, lng: 36.3034 }; // حجيرة، ريف دمشق

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setUserLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            });
        }
    }, []);

    const createMapUrl = () => {
        const base = "https://www.google.com/maps/dir/?api=1";
        const origin = userLocation ? `&origin=${userLocation.lat},${userLocation.lng}` : "";
        const destination = `&destination=${mosqueLocation.lat},${mosqueLocation.lng}`;
        return base + origin + destination;
    };

    return (
        <div className="container text-center">
            <h2 className="mb-4">{t('mosque_location')}</h2>
            <div className="mb-3">
                <iframe
                    title="Masjid Location"
                    src={`https://maps.google.com/maps?q=${mosqueLocation.lat},${mosqueLocation.lng}&z=15&output=embed`}
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <a
                href={createMapUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
            >
                {t('navigate_to_mosque')}
            </a>
        </div>
    );
}

export default MapLocation;
