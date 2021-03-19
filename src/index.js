import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// // create a redux store
// import {createStore} from "redux"

// // 1st REDUCER**************************************************************
// // Reducer is a function (state, action) stores state and action and use switch to return a State.
// const reducerName = (state, action)=>{
// switch (action.type) {
//   case "ADD_NUMBER":
//       state = state + action.payload // answer adding 5+95 =100
//       console.log(state)
//       break;
//       case "REMOVE_NUMBER":
//         state = state - action.payload // answer adding 100-20 =80
//         console.log(state)
//         break;
//         case "MULTIPLY_BY_TWO":
//           state = state * action.payload // answer adding 80*2 =160
//           console.log(state)
//           break;
//           case "DIVIDE_BY_FOUR":
//             state = state / action.payload // answer adding 160 / 4 =40
//             console.log(state)
//             break;
//         default:
//           // what should be store

//           break;
// }
//   return state;
// } 
// // make a store for Library( FOR FIRST REDUCER)
// const store = createStore( reducerName, 5); // createStore holds (reducerName, initialValue)


// // Call an action 
// store.subscribe = () => {
//   console.log("Update data for store", store.getState());
// }

// //Action: is Object{type: value, payload:value}
// store.dispatch({
//   type: "ADD_NUMBER", // type should be a string and in Capital Letters
//   payload: 95 // data
// })

// //Action: is Object{type: value, payload:value}
// store.dispatch({
//   type: "REMOVE_NUMBER", // type should be a string and in Capital Letters
//   payload: 20 // data
// })

// //Action: is Object{type: value, payload:value}
// store.dispatch({
//   type: "MULTIPLY_BY_TWO", // type should be a string and in Capital Letters
//   payload: 2 // data
// })


// //Action: is Object{type: value, payload:value}
// store.dispatch({
//   type: "DIVIDE_BY_FOUR", // type should be a string and in Capital Letters
//   payload: 4 // data
// })
// //======2ND REDUCER====================================
// const myReducer = (state, action)=>{
//   switch (action.type) {
   
//     case "ADD_NAME":
//         state = action.payload 
//         console.log(state)
//         break;
//         case "ADD_NEW_NAME":
//           state = action.payload 
//           console.log(state)
//           break;
      
//           default:
//             // what should be store
  
//             break;
//   }
//     return state;
//   } 

// // make a store for Library( FOR SECOND REDUCER)
// const myStore = createStore( myReducer, "Stella"); // createStore holds (reducerName, initialValue)

// // Call an action 
// myStore.subscribe = () => {
//   console.log("Update Names", myStore.getState());
// }

// //Action: is Object{type: value, payload:value}
// myStore.dispatch({
//   type: "ADD_NAME", // type should be a string and in Capital Letters
//   payload: "Dries" // data
// })

// //Action: is Object{type: value, payload:value}
// myStore.dispatch({
//   type: "ADD_NEW_NAME", // type should be a string and in Capital Letters
//   payload: "Lara" // data
// })


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
