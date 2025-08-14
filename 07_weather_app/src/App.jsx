import { useState } from "react";
import axios from "axios";
import SearchBar from "./pages/SearchBar";
import WeatherCard from "./pages/WeatherCard";
import ForecastChart from "./pages/ForecastChart";
// Video Imports
import defaultVideo from "./public/video.mp4";
import bluesky from "./public/bluesky.mp4";
import sunset from "./public/sunset.mp4";
import snowyMoon from "./public/snowy_moon.mp4";
import snowBg from "./public/snow_bg.mp4";
import rainyDay from "./public/rainy_day.mp4";
import rain from "./public/rain.mp4";
import mountains from "./public/mountains.mp4";
import leaves from "./public/leaves.mp4";
import forest from "./public/forest.mp4";
import clouds from "./public/clouds.mp4";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [forecast, setForecast] = useState(null);

  const API_KEY = "087df0ae2fc3df439300ae166460214e";
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  const fetchWeather = async (city) => {
    setLoading(true);
    setError("");
    try {
      const url = `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`;
      const response = await axios.get(url);
      setWeather(response.data);
      const { lat, lon } = response.data.coord;
      await getForecast(lat, lon);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("City not found. Please try again.");
      } else {
        setError("An error occurred. Please try again later.");
      }
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };
  // Forecast fetch function (place here)
  const getForecast = async (lat, lon) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${API_KEY}`
      );
      setForecast(res.data.daily.slice(0, 7));
    } catch (err) {
      console.error("Error fetching forecast:", err);
    }
  };
  const getBackgroundVideo = (weather) => {
    if (!weather) return defaultVideo;

    const temp = weather.main.temp;
    const condition = weather.weather[0].main.toLowerCase();

    if (condition.includes("rain") || condition.includes("drizzle") || condition.includes("thunderstorm")) {
      return rain;
    }

    if (condition.includes("cloud")) {
      return clouds;
    }

    if (temp >= 30) {
      return sunset;
    }else if (temp>=20 && temp<=30){
      return bluesky;
    }
     else if (temp <= 10) {
      return snowBg;
    }else if (temp<=-1){
      return snowBg
    }
     else {
      return forest;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        key={getBackgroundVideo(weather)} // ensures video updates when weather changes
      >
        <source src={getBackgroundVideo(weather)} type="video/mp4" />
        Your browser does not support the video tag
      </video>

      {/* Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50  z-0"></div>

      {/* Content */}
      <div className="bg-black/50 text-white rounded-lg shadow-lg p-8 max-w-md w-full z-10 relative">
        <h1 className="text-3xl font-bold text-center mb-6">Weather App</h1>
        <SearchBar fetchWeather={fetchWeather} />
        {loading && <p className="text-center mt-4">Loading...</p>}
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        {weather && <WeatherCard weather={weather} />}
        {forecast && <ForecastChart forecast={forecast} />}
        

      </div>
    </div>
  );
}

export default App;
