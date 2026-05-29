import React, { useState } from 'react'

const App = () => {

  // State for note title input
  const [title, setTitle] = useState('')

  // State for note details input
  const [details, setDetails] = useState('')

  // Array state to store all notes
  const [task, setTask] = useState([])


  // Runs when form is submitted
  const submitHandler = (e) => {
    e.preventDefault(); // Stop page refresh

    // Prevent empty notes 
    if (!title.trim() || !details.trim()) return;  // trim(): remove starting & ending spaces.

    // Add new note to task array
    setTask([...task, { title, details }]);

    // Clear input fields after submit
    setTitle('');
    setDetails('');
  }


  // Delete note using index
  const deleteNote = (idx) => {
    const copyTask = [...task]

    // Remove one note from array
    copyTask.splice(idx, 1)     // arr.splice(startIndex, deleteCount)

    // Update state with new array
    setTask(copyTask)
  }

  return (
    <div className='h-screen overflow-hidden lg:flex bg-black text-white'>

      {/* Form section */}
      <form
        onSubmit={submitHandler}
        className='flex lg:w-1/2 flex-col items-start gap-4 p-10'
      >

        {/* Main heading */}
        <h1 className='text-4xl font-bold'>
          Add Notes
        </h1>

        {/* Input for note title */}
        <input
          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 py-2 w-full font-medium border-2 outline-none rounded'

          // Connect input with state
          value={title}

          // Update title while typing
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        {/* Textarea for note details */}
        <textarea
          className='px-5 py-2 w-full h-32 border-2 outline-none rounded'
          placeholder='Write Details Here'

          // Connect textarea with state
          value={details}

          // Update details while typing
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        ></textarea>

        {/* Submit button */}
        <button
          className='bg-white active:scale-99 font-medium w-full text-black px-5 py-2 rounded'
        >
          Add Note
        </button>

      </form>


      {/* Notes display section */}
      <div className="lg:w-1/2 lg:border-l-2 bg-gray-900 px-5 py-10 overflow-hidden">

        <h1 className='text-4xl font-bold'>
          Recent Notes
        </h1>

        {/* Container for all note cards */}
        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 h-[95%] overflow-y-auto scrollbar-hide">

          {/* Loop through notes array */}
          {task.map((elem, idx) => {

            return (

              // Single note card
              <div
                key={idx}
                className="flex flex-col justify-between h-60 w-45 rounded-xl text-black py-9 pb-4 px-4 bg-cover bg-[url('https://static.vecteezy.com/system/resources/thumbnails/037/152/674/small/sticky-note-paper-background-free-png.png')]"
              >

                {/* Content section */}
                <div className="overflow-hidden flex-1">

                  {/* Note title */}
                  <h3 className='leading-tight text-xl font-bold wrap-break-words'>
                    {elem.title}
                  </h3>

                  {/* Note details */}
                  <p className='mt-3 text-xs font-semibold text-gray-600 wrap-break-words overflow-y-auto h-25 scrollbar-hide'>
                    {elem.details}
                  </p>

                </div>

                {/* Delete button */}
                <button
                  onClick={() => {
                    deleteNote(idx)
                  }}
                  className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs font-bold rounded text-white'
                >
                  Delete
                </button>

              </div>
            )
          })}

        </div>

      </div>

    </div>
  )
}

export default App