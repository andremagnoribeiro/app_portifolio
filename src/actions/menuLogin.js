import  {actionsTypes}  from '../constants/counter'

const actions = {
  setmenu1: (va) => ({
    type: actionsTypes.COUNTER_DECREMENT,
    payload:  va
  }),
  setmenu2: (va)=>({
    type: actionsTypes.COUNTER_INCREMENT,
    payload:  va
  })
}

export { actions }