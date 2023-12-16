import { useState, useContext } from 'react';
import { ReducerContext } from './features/GlobalContextBoundary';

import GlobalLoading from './shared/components/GlobalLoading';
import Modal from './shared/components/Modal';

import SearchArea from './features/SearchArea';
import DailyWeather from './features/DailyWeather';
import CurrentWeather from './features/CurrentWeather';

function App() {
  const [currentWeatherInfo, setCurrentWeatherInfo] = useState(null);
  const [forecastInfo, setForecastInfo] = useState(new Map());
  const [state, dispatch] = useContext(ReducerContext)
  return (
    <>
      <GlobalLoading isShow={state.globalLoading} />
      <Modal 
        isShow={state.globalModalInfo.isShow}
        message={state.globalModalInfo.message}
        type={state.globalModalInfo.modalType}
        closeModalEvt={state.globalModalInfo.closeModalEvt}
      />
      
      <div className='max-w-[1024px] px-3 pb-2 mx-auto'>
        <h1 className='text-center text-[3rem] relative z-[3] bg-Grey'>
          <span className='font-thin'>Weather  </span> 
          <span className='font-Inter'>Forecast</span>
        </h1>

        <SearchArea 
          setCurrentWeatherInfo={setCurrentWeatherInfo}
          setForecastInfo={setForecastInfo}
        />

        <div 
          className={state.globalLoading ? '' : 'loaded'}
        >
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
