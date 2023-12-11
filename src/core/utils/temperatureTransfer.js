
/**
 * 將回傳的字串加上相對應的溫度符號
 * @param {*} val - 要被轉換的數值
 * @param {*} unit - 'metric' | 'imperial' - 攝氏 / 華氏
 * @param {*} type - 'min' | 'normal' | 'max' - 決定要用何種 Math 的進位方式
 * @return {*} 最終轉換的字串結果 - (e.g. 20 °C)
 */
const temperatureTransfer = (val, unit, type) => {
  let result = '';
  switch(type) {
    case 'min':
      result += Math.floor(val)
      break;

    case 'normal':
      result += Math.round(val)
      break;

    case 'max':
      result += Math.ceil(val)
      break;
  }

  if(unit === 'imperial') result += '°F'
  else result += '°C'

  return result;
}

export default temperatureTransfer;