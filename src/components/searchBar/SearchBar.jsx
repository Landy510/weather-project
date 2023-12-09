import { useRef, useState } from "react";
import PropTypes from 'prop-types';
import { getCities } from "@/core/services/cities";

const SearchBar = ({setIsAccordionShow, setCityList}) => {
  const [value, setValue] = useState('');
  const timerId = useRef(null);


  const onChange = e => {
    const inputVal = e.target.value.trim();
    setValue(inputVal);
    if(!inputVal) return; // 沒有輸入內容就不去打 api
    if(timerId.current) clearTimeout(timerId.current);
    // --- debounce feature | START ---
    timerId.current = setTimeout(async () => {
      try {
        const response = await getCities(inputVal);
        setCityList(
          response.data.map(item => ({
            lat: item.latitude,
            lon: item.longitude,
            cityName: `${item.name}, ${item.regionCode}, ${item.countryCode}`
          }))
        )
        setIsAccordionShow(true);
      }
      catch(err) {
        console.error(err);
      }
    }, 500)
    // --- END ---
  }

  return (
    <form 
      onSubmit={null}
      className="relative z-[2] bg-[#fff] flex items-center border-black border-[1px] border-solid rounded-[2rem] pl-3 pr-2"
    >
      <input 
        className="grow"
        type="text"
        value={value}
        onChange={e => onChange(e)}
      />
      <span className="material-symbols-outlined">search</span>
    </form>
  )
}

export default SearchBar;

SearchBar.propTypes = {
  setIsAccordionShow: PropTypes.func,
  setCityList: PropTypes.func
}