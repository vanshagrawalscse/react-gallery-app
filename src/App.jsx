import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import Cards from './components/Cards'

const App = () => {

  const [userData, setUserData] = useState([])
  const [Index, setIndex] = useState(1)

  const getData= async ()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${Index}&limit=20`)

    setUserData(response.data)
    console.log(response.data );
    }

    useEffect(function(){
      getData()

    },[Index])

  let printUserdata = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading....</h3>

  if(userData.length > 0){
    printUserdata = userData.map(function(elem,idx){

      return <div key={idx}>
        <Cards elem={elem}  />
       
      </div>
       
     
      
    })
  }
      

  return (
    <div className="bg-black h-screen p-4  overflow-auto text-white">
     
     

      <div className='flex h-[80%] flex-wrap gap-4 p-2'>
      {printUserdata}
      </div>
      <div className='flex justify-center gap-4 p-4' >

        <button1
         style={{pointerEvents: Index===1 ? 'none' : 'auto', opacity: Index===1 ? 0.5 : 1}}
        className='bg-amber-400 text-sm  cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
        onClick={()=>{
          if(Index>1)
          setIndex(Index-1)
          setUserData([])


        }}
        
        >Prev</button1>
        <h3> Page {Index}</h3>

        <button2 className='bg-amber-400 text-sm  cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
        onClick={()=>{
          setIndex(Index+1)
          setUserData([])

        }}
        
        >Next</button2>
      </div>
    </div>
  )
}

export default App