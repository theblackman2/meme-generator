import './Body.css'
import React from 'react'
import Data from './../../data'

function Body() {
  const [meme, setMeme] = React.useState({
    topText : "",
    bottomText : "",
    randomImageUrl : "http://i.imgflip.com/1bij.jpg",
  })

  const getRandomImage = () => {
    const random = Math.floor(Math.random() * Data.length)
    const randomUrl = Data[random].url
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImageUrl : randomUrl,
      }
    })
  }

  const handleChange = (event) => {
    const {name, value} = event.target
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name] : value,
      }
    })
  }

  return (
    <div className='body'>
      <div className="inputs">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Tom text"
          value={meme.topText}
          name="topText"
          onChange={handleChange} 
        />
        <input 
          type="text" 
          className="form-control" 
          placeholder="Bottom text"
          value={meme.bottomText}
          name="bottomText"
          onChange={handleChange} 
        />
      </div>
      <button onClick={getRandomImage} className="generate">Get a new meme image  🖼</button>
      <div className="image">
        <img src= {meme.randomImageUrl} alt="Meme" />
        <h2 className="top-text meme-text"> {meme.topText} </h2>
        <h2 className="bottom-text meme-text"> {meme.bottomText} </h2>
      </div>
    </div>
  )
}

export default Body