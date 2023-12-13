import PropTypes from 'prop-types';


/**
 * 全域錯誤提示彈窗
 *
 * @param {*} isShow - 判斷是否顯示彈窗
 * @param {*} message - 彈窗文字內容
 * @param {*} closeModalEvt - 按下彈窗的關閉鈕會觸發的事件
 * @return {*} 
 */
const GlobalErrorModal = ({isShow = false, message = '', closeModalEvt}) => {
  return (
    <div 
      className={[
        'fixed z-[10] right-[1rem] bottom-[0] max-w-[20rem] bg-Danger-100 p-3 rounded-[0.5rem] duration-500',
        isShow? '-translate-y-[1rem]' : 'translate-y-[100%]'
      ].join(' ')}>
      <div className="flex items-center">
        <span className="flex material-symbols-outlined text-Danger-500 pr-3 font-black">
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

export default GlobalErrorModal;

GlobalErrorModal.propTypes = {
  isShow: PropTypes.bool,
  message: PropTypes.string,
  closeModalEvt: PropTypes.func
}