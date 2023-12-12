import PropTypes from 'prop-types';


/**
 * 呈現搜尋城市列表的下拉選單
 *
 * @param {*} isAccordionShow - 下拉選單是否為開啟狀態的旗標
 * @param {*} onMenuClick, - <ul /> 元素被點擊時，會觸發的相對應事件 
 * @param {*} onItemClick, - <li /> 元素被點擊時，會觸發的相對應事件
 * @param {*} cityList - 城市列表的搜尋結果
 * @return {*} 
 */
const Accordion = ({
  isAccordionShow,
  onMenuClick,
  onItemClick,
  cityList
}) => {

  return (
    <ul 
      className={[
        'absolute left-[0] right-[0] z-[2] mx-3 shadow-[0_0_8px_rgba(0,0,0,0.3)] rounded-[0.5rem] max-h-[14rem] overflow-y-auto bg-[#fff] duration-500',
        isAccordionShow ? 'translate-y-2' : '-translate-y-[250%]'
      ].join(' ')}
      onClick={onMenuClick}
    >
      {
        cityList.length === 0 ?
          <li className="p-3 cursor-pointer hover:bg-slate-50">
            <p>No Related Result</p>
          </li>
          :
          cityList.map((city, index) => {
            return (
              <li 
                key={index}
                className="p-3 cursor-pointer hover:bg-slate-50"
                onClick={() => onItemClick(city)}
              >
                  {city.cityName}
              </li>
            )
          })
      }
    </ul>
  )
}

export default Accordion;

Accordion.propTypes = {
  isAccordionShow: PropTypes.bool,
  cityList: PropTypes.array,
  onMenuClick: PropTypes.func,
  onItemClick: PropTypes.func
}