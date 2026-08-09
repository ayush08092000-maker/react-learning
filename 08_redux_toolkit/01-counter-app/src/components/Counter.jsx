import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../features/counter/counterSlice'

const Counter = () => {

    // useDispatch() → Dispatch(send) actions to Redux Store
    const dispatch = useDispatch()

    /*  useSelector() → Read data from Redux Store
            * state = Complete Redux Store
            * counter = reducer key from configureStore()
            * value = property inside initialState            */
    const count = useSelector((state) => state.counter.value)


  return (
    <div className='p-10 pb-8'>

        <div className="flex gap-10 justify-center items-center">

            <button 
                className='text-2xl px-8 pb-1 rounded-xl bg-blue-400 ' 
                onClick={() => dispatch(decrement())}
            >
                -
            </button>

            <span className='text-5xl font-bold '>{count}</span>

            <button 
                className='text-2xl px-8 pb-1 rounded-xl bg-blue-400 '
                onClick={() => dispatch(increment())}
            >
                +
            </button>

        </div>
            
        <div className='pt-5 flex justify-center'>
            <button
                className='text-2xl px-8 pb-1 rounded-xl bg-blue-400 '
                onClick={() => dispatch(reset())}
            >
                reset    
            </button> 
        </div>

    </div>
  )
}

export default Counter