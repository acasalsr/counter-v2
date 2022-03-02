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
      <div className="counter_container">
        <div className="counter_display">{count}</div>
        <div className="counter_wrapper-buttons">
          <button className="counter_button">+1</button>
          <button className="counter_button">+5</button>
          <button className="counter_button">-1</button>
          <button className="counter_button">-5</button>
        </div>
        <br />
        <button className="counter_button-reset">Reset</button>
      </div>
    </>
  );
}

export default App;
