import React, { useState } from 'react'
import axios from 'axios'

function App() {
   const [texts,setText] =useState("Search Movie")
   const [movie,setmovie] =useState([])

  const onchangeText =(e)=>{
     setText(e.target.value)
  }

  const getmovie = (e)=>{
   e.preventDefault();
    axios.get(`https://www.omdbapi.com/?s=${texts}&apikey=fee746e8`)
   .then((response)=>{
       console.log(response)
       setmovie(response.data.Search)
   })
  }
  let stl1={
    position:"relative",
    left :"450px",
    top:'50'
    
  }
  let stl={
    // backgroundColor     : "#A0A0A0",
    color:'red',
    position:"relative",
    left :"450px",
    top:"100px"
  }
  const container={
    backgroundColor:'blue',
  }
  const consts ={
    position:"relative",
    top:"200px",

    left:"23px"
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <h1 style={stl1} className="navbar-brand" href="#">MOVIE APP</h1>
    
    <div  style={container} className="collapse navbar-collapse" id="navbarSupportedContent">
     
      <form style={stl} className="d-flex" role="search" onSubmit={getmovie}>
        < input  className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={texts} onChange={onchangeText}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

  <div style={consts} className='conatin my-3'>
    <div className='row'>
 {
  movie.map((value,index)=>{
  return(
    <div className="card" style={{width: "18rem"}}>
  <img src={value.Poster} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h3 className="card-title">{value.Year}</h3>
    <h4 className="card-text">{value.Title}</h4>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  )
  })
 }
    </div>
  </div>

    
    </>
  )
}

export default App;