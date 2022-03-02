import logo from "./logo.svg";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const count = useSelector((store) => store.counterReducer.count);
  const dispatch = useDispatch();
  return (
    /* 
    1 display
    2 botons +1 +5
    2 botons -1 -5
    1 boto "reset"

    Fer la UI
    Pensar i afegir l’action
    Pensar i afegir el reducer
    Afegir el dispatch

    */
    <>
      <div>{count}</div>
      <button>+1</button>
      <button>+5</button>
      <button>-1</button>
      <button>-5</button>
      <button>Reset</button>
    </>
  );
}

export default App;
