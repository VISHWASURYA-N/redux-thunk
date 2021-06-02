import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import Recipes from "./recipe";
import { decreament, getRecipe, increament, toggle } from "./actionCreator/actionCreator";
const App = () => {
  const [search, setSearch] = useState("");
  const [searchVal,setSearchVal]=useState("")
  const counter = useSelector((state) => state.counter);
  const themeToggle = useSelector((state) => state.themeToggler);
  let { isLightTheme, lightTheme, darkTheme } = themeToggle;
  const theme = isLightTheme ? lightTheme : darkTheme;
  const dispatch = useDispatch();
  const api_key = "cabffb21e92d839d187eecb3aca85f8a";
  const api_id = "62edeba0";
  const url = `https://api.edamam.com/search?q=${searchVal}&app_id=${api_id}&app_key=${api_key}`;

function handlesubmit(e) {
    e.preventDefault();
    setSearchVal(search)
    setSearch("")
  }
  
  useEffect(() => {
    dispatch(getRecipe(url))
  },[searchVal])
 
  return (
    <div style={{ background: theme.background, color: theme.color }}>
      <h1>{counter.count}</h1>
      <button onClick={() => dispatch(increament())}>increment</button>
      <button onClick={() => dispatch(decreament())}>decrement</button>
      <button onClick={() => dispatch(toggle())}>
        {isLightTheme ? "change to dark mode" : "change to light mode"}
      </button>
    <form onSubmit={handlesubmit}>
      <input
        type="text"
        value={search}
        placeholder="search food items"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button type="submit">search</button>
      <Recipes/>

    </form>
    </div>
  );
};

export default App;
