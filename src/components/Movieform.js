import React, { useState } from 'react'

function Movieform({setMoviesList}) {

  const [movie , setMovie] = useState({name: '', ratings:'', duration:''})

  const handleInputChange = (e)=>{

    let name = e.target.name
    let value = e.target.value
    setMovie((prev) => ({...prev, [name]:value}))
  }

  const handleAddMovie = ()=>{
    setMoviesList((prev) => ([...prev ,movie ]))
  }



  const handleDurationChange = (event) => {
    const value = event.target.value;
    let name = event.target.name


    const seconds = parseFloat(value);
    if (!isNaN(seconds)) {
      const minutes = seconds / 60;

      setMovie((prev) => ({...prev, [name]:minutes.toFixed(2)}))

    } else {
      setMovie((prev) => ({...prev, [name]:''}))

      alert('Please enter a valid number for seconds.');
    }
  };

  return (
    <section>
      <div className='card pa-30'>
        <form onSubmit={ e => e.preventDefault() }>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input 
              type='text' 
              id='name'
              placeholder='Enter Movie Name'
              data-testid='nameInput'
              name='name' 
              onChange={handleInputChange}
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>Ratings</label>
            <input 
              type='number' 
              id='ratings'
              placeholder='Enter Rating on a scale of 1 to 100'
              data-testid='ratingsInput'
              name='ratings' 
              onChange={handleInputChange}
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration </label>
            <input 
              type='text' 
              id='duration'
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
              name='duration' 
              onChange={handleDurationChange}
            />
          </div>
          {/* Use this div when time format is invalid */}
          {/* <div 
            className='alert error mb-30'
            data-testid='alert'
          >
            Please specify time in hours or minutes (e.g. 2.5h or 150m)
          </div>  */}
          <div className='layout-row justify-content-end'>
            <button 
              type='submit'
              className='mx-0'
              data-testid='addButton'

              onClick={handleAddMovie}

            >
              Add Movie
            </button>
          </div>
          </form>
      </div> 
    </section>
  )
}

export default Movieform
