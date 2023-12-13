import { useState, createContext } from "react";
import PropTypes from 'prop-types';

export const GlobalLoadingContext = createContext(null); // 管理切換全域 loading 旗標的 Context
export const GlobalErrorModalContext = createContext(null); // 管理全域錯誤彈窗的 Context

/**
 * 用來管理專案裡會用到的全域 Context 的元件
 *
 * @param {*} {children} - 映射內容
 * @return {*} 
 */
const GlobalContextBoundary = ({children}) => {
  const [isGlobalLoading, setIsGlobalLoading] = useState(false);
  const [globalErrorModalInfo, setGlobalErrorModalInfo] = useState({show: false, message: ''})
  
  return (
    <GlobalLoadingContext.Provider value={{isGlobalLoading, setIsGlobalLoading}}>
      <GlobalErrorModalContext.Provider value={{globalErrorModalInfo, setGlobalErrorModalInfo}}>
        {children}
      </GlobalErrorModalContext.Provider>
    </GlobalLoadingContext.Provider>
  )
}

export default GlobalContextBoundary;

GlobalContextBoundary.propTypes = {
  children: PropTypes.element
}