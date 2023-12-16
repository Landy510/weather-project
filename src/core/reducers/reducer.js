import { loadingReducer } from "./loadingReducer"


/**
 * 統一管理共用 reducer
 *
 * @param {*} reducers - 要被管理的 reducer 們
 * @return {*}
 */
const combineReducer = (reducers) => {
  const reducerKeys = Object.keys(reducers)
  let objInitState = {}

  // --- initialize state | START ---
  reducerKeys.forEach(key => {
    const defaultState = reducers[key](undefined, {type: ''})
    if(defaultState === undefined) {
      throw new Error(`${key} should return default state.`)
    }

    objInitState[key] = defaultState
  })
  // --- END ---

  // --- update state |  START ---
  return (state, action) => {
    if(action) {
      reducerKeys.forEach(key => {
        if(action.reducerName === key) {
          const previousState = objInitState[key]
          objInitState[key] = reducers[key](previousState, action)
        }
      })
    }

    return {...objInitState} // 如果沒有傳入 action 則回傳既有儲存的 state
  }
  // --- END ---
}

const reducers = combineReducer({
  globalLoading: loadingReducer
})

export {reducers}