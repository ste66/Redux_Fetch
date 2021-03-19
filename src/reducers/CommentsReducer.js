

// Shows What to do
const initialState = {
         lists: [],
         name: " "

}

const CommentsReducer= (state= initialState,action)=>{
 switch(action.type){
  case "FETCH_COMMENT":
   return {
      ...state,
             lists: action.payload
   }
 
   case "GET_NAME":
      return {
         ...state,
         name: action.payload
      }
         default:
         return state;
 }
}

export default CommentsReducer;