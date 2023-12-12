import { useState, useContext } from 'react';
import {GlobalLoadingContext} from './components/globalContextBoundary/GlobalContextBoundary';

import SearchArea from './components/searchArea/SearchArea';
import CurrentWeather from './components/currentWeather/CurrentWeather';
import DailyWeather from './components/dailyWeather/DailyWeather';
import GlobalLoading from './components/GlobalLoading';

function App() {
  const [currentWeatherInfo, setCurrentWeatherInfo] = useState(null);
  const [forecastInfo, setForecastInfo] = useState(new Map());
  const {isGlobalLoading} = useContext(GlobalLoadingContext);

  return (
    <>
      <GlobalLoading isShow={isGlobalLoading} />

      <div className='max-w-[1024px] px-3 pb-2 mx-auto'>
        <h1 className='text-center text-[3rem] relative z-[3] bg-Grey'>
          <span className='font-thin'>Weather  </span> 
          <span className='font-Inter'>Forecast</span>
        </h1>

        <SearchArea 
          setCurrentWeatherInfo={setCurrentWeatherInfo}
          setForecastInfo={setForecastInfo}
        />

        <div className={isGlobalLoading ? '' : 'loaded'}>
            {
              !currentWeatherInfo && [...forecastInfo.keys()].length === 0 ?
              <p className='text-[3rem] font-thin text-center mt-10'>- No Related Weather Info -</p>
              :
              <>
                <CurrentWeather data={currentWeatherInfo} />
                <div className='mt-4'>
                  <h3 className='text-4xl mb-3 font-Inter'>Forecast</h3>
                  {
                    [...forecastInfo.entries()].map(([key, val]) => {
                      return (
                        <DailyWeather 
                          key={key}
                          day={key}
                          val={val}
                        />
                      )
                    })
                  }
                </div>
              </>
            }
          </div>
        </div>
    </>
    
  )
}

export default App
