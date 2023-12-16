import { loadingReducer } from "./loadingReducer"
const combineReducer = (reducers) => {
  const reducerKeys = Object.keys(reducers)
  let objInitState = {}

  // --- initialize | START ---
  reducerKeys.forEach(key => {
    const defaultState = reducers[key](undefined, {type: ''})
    if(defaultState === undefined) {
      throw new Error(`${key} should return default state.`)
    }

    objInitState[key] = defaultState
  })
  // --- END ---

  // --- update |  START ---
  return (state, action) => {
    if(action) {
      const [reducerName, actionType] = action.type.split('/'); // 傳入值的格式 e.g. globalLoading/OPEN 要先取得要改哪一個 reducer 的內容
      reducerKeys.forEach(key => {
        if(reducerName === key) {
          action.type = actionType; // 將要執行的動作存入 action.type 中
          const previousState = objInitState[key]
          objInitState[key] = reducers[key](previousState, action)
        }
      })
    }
    return {...objInitState}
  }
  // --- END ---
}

const reducers = combineReducer({
  globalLoading: loadingReducer
})

export {reducers}