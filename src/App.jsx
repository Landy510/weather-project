import { useState } from 'react';
import { globalLoadingContext } from './core/context/GlobalLoadingContext';
import { weatherContext } from './core/context/WeatherContext';
import SearchArea from './components/searchArea/SearchArea';
import CurrentWeather from './components/currentWeather/CurrentWeather';
import DailyWeather from './components/dailyWeather/DailyWeather';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentWeatherInfo, setCurrentWeatherInfo] = useState(null);
  const [forecastInfo, setForecastInfo] = useState([]);

  return (
    <div className='max-w-[1024px] px-3 pt-3 mx-auto'>
      <globalLoadingContext.Provider value={{isLoading, setIsLoading}}>
        <weatherContext.Provider value={{setCurrentWeatherInfo, setForecastInfo}}>
          <SearchArea />
        </weatherContext.Provider>
      </globalLoadingContext.Provider>

      {/* 當正在執行天氣資訊 api 的資料索取時，有關呈現天氣資訊的區域會加這一個效果 */}
      <div className={isLoading ? 'opacity-40' : 'opacity-100'}> 
        {/* 當天氣資訊 api 索取完成後，讓天氣整體區塊透過 'loaded' 動畫的轉換，來提醒使用者新的天氣資訊已經更新 */}
        <div className={isLoading ? '' : 'loaded'}>
          <CurrentWeather />
          <div className='mt-4'>
            <h3 className='text-4xl mb-3'>Daily</h3>
            {/* <ul>
              <DailyWeather />
              <DailyWeather />
              <DailyWeather />
              <DailyWeather />
            </ul> */}
            {
              Object.entries(forecastInfo).map(([keyVal, val]) => {
                return (
                  // <div key={keyVal}>
                  //   <p>{keyVal}</p>
                  //   <div className='flex justify-between'>
                  //     {
                  //       val.map(individualInfo => {
                  //         return (
                  //             <div 
                  //               key={individualInfo.dt}
                  //               className='mb-3'
                  //             >
                  //               <time>{new Date(individualInfo.dt*1000).getHours()}</time>
                  //               <p className='text-[0.75rem]'>{individualInfo.weather[0].description}</p>
                  //               <p className='text-[0.75rem]'>
                  //                 {Math.ceil(individualInfo.main.temp_max)}°C / {Math.floor(individualInfo.main.temp_min)}°C
                  //               </p>
                  //               <img 
                  //                 src={`https://openweathermap.org/img/wn/${individualInfo.weather[0].icon}@2x.png`} 
                  //                 alt="" 
                  //               /> 
                  //             </div>
                  //         )
                  //       })
                  //     }
                  //   </div>
                  // </div>
                  <DailyWeather 
                    key={keyVal}
                    date={keyVal}
                    val={val}
                  /> 
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
