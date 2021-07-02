import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import './Coin.css'
import Coin from './Coin';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() =>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
        setCoins(res.data);
        console.log(res.data);
    })
    .catch(error=>console.log(error));
  },[]); 

  const handleChange = e => {
    setSearch(e.target.value);
  }

  const filteredCoins = coins.filter( coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input type="text" placeholder="Search" className="coin-input" onChange={handleChange}></input>
        </form>
      </div>
      <div className="coin-row">
        <div className="coin-container">
            <div className="coin">
                <h1 className="align">Currency</h1>
                <h1 className="align">Symbol</h1>
                <h1 className="align">Current Price</h1>
                <h1 className="align">Volume</h1>
                <h1>Change %</h1>
                <h1 className="align">Market Cap</h1>
            </div>
        </div>
      </div>
      {filteredCoins.map(coin => {
        return(
          <Coin
            key={coin.id}
            names={coin.name}
            symbol={coin.symbol}
            image={coin.image}
            price={coin.current_price}
            volume={coin.total_volume}
            priceChange={coin.price_change_percentage_24h}
            marketcap={coin.market_cap}
          />
        )
      })}
    </div>
  );
}

export default App;
