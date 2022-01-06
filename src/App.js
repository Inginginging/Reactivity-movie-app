import { useEffect, useState } from "react";

function Hello() {
  useEffect(() => {
    console.log("hi :)"); //Hello가 불릴때 실행
    return () => console.log("bye :("); //Hello component가 destroy될때 실행. -> clean up
  }, []);
  return <h1>HELLO</h1>;
}

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((current) => current + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => console.log("API rendered...."), []); //app이 실행될때 code 실행
  useEffect(() => console.log("i render when Keyword changes"), [keyword]); //keyword가 변할때만 code 실행
  useEffect(() => console.log("i render when Counter changes"), [counter]); //counter가 변할때만 code 실행

  const [showing, setShowing] = useState(false);
  const onShowClick = () => setShowing((current) => !current);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onShowClick}>{showing ? "HIDE" : "SHOW"}</button>
      <hr />
      <input
        placeholder="search here"
        onChange={onChange}
        value={keyword}
        type="text"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
