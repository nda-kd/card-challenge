const Init = {
  data: [],
  randomCard: {},
  randomCardIndex: 0
}

const CardReducer = (state = Init, action) => {
  console.log('action:;;;', state, action)
  const randomCardIndex = Math.floor(Math.random() * state.data.length)

  switch (action.type) {
    case 'GET_DATA' :
      return {
        ...state,
        data: action.payload,
        randomCard: action.payload[state.randomCardIndex]
      }
    case 'NEXT_TRY':
      return {
        ...state,
        randomCard: state.data[randomCardIndex],
        randomCardIndex: randomCardIndex
      }

    default :
      return state
  }
}

export default CardReducer
