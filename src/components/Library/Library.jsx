import React from 'react'
import { library, libraryCard } from './LibraryStyle'
import './Library.css'
import { useNavigate } from 'react-router-dom'


const Library = () => {

  const navigate = useNavigate()

  const handleOnClick = (page) => {

    switch(page){
        case 'movies':
            navigate('/movies', {data : 'test'})
            break
        case 'series':
            navigate('/series')
            break  
        case 'others':
            navigate('/others')
            break  
        default:
            break    
    }
  }



  return (
    <div style={library}>
    <div style={libraryCard}>
    <div className="card" onClick={() => handleOnClick('movies')}>
    <div className="card-inner">
      Movies
    </div>
     </div>
    </div>
    <div style={libraryCard}>
    <div className="card" onClick={() => handleOnClick('series')}>
    <div className="card-inner">
      Series
    </div>
     </div>
    </div>
    <div style={libraryCard}>
    <div className="card" onClick={() => handleOnClick('others')}>
    <div className="card-inner">
      Others
    </div>
     </div>
    </div>
    </div>
  )
}

export default Library