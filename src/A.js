import React from 'react'
import axios from 'axios'
function A() {
    const fetch =()=>{

        axios.get("https://www.omdbapi.com/?s=kabhi&apikey=fee746e8")
        .then((response)=>{
            console.log(response)
        })
    }
  return (
    <div>

        <button onClick={fetch}>fff</button>
    </div>
  )
}

export default A