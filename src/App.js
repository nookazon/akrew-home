import logo from './logo.svg'
import nookazon from './nookazon.png'
import traderie from './traderie.png'
import drippit from './drippit.png'
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='header'>
          <img src={logo} className='App-logo' alt='logo' />
          Akrew
        </h1>
      </header>
      <div className='body'>
        <div className='container'>
          <div style={{ padding: 40, fontSize: 20 }}>
            Expanding the player experience beyond the game
          </div>
          <h2>Our Brands</h2>
          <div className='brands'>
            <div className='brand'>
              <a href='https://nookazon.com' target='blank'>
                <img src={nookazon} alt='Nookazon' />
              </a>
            </div>
            <div className='brand'>
              <a href='https://traderie.com' target='blank'>
                <img src={traderie} alt='Traderie' />
              </a>
            </div>
            <div className='brand'>
              <a href='https://drippit.com' target='blank'>
                <img src={drippit} alt='Drippit' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='footer'>
        <div className='container'>
          <div style={{ marginBottom: 15 }}>
            <a
              href='mailto:hello@akrew.com'
              style={{ color: 'black', fontWeight: 'bold' }}
            >
              Contact Us
            </a>
          </div>
          <div>© 2020 Akrew Inc.</div>
        </div>
      </div>
    </div>
  )
}

export default App
