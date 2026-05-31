import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from './Component/Cards'

const App = () => {

  // Stores images data fetched from API
  const [userData, setUserData] = useState([])

  // Stores current page number
  const [index, setIndex] = useState(1)

  // Fetch images from Picsum API
  const getData = async () => {

    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=12`
    )

    // Save fetched data into state
    setUserData(response.data)
  }

  // Run API call whenever page number changes
  useEffect(() => {
    getData()
  }, [index])

  // Default loading message
  let printUserData = (
    <h3 className='text-gray-300 text-xs font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      loading...
    </h3>
  )

  // If data is available, render image cards
  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return (
        <div key={idx}>
          <Cards elem={elem} />
        </div>
      )
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen p-5 text-white'>

      {/* Gallery Section */}
      <div className="flex h-[87%] p-5 flex-wrap gap-4">
        {printUserData}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-5 items-center p-4">

        {/* Previous Page Button */}
        <button
          // Reduce opacity when on first page
          style={{ opacity: index == 1 ? 0.5 : 1 }}

          className='bg-amber-400 text-sm text-black cursor-pointer active:scale-95 rounded px-5 py-2 font-semibold'

          onClick={() => {

            // Prevent page number from going below 1
            if (index > 1) {
              setIndex(index - 1)

              // Clear old data to show loading state
              setUserData([])
            }
          }}
        >
          Prev
        </button>

        {/* Current Page Number */}
        <h4>Page {index}</h4>

        {/* Next Page Button */}
        <button

          // Reduce opacity when on last page
          style={{ opacity: index == 83 ? 0.5 : 1 }}

          className='bg-amber-400 text-sm text-black cursor-pointer active:scale-95 rounded px-5 py-2 font-semibold'

          onClick={() => {

            // Prevent page number from going above 83
            if (index < 83) {
              setIndex(index + 1)

              // Clear old data to show loading state
              setUserData([])
            }
          }}
        >
          Next
        </button>

      </div>

    </div>
  )
}

export default App