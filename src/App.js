import React, { useState } from 'react'
import './App.css'
import 'h8k-components'

import { Movieform, Movieslist, Search } from './components'

const title = 'Favorite Movie Directory'

function App() {

  const [moviesList , setMoviesList] =useState([])
  const [FilteredList , setFilteredList] =useState([])


  return (
    <div>
      <h8k-navbar header={ title } />
      <div className='layout-row justify-content-center mt-100'>
        <div className='w-30 mr-75'>
          <Movieform setMoviesList= {setMoviesList}/>
        </div>
        <div className='layout-column w-30'>
          <Search moviesList={moviesList} setFilteredList ={setFilteredList}  />
          <Movieslist  moviesList={moviesList}  FilteredList={FilteredList}/> 
          <div data-testid='noResult'>
            <h3 className='text-center'>No Results Found</h3>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default App;
