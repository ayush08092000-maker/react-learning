import React from 'react'
import useFetch from '../myHooks/useFetch'


const Users = () => {

    // Reusing API logic from custom hook
    const {data, error, loading} = useFetch('https://jsonplaceholder.typicode.com/users')

    if(loading) return <h3>Loading...</h3>
    if(error) return <h3>Error occurred!</h3>


    return (
        <div className='root'>

            {/* Render API data */}
            <ul className='root'>
                {
                    data.map((user) => (
                        <li key={user.id}> 
                            Name: {user.name} 
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}


export default Users