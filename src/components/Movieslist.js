import React from 'react'

function Movieslist({moviesList , FilteredList}) {



  return (
    <section>
      <ul 
        className='styled w-100 pl-0' 
        data-testid='moviesList'
      >
      <li 
        className='flex slide-up-fade-in justify-content-between'
        style={{borderBottom: '2px solid var(--primary-color)'}}
      >

  <div style={{display:"flex" , width:"100%" , flexDirection:"column"}}>


  <div style={{display:"flex" , width:"100%" , justifyContent:"space-around"}}>
  <h4>Name</h4>
    <h4>ratings</h4>
    <h4>duration</h4>
  </div>
  
  {FilteredList.length  ?  FilteredList.map((item)=>{
return(
  <div style={{display:"flex" , justifyContent:"space-around"}}>
    <h4>{item.name}</h4>
    <h4>{item.ratings}</h4>
    <h4>{item.duration}</h4>

  </div>
)
     }) :  

      moviesList.map((item)=>{
return(
  <div style={{display:"flex" , justifyContent:"space-around"}}>
    <h4>{item.name}</h4>
    <h4>{item.ratings}</h4>
    <h4>{item.duration}</h4>

  </div>
)
     })
    }
  </div>

      </li>
      </ul>
    </section>
  )
}

export default Movieslist;
