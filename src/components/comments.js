
import {Component} from "react";
import {fetchComments, getName} from "../actions/commentsActions"
import {connect} from "react-redux";

class comments extends Component {
 componentWillMount(){
  this.props.fetchComments(); // this part you are calling action
 }

 render() {
  console.log(this.props) //  fetchComments
  const commentLists = this.props.comments.map(item=>{
   return (
     <div className ="item border border-dark">
          
              <div key={item.id}>
                        <h2 className="name"> {item.name}</h2>
                        <h4 className="email"> email: {item.email}</h4>
                        <h4  className="body mb-5"> {item.body}. </h4>
                </div>
        
      </div>
   )
  })
  return(
   <>
                        <h1 className="comment"> COMMENTS</h1>
                                {commentLists}
                         
   </>
  )
 }
}

                  const mapStateToProps = state => ({
                      comments: state.CommentsReducer.lists,
                      name: state.CommentsReducer.lists
})

//export default toDos;
// export default connect(value1, value2) (toDos)
/**
* connect will fetchPosts data from action then send it to mapStateToProps
*/
export default connect(mapStateToProps, {fetchComments, getName})(comments);