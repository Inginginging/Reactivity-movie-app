import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [usd, setUsd] = useState(0);
  const [btc, setBtc] = useState(0);
  const [possible, setPossible] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []); //이 코드는 시작할때 한번만 랜더링.
  const onChange = (event) => {
    setUsd(event.target.value); //내가 갖고 있는 dollar amount
  };
  const onSelect = (event) => {
    setBtc(event.target.value); //select한 coin의 가격
  };
  const onClick = () => {
    setPossible(Math.floor(usd / btc));
  };
  return (
    <div>
      <h1>Coins! {loading ? null : `(${coins.length})`}</h1>
      {loading ? <strong>Loading ...</strong> : null}
      <select onChange={onSelect}>
        {coins.map((coin) => (
          <option value={coin.quotes.USD.price}>
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
      <hr />
      <input
        type="number"
        placeholder="convert USD"
        value={usd}
        onChange={onChange}
      />
      $
      <br />
      <button onClick={onClick}>Convert</button>
      <br />
      <input value={possible} disabled="true"></input>
    </div>
  );
}

export default App;
