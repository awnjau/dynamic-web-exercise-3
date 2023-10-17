'use-client';

import styles from "./WeatherCard.module.css"; 
import WeatherIcon from "./WeatherIcon";

const WeatherCard = ({cityName, weatherType, currentTemperature, highTemperature, lowTemperature, cloudinessLevel, humidityLevel, windspeedLevel}) => (
    <div className={styles.WeatherCardWrapper}>
        <div className={styles.WeatherCardImg}>
            <WeatherIcon weatherType={weatherType}/>
        </div>
        <div className={styles.WeatherCardInner}>
        <h2>{cityName}</h2>

        <p>Weather Type:{weatherType}</p>
        <p>Current Temperature:{currentTemperature}</p>
        <p>High Temperature:{highTemperature}</p>
        <p>Low Temperature:{lowTemperature}</p>
        <p>Cloudiness:{cloudinessLevel}</p>
        <p>Humidity:{humidityLevel}</p>
        <p>Wind Speed:{windspeedLevel}</p>
        </div>

    </div>
)

export default WeatherCard 