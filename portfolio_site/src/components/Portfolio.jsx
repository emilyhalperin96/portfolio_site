import React, {useState, useEffect} from 'react'
import './portfolio.scss'
import PortfolioList from './PortfolioList'


export default function Portfolio() {

  const [selected, setSelected] = useState('featured')

  const list = [
    {
      id: 'Halpreads App',
      title: "Halpreads App",
    },
    {
      id: 'WordSearch',
      title: "WordSearch",
    },
    {
      id: 'Pizza Builder',
      title: "Pizza Builder",
    },
    {
      id: 'featured4',
      title: "Featured4",
    }
  ]

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map(item =>(
          <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
        ))}
      </ul>
  
      <div className="container">
        <div className="item">
          <img></img>
          <h3>Halpreads App</h3>
        </div>

        <div className="item">
          <img></img>
          <h3>WordSearch</h3>
        </div>

        <div className="item">
          <img></img>
          <h3>Pizza Builder</h3>
        </div>

        <div className="item">
          <img></img>
          <h3>Item Title</h3>
        </div>
      </div>
    </div>
  )
}
