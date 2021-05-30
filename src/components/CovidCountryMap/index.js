import { useState } from 'react';
import { useSelector } from 'react-redux';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

import { config } from '../../config';
import { abbrNum } from '../../helper/_commonHelper';

const CovidCountryMap = () => {
    const [infoWindowInstance, setInfoWindowInstance] = useState(null);
    const [mapInstance, setMapInstance] = useState(null);
    const { selectedCountry } = useSelector((state) => state.countries);
    const { dataByCountry } = useSelector((state) => state.covid);
    const preparedDataByCountry = (selectedCountry?.code && dataByCountry[selectedCountry?.code]) ? { 'searched': dataByCountry[selectedCountry.code] } : dataByCountry;

    const containerStyle = {
        width: '100%',
        height: '400px'
    };

    const center = {
        lat: preparedDataByCountry?.searched?.countryInfo?.lat || 20,
        lng: preparedDataByCountry?.searched?.countryInfo?.long || 77
    };

    const openInfoBoxHandler = (e, { countryInfo, todayCases, active, recovered, todayRecovered, deaths, todayDeaths }) => {
        try {
            infoWindowInstance.setOptions({
                content: `<div class="d-flex flex-column">
                <span>Today Cases Added - ${abbrNum(todayCases, 2)}</span>
                <span>Total Active Cases - ${abbrNum(active, 2)}</span>
                <span>Today Recovered - ${abbrNum(todayRecovered, 2)}</span>
                <span>Total Recovered - ${abbrNum(recovered, 2)}</span>
                <span>Today Deaths - ${abbrNum(todayDeaths, 2)}</span>
                <span>Total Deaths - ${abbrNum(deaths, 2)}</span>
                </div>`,
                position: {
                    lat: e.latLng.lat(),
                    lng: e.latLng.lng()
                },
            });
            infoWindowInstance.open(mapInstance);
        } catch (error) {
            console.log(error);
        }
    }

    if (Object.values(preparedDataByCountry).length > 0) {
        return (
            <LoadScript
                googleMapsApiKey={config.googleMapApiKey}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={3}
                    onLoad={(map) => { setMapInstance(map); }}
                >
                    <InfoWindow
                        position={center}
                        onLoad={(e) => { setInfoWindowInstance(e); e.close(); }}
                    >
                        <div>loading...</div>
                    </InfoWindow>
                    {
                        Object.values(preparedDataByCountry).length > 0 && Object.values(preparedDataByCountry).map(({ countryInfo, todayCases, active, recovered, todayRecovered, deaths, todayDeaths }) => {
                            if (countryInfo?.lat && countryInfo?.long) {
                                return (
                                    <Marker
                                        position={{
                                            lat: countryInfo.lat,
                                            lng: countryInfo.long
                                        }}
                                        animation={'DROP'}
                                        visible={true}
                                        onClick={(e) => { openInfoBoxHandler(e, { countryInfo, todayCases, active, recovered, todayRecovered, deaths, todayDeaths }); }}
                                        key={countryInfo._id}
                                    />
                                )
                            }
                            return null;
                        })
                    }
                </GoogleMap>
            </LoadScript>
        )
    } else
        return (<h3>loading...</h3>)
};

export default CovidCountryMap;