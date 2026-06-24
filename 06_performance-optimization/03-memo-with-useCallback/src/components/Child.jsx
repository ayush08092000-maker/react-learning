import { memo } from 'react'


const Child = ({click}) => {


    // Runs only when handleClick reference changes
    console.log("Child rendered...")


    return (
        <div>

            <h2>Child Component</h2>

            <button onClick={click}>
                Child Button
            </button>

        </div>
    )
}


// memo prevents re-render when props are unchanged
export default memo(Child)