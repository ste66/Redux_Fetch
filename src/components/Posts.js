import { Component } from "react";
import { fetchPosts } from "../actions/postActions";
import { connect } from "react-redux";
class Posts extends Component{
    componentWillMount() {
        this.props.fetchPosts();
    }
    render() {
        console.log(this.props) // posts, fetchPosts
        const postItems = this.props.posts.map(post=>{
            return (
                <div key={post.id}>
                        <h2>Book Title: {post.title}</h2>
                        <p>Details: {post.body}</p>
                </div>
            )
        })
        return(
            <>
                        <h1>All POSTS</h1>
                                     {postItems}
            </>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.postReducer.items
})

//export default Posts;
// export default connect(value1, value2) (Posts)
/**
 * connect will fetchPosts data from action then send it to mapStateToProps
 */
export default connect(mapStateToProps, {fetchPosts})(Posts);