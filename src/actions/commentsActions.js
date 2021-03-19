
// Action shows what to do
export const fetchComments = ( )=>dispatch=> {
 // fetch API here
 fetch("https://jsonplaceholder.typicode.com/comments")
 .then(res =>res.json())
 .then(comments=>dispatch({
type:"FETCH_COMMENT",
payload: comments
 }))
}

// Example=================Without API==========
// export const getName= ()=> {
//return "Hello Stella"
//}

 export const getName = ()=> dispatch =>{
dispatch ({
 type:"GET_NAME", 
 payload: "Stella Iwasanmi"
})
}
