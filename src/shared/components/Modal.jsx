import PropTypes from 'prop-types';

const bgColorList = {
  Danger: 'bg-Danger-100',
  Warning: 'bg-Warning-100'
}
/**
 * 回傳相對應背景顏色
 *
 * @param {*} type - 彈窗類型
 * @return {*} 
 */
const bgColor = type => {
  if(bgColorList[type]) return bgColorList[type]
  return bgColorList['Danger']
}

const iconColorList = {
  Danger: 'text-Danger-500',
  Warning: 'text-Warning-500'
}
/**
 * 回傳相對應 icon 顏色
 *
 * @param {*} type - 彈窗類型
 * @return {*} 
 */
const iconColor = type => {
  if(iconColorList[type]) return iconColorList[type]
  return iconColorList['Danger']
}


/**
 * 全域提示彈窗
 *
 * @param {*} isShow - 判斷是否顯示彈窗
 * @param {*} message - 彈窗文字內容
 * @param {*} type - 彈窗類型
 * @param {*} closeModalEvt - 按下彈窗的關閉鈕會觸發的事件
 * @return {*} 
 */
const Modal = ({
  isShow = false, 
  message = '',
  type = 'Danger',
  closeModalEvt
}) => {
  return (
    <div 
      className={[
        'fixed z-[10] right-[1rem] bottom-[0] max-w-[20rem] p-3 rounded-[0.5rem] duration-500',
        bgColor(type),
        isShow? '-translate-y-[1rem]' : 'translate-y-[100%]'
      ].join(' ')}>
      <div className="flex items-center">
        <span className={[
          'flex material-symbols-outlined pr-3 font-black',
          iconColor(type)
        ].join(' ')}>
          error
        </span>
        <p>{message}</p>
      </div>
      
      <button 
        type="button"
        className="py-1 px-4 border-[1px] border-solid border-Black-default rounded-[0.5rem] mt-1 ml-auto block"
        onClick={closeModalEvt}
      >Ok</button>
    </div>
  )
}

export default Modal;

Modal.propTypes = {
  isShow: PropTypes.bool,
  message: PropTypes.string,
  type: PropTypes.oneOf(['Danger', 'Warning']),
  closeModalEvt: PropTypes.func
}