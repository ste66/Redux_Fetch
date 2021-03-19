import './App.css';
// import Posts from "./components/Posts"
import  Comments from "./components/comments";
import { Provider } from "react-redux";
import store from './store';
function App() {
  return (
    <Provider store={store}>
    <div className="App" >
      <header className="App-header">
    
        <Comments/> 
      </header>
    </div>
    </Provider>
  );
}

export default App;

