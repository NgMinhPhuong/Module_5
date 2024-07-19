import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {selectCreate, incre, asyncFuc } from './redux/slice/countReducer';


function App() {
  const dispatch = useDispatch()
  const test = useSelector(store => store.count1);
  const handle = (value) => {
    // console.log(incre(value));
      dispatch(asyncFuc())
      .then(res => {
        console.log("res", res);
      })
      .catch(er => {
        console.log("lỗi ngoài");
      })
  }
  return (
    <>
      {test.id}
      <input/>
      <button onClick={() => {
        handle(document.querySelector('input').value)
      }}>Click</button>
    </>
  )
}

export default App;
