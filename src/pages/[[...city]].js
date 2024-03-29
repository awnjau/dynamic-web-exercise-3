import "../app/globals.css";
import WeatherCard from "@/app/components/WeatherCard";
import Header from "../app/Components/Header";

export async function getStaticProps({ params }) {
    const city = (params && params.city) || "Boston";
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=imperial`
    );

    const weatherData = await res.json();

    return{
        props:{
            weatherData,
        },
    };
}
export const getStaticPaths = async () => {
    return {
        paths:[],
        fallback:true,
    }
}


export default function Home ({weatherData}){
    console.log(weatherData);
    if(!weatherData) return null;
    return (
        <>
        <Header/>
        <main>
            <h1>Aisha's Weather App :)</h1>
            <WeatherCard 
            cityName={weatherData.name}
            weatherType={weatherData.weather[0].main}
            currentTemperature={weatherData.main.temp}
            highTemperature={weatherData.main.temp_max}
            lowTemperature={weatherData.main.temp_min}
            cloudinessLevel={weatherData.clouds.all}
            humidityLevel={weatherData.main.humidity}
            windspeedLevel={weatherData.wind.speed}
           />
        </main>
        </>
    );

}