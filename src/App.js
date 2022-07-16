import './App.css';
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators} from "redux"
import { actionCreators } from "./state/index"

function App() {

  const account = useSelector((state) => state.account); // access original state value
  const dispatch = useDispatch();
  
  
  const {depositMoney, withdrawMoney} =  bindActionCreators(actionCreators, dispatch); 
  
  
  return (
    <div> 
      <div>{account}</div>
      <button onClick ={() => depositMoney(1000)}>
        Add
      </button>
      <button onClick ={() => withdrawMoney(1000)}>
        Minus
      </button>
    </div>
  )
}

export default App;
