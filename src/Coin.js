import React from 'react'

const Coin = ({image, names, symbol, price, volume, priceChange, marketcap}) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto-currency"></img>
                    <h1>{names}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price align">${price}</p>
                    <p className="coin-volume">${volume.toLocaleString()}</p>
                    {priceChange < 0 ? (<p className="coin-percent red">{priceChange.toFixed(2)}%</p>)
                    : (<p className="coin-percent green">{priceChange.toFixed(2)}%</p>)}
                    <p className="coin-marketcap">${marketcap.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Coin
