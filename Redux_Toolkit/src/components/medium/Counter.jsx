// components/Counter.js
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement } from '../../features/slices/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counterReducer);
  console.log('ok count:',count );
  const dispatch = useDispatch();

  return (
    <div className='h-screen flex justify-center items-center flex-col'>
      <div>
      <h2>Count: {count}</h2>
      </div>
      <div>
      <button className='bg-blue-500 p-2 rounded m-2' onClick={() => dispatch(increment())}>Increment</button>
      <button className='bg-blue-500 p-2 rounded m-2' onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
