import './Body.css'

function Body() {
  return (
    <div className='body'>
      <div className="inputs">
        <input type="text" className="form-control" placeholder="Tom text"/>
        <input type="text" className="form-control" placeholder="Bottom text"/>
      </div>
      <button className="generate">Get a new meme image  🖼</button>
    </div>
  )
}

export default Body