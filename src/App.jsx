import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { decrement, increment } from './Slice/counterSlice';

function App() {

  const dispatch = useDispatch()
  const demo = useSelector((selector) => selector.counter.value)
  console.log(demo);

  const handleIncrement = () => {
    console.log('ok');
    dispatch(increment())
  }

  const handleDecrement = () => {
    console.log('lala');
    dispatch(decrement())
  }

  return (
    <>
      <h1 className='text-[50px] font-bold text-[rgb(0,0,0,0.8)] '>REDUX</h1>


      <div>
        <button
          onClick={handleIncrement}
          aria-label="Increment value"
        >
          Increment
        </button>
        <span className='px-[30px]'>{demo}</span>
        <button
          onClick={handleDecrement}
          aria-label="Decrement value"
        >
          Decrement
        </button>
      </div>
    </>
  )
}

export default App
