const Init = {
  data: [],
  selectedCard: {
    title: '',
    description: ''
  },
  randomCardIndex: 0
}

const CardReducer = (state = Init, action) => {
  console.log('action:;;;', state, action)

  switch (action.type) {
    case 'GET_DATA' :
      return {
        ...state,
        data: action.payload,
        selectedCard: action.payload[state.randomCardIndex]
      }
    case 'NEXT_TRY':
      const randomCardIndex = Math.floor(Math.random() * state.data.length)
      return {
        ...state,
        selectedCard: state.data[randomCardIndex],
        randomCardIndex: randomCardIndex
        }
  
    default :
      return state
  }
}

export default CardReducer
