const initalState={
   login:{}
}

const reducer=(state=initalState, action)=>{
  switch(action.type){
      case 'LOGIN':   return{...state,login:action.values}
      default:  return state;
  }
  
   
}

export default reducer;