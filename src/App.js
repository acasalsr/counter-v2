import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  increaseCounter,
  decreaseCounter,
  reset,
} from "./redux/actions/counterActions";

function App() {
  const count = useSelector((store) => store.counterReducer.count);
  const dispatch = useDispatch();
  return (
    <>
      <div className="counter_container">
        <div className="counter_display">{count}</div>
        <div className="counter_wrapper-buttons">
          <button
            className="counter_button"
            onClick={() => dispatch(increaseCounter(1))}
          >
            +1
          </button>
          <button
            className="counter_button"
            onClick={() => dispatch(increaseCounter(5))}
          >
            +5
          </button>
          <button
            className="counter_button"
            onClick={() => dispatch(decreaseCounter(1))}
          >
            -1
          </button>
          <button
            className="counter_button"
            onClick={() => dispatch(decreaseCounter(5))}
          >
            -5
          </button>
        </div>
        <br />
        <button
          className="counter_button-reset"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
