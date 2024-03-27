import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    const [name,setName] = useState("")
  return (
    <div>
        <input type="text" 
            value={name} 
            onChange={(e)=>setName(e.target.value)}
        />
     
        <buton onClick = {() => console.log(name)}>
            <Link to ={`/room?name=${name}`}>
                Join 
            </Link>
        </buton>
    </div>
  )
}

export default Landing