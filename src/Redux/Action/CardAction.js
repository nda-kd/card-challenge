export const getData = data => ({
    type: 'GET_DATA',
    payload: data
  })
  
  export const nextTry = card => ({
    type: 'NEXT_TRY',
    payload: card
  })
  
  export const editCard = cardChangs => ({
    type: 'EDIT_CARD',
    payload: cardChangs
  })
  