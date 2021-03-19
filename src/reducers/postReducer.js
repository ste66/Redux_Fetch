
// Shows What to do
const initialState = {
 items: [],
 item: {}
}
const postReducer = (state= initialState, action)=> {
 switch (action.type) {
     case 'FETCH_POSTS': //fetch posts array data from api
         return {
             items: action.payload
         }
     default: 
        return state;
 }
}

export default postReducer;