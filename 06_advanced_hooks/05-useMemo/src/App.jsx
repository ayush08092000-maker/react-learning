/**
  useMemo:
    -> Used when you have an expensive calculation and you want to avoid 
       recalculating it.
    -> caches(store) the "RESULT" / "return VALUE" of a function.
 */

import React from 'react'
import Without_useMemo from './components/Without_useMemo'
import With_useMemo from './components/With_useMemo'
import Ex2_filter_search_list from './components/Ex2_filter_search_list'

const App = () => {
  return (
    <div>
      
      <Without_useMemo /> <hr />

      <With_useMemo /> <hr />

      <Ex2_filter_search_list />

    </div>
  )
}

export default App