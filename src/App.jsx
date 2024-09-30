import './App.css'
import Coin2 from './components/Coin2'

function App() {

  return (
    <div className="App">

<div className="navbar">
      <button className="nav-button active">Dashboard</button>
      <button className="nav-button">Sell Parts</button>
      <button className="nav-button">Autopilot</button>
      <button className="nav-button">AI Insights</button>
    </div>
    
      <Coin2 />
    </div>
  )
}

export default App



