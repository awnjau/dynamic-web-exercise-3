'use-client';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import{
    faBolt,
    faCloud,
    faUmbrella,
    faSnowflake,
    faSun
} from "@fortawesome/free-solid-svg-icons";

const WeatherIcon = ({weatherType}) =>  {
    switch (weatherType) {
        case "Clouds":
            return <FontAwesomeIcon icon={faCloud}/>
        case "Drizzle":
        case "Rain":
            return <FontAwesomeIcon icon={faUmbrella}/>
        case "Clear":
            return  <FontAwesomeIcon icon={faSun}/>
        case "Thunderstorm":
            return  <FontAwesomeIcon icon={faBolt}/>
        case "Snow":
            return  <FontAwesomeIcon icon={faSnowflake}/>
        default:
            return <FontAwesomeIcon icon={faCloud}/>
            
    }
    
};

export default WeatherIcon;