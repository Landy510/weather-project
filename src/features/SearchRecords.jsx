import { useState } from 'react';
import PropTypes from 'prop-types';


/**
 * 呈現最多 5 筆的最近搜尋紀錄
 *
 * @param {*} recentRecords - 搜尋紀錄
 * @param {*} onItemClick - 點擊單筆紀錄項目會觸發的事件
 * @return {*} 
 */
const SearchRecords = ({recentRecords, onItemClick}) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="absolute right-[0.5rem] -top-[3.5rem] z-[10]">
      <a 
        className="material-symbols-outlined text-[2rem] text-right block cursor-pointer"
        onClick={() => setIsShow(prev => !prev)}
        title='history'
      >
        history_toggle_off
      </a>
      <div className={['mt-2 bg-white shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-[0.5rem]', isShow ? 'block' : 'hidden'].join(' ')}>
        <p className='text-center py-2'>Recent {recentRecords.length} Records</p>
        <ul className='border-[1px] rounded-[0.5rem] border-solid border-Black-500 max-w-[15rem]'>
          {
            recentRecords.map((city, index) => {
              return (
                <li 
                  key={index}
                  className='px-3 py-3 cursor-pointer hover:bg-Black-500 hover:text-White'
                  onClick={() => {
                    onItemClick(city);
                    setIsShow(false)
                  }}
                >{city.cityName}</li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default SearchRecords;

SearchRecords.propTypes = {
  recentRecords: PropTypes.array,
  onItemClick: PropTypes.func
}