import "./App.css";
import { useEffect, useState } from "react";
import { getCoordinates } from "./services/getCoordinates";
import { getCurrentWeather } from "./services/getCurrentWeather";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import Button from "./components/Button/Button";





function App() {
  
  const [weather, setWeather] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);


  const handleTempChange = () => {
    setIsCelsius(!isCelsius);
  };

  useEffect(() => {
    const loadWeather = async () => {
      const coordinates = await getCoordinates();
      if (coordinates) {
        const weatherData = await getCurrentWeather(
          coordinates.latitude,
          coordinates.longitude
        );
        setWeather(weatherData);
      }
    };
    loadWeather();
  }, []);

  return (
    <div className="main_container">
      <div className="first_container">
        {weather ? (
          <div className="weather_info__container">
            
            <WeatherInfo weather={weather} isCelsius={isCelsius} />
            <Button onClick={handleTempChange} isCelsius={isCelsius} />

          </div>
        ) : (
          <p className="spinner"></p>

        )}
        
      </div>
    </div>
  );
}

export default App;