import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { decrementByAmount, incrementByAmount } from '../features/counter/counterSlice'

const InputCounter = () => {

    const dispatch = useDispatch()

    // Local state for input field
    const [amount, setAmount] = useState('')
        

  return (
    <div className='px-10'>

        <div className='flex justify-center'>
            <input type="number" 
                className='text-2xl px-5 pb-1 rounded-xl bg-green-400 '
                placeholder='Enter amount'
                value = {amount}
                onChange={(e) => setAmount(e.target.value)}
            />
        </div>

        <div className='p-7 flex gap-10 justify-center items-center'>

                <button 
                    className='text-2xl px-8 pb-1 rounded-xl bg-blue-400 ' 
                    onClick={() => dispatch(decrementByAmount(Number(amount)))}
                >
                    decByAmount -
                </button>

                <button 
                    className='text-2xl px-8 pb-1 rounded-xl bg-blue-400 '
                    onClick={() => dispatch(incrementByAmount(Number(amount)))}
                >
                    incByAmount +
                </button>

        </div>

    </div>
  )
}

export default InputCounter