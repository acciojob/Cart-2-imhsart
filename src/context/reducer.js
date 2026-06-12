function cartReducer(state, action){
  let newCart

  switch(action.type){
    case 'INCREASE': {
      let arr = []
      for(let i of state.cart){
        if(i.id === action.payload){
          arr.push({...i,quantity: i.quantity+1})
        }else{
          arr.push(i)
        }
      }
      newCart = arr
      break
    }

    case 'DECREASE': {
      let brr = []
      for(let i of state.cart){
        if(i.id === action.payload){
          if(i.quantity > 1){
            brr.push({...i,quantity: i.quantity-1})
          }else{
            brr.push(i)
          }
        }else{
          brr.push(i)
        }
      }
      newCart = brr
      break
    }

    case 'REMOVE_ITEM':
      newCart = state.cart.filter(val => val.id !== action.payload)
      break

    case 'CLEAR_CART':
      newCart = []
      break

    default:
      return state
  }

  return {
    ...state,
    cart: newCart,
    log: [...state.log, `${action.type}(${action.payload}) -> ${JSON.stringify(newCart)}`]
  }
}

export default cartReducer