const Init = {
    data: [],
    randomCard: {},
    randomCardIndex: 0
  }
  
  const CardReducer = (state = Init, action) => {
    console.log('action:;;;', state, action)
    const randomCardIndex = Math.floor(Math.random() * state.data.length)
    const editedData = state.data
  
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
      case 'EDIT_CARD':
        console.log('1randomCardIndex', state.randomCardIndex)
        console.log('2randomCard', state.randomCard)
        console.log('3action.payload', action.payload)
        editedData[state.randomCardIndex] = { ...state.randomCard, ...action.payload }
        console.log('4editedData', editedData[state.randomCardIndex])
        return {
          ...state,
          randomCard: { ...state.randomCard, ...action.payload },
          data: editedData
        }
      default :
        return state
    }
  }
  
  export default CardReducer