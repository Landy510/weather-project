
/**
 * 轉換時間至指定格式
 *
 * @param {*} hour - 要被轉換的時間，若傳入的數值為 2 則會回傳 02:00
 * @return {*} 
 */
const formatTime = (hour) => {
  const formattedHour = ('0' + hour).slice(-2);
  return formattedHour + ':00';
}
export default formatTime;