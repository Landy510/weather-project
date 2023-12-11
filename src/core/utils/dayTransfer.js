const WEEK_DAYS = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday'
}

/**
 * 回傳相對應的星期文字
 *
 * @param {*} day - 0 | 1 | 2 | 3 | 4 | 5 | 6
 * @return {*} 
 */
const dayTransfer = (day) => {
  return WEEK_DAYS[day];
}

export default dayTransfer;