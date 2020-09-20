const Init = {
  data: [],
  randomCardIndex: ''
}

const CardReducer = (state = Init, action) => {
  console.log('action:;;;', state, action)

  switch (action.type) {
    case 'GET_DATA' :
      return {
        ...state,
        data: action.payload
      }
    default :
      return state
  }
}

export default CardReducer
