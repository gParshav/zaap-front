import React, { useState } from 'react'
import './Home.css'

function Home() {

  const [list, setlist] = useState([])

  const handleClick = () => {
      setlist([...list, [1, 'Hari']])
  }

  return (
    <>
    <button onClick={handleClick} >Click</button>
    <div className='chain'>
    
    {list.map((value, key) => {
      console.log(value)
      return(
        <>
          <div className='dabba' >
            <div className='name'>
                <h3 className='name2'>{value[1]}</h3>
            </div>
          </div>
        </>
      )
    })}
    </div>
    </>

    
  )
}

export default Home