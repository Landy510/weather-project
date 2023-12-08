import { useRef, useState } from "react";
import { getCities } from "@/core/services/cities";

const SearchBar = () => {
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
        const result = await response.json();
        console.log(result);
      }
      catch(err) {
        console.error(err);
      }
    }, 1000)
    // --- END ---
  }

  return (
    <form 
      onSubmit={null}
      className="flex items-center border-black border-[1px] border-solid rounded-[2rem] pl-3 pr-2"
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