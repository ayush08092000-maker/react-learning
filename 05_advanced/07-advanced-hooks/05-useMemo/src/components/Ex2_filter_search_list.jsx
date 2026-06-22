/*
    Filter Search:
        useMemo → cache filtered result

        Filtering large lists can be expensive

        Search change:
            → filter() runs again

        Count change:
            → component re-renders
            → useMemo returns cached result
            → filter() does not run again

        Runs again only when dependency changes
*/

import React, { useMemo, useState } from 'react'


const users = [
    'Ayush Dubey',
    'Amit Kumar',
    'Rahul Tiwari',
    'Pranjal Dwivedi',
    'Vijay Yadav',
    'Shambhu Patel',
    'Utkarsh Singh',
    'Kaif Khan'
]


const Ex2_filter_search_list = () => {

    const [search, setSearch] = useState('')    // Store search input value
    const [count, setCount] = useState(0)       // Extra state to test re-render

    
    // Runs only when search value changes
    const filteredUsers = useMemo(() => {
        console.log(`Filtering users...`)

        return users.filter((user) =>    
            user.toLowerCase().includes(search.toLowerCase())
        )
    }, [search])



  return (
    <div className='root'>

        <h1>filter-search-list</h1>

        <input type="text" 
            placeholder='Search user...'
            value={search}

            // Update search state
            onChange={(e) => setSearch(e.target.value)}
        />  

        {
            // Display filtered users list
            filteredUsers.map((user, idx) => 
                <p key={idx}>{user}</p>
            )
        }

        <div className="counter">
            {/* Change unrelated state */}
            <button onClick={() => setCount(prev => prev + 1)}>click</button>
            <h2>Count: {count}</h2>
        </div>

    </div>
  )
}

export default Ex2_filter_search_list