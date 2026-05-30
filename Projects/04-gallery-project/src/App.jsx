import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Cards from './Component/Cards'

const App = () => {

  const [userData, setUserData] = useState([])

  const [index, setIndex] = useState(1)

  const getData = async () => {

    const responce = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)

    setUserData(responce.data);
    
  }

  useEffect(() => {
    getData();
  },[index])

  let printUserData = <h3 className='text-gray-300 text-xs font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>loading...</h3>

  if(userData.length > 0){
    printUserData = userData.map((elem, idx) => {
      
      return <div key={idx}>
        <Cards elem={elem} />
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen p-5 text-white'>

      <div className="flex h-[87%] p-5 flex-wrap gap-4">
        {printUserData}
      </div>

      <div className="flex justify-center gap-5 items-center p-4">

        <button 
        style={{opacity: index == 1 ? 0.5 : 1 }}
        className='bg-amber-400 text-sm text-black cursor-pointer active:scale-95 text-small rounded px-5 py-2 font-semibold'
          onClick={() => {
            if(index > 1){
              setIndex(index-1);
              setUserData([]);
            }        
          }}
          >
          Prev 
        </button>

        <h4>Page {index}</h4>

        <button 
        style={{opacity: index == 83 ? 0.5 : 1 }}
        className='bg-amber-400 text-sm text-black cursor-pointer active:scale-95 text-small rounded px-5 py-2 font-semibold'
          onClick={() => {
            if(index < 83){
              setIndex(index+1);
              setUserData([]);
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