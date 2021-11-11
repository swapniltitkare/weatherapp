import React, { useEffect, useState } from 'react';
import '../Weatherapp.css';

const WeatherApp = () => {


    const [city, setCity] = useState(null);
    const [search, setSearch] = useState(null);
    // const [country, setCountry] = useState(null);

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=46c26c14aeb567380fad3e9cec002150`;
            const response = await fetch(url);
            const resJson = await response.json();
            // setCountry(resJson.sys);
            setCity(resJson.main);
        }
        fetchApi();
    }, [search])


    return (
        <>
            <div className='main_div'>
                <input className='input_field'
                    onChange={(e) => { setSearch(e.target.value) }}
                    type='search'
                    value={search}
                    placeholder='Search City'
                    autoComplete='off' />

                {(!city ) ? (
                    <p className='Nodata'> No City Found </p>
                ) : (
                    <div>
                        <p className='cityName'>{` ${search} `}</p>

                        <div className='info'>
                            <p>Temperature <span> {city.temp}°C </span> </p>
                            <p>Min-Temp  <span> {city.temp_min}°C </span></p>
                            <p>Max-Temp <span> {city.temp_max}°C </span> </p>
                            <p>Pressure <span> {city.pressure}mb </span> </p>
                            <p>Humidity <span> {city.humidity}% </span> </p>

                        </div>
                    </div>
                )
                }

            </div>

        </>
    )

}

export default WeatherApp;