import './Header.css'

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src="./assets/troll-img.png" alt="Troll logo" />
        <h2>Meme Generator</h2>
      </div>
      <div className="head-aside">
        <h3>React Course - Project 3</h3>
      </div>
    </div>
  )
}

export default Header