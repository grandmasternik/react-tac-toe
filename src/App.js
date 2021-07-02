import Header from "./components/header";
import Player from "./components/Player";
import Board from "./components/Board";
// import "./App.css";
import "./styles.css"

function App() {
  return ( <
    div className = "container" >
    <
    div >
    <
    Header / >
    <
    Player whichPlayer = 'X' / >
    <
    Player whichPlayer = 'O' / >
    <
    Board / >
    </div> 
    </div>
  );
}

export default App;