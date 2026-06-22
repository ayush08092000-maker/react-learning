/**
  useCallback:
    -> Used when you want to prevent unnecessary function recreation
       between component re-renders.
    -> caches(store) the "FUNCTION" / "FUNCTION REFERENCE".

  comparison:
      useMemo:
        -> caches function RESULT / return VALUE
      useCallback:
        -> caches FUNCTION / function REFERENCE
 */

import React from 'react'
import Without_useCallback from './components/Without_useCallback'
import With_useCallback from './components/With_useCallback'

const App = () => {
  return (
    <div>
      
      <Without_useCallback /> <hr />

      <With_useCallback />


    </div>
  )
}

export default App