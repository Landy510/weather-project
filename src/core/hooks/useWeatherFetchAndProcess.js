import { useContext } from "react";
import { globalLoadingContext } from "../context/GlobalLoadingContext";
import { getCurrentWeather, getForecastWeather } from "../services/weather";

const useWeatherFetchAndProcess = (setCurrentWeatherInfo, setForecastInfo) => {
  const {setIsLoading} = useContext(globalLoadingContext);

  const fetchWeatherInfo = async (city) => {
    setIsLoading(true);
    try {
      const [currentWeatherInfo, forecastInfo] = await Promise.all([getCurrentWeather(city.lat, city.lon), getForecastWeather(city.lat, city.lon)]);
      let tempForecastInfo = {}
      forecastInfo.list.map(info => {
        const day = new Date(info.dt*1000).getDay();
        if(new Date(info.dt*1000).getDate() !== new Date().getDate()) { // 只需要呈現未來五日的資訊，所以，當日的資料不塞入
          if(!tempForecastInfo[day]) tempForecastInfo[day] = [] 
          tempForecastInfo[day].push(info)
        }
      })

      setCurrentWeatherInfo(currentWeatherInfo)
      setForecastInfo(tempForecastInfo);
      setIsLoading(false);
    }
    catch(err) {
      setIsLoading(false);
    }
  }

  return {
    fetchWeatherInfo
  }
}

export default useWeatherFetchAndProcess;