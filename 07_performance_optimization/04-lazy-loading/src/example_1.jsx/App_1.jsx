/**
 * Problem:
 *      Component loads initially even when it is not needed. (slow down app startup)
 *
 * Solution:
 *      React.lazy loads component only when required.
 *      Suspense shows loading UI until component loads.
 */

import React, { useState, Suspense, lazy } from 'react'


// Post_1 component loads only when rendered
const Post_1 = lazy(() => import("./Post_1"))


const App_1 = () => {

  const [showPosts, setshowPosts] = useState(false)


  return (
    <div className='root'>


      {/* Update state to render lazy component */}
      <button onClick={() => setshowPosts(true)}>
        Show Posts
      </button>
      

      {/* Suspense shows fallback until component loads */}
      {showPosts && (

        <Suspense fallback={<p>Loading Post...</p>}>

            <Post_1 />

        </Suspense>

      )}


    </div>
  )
}


export default App_1