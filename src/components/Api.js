import "./file.css";
import { useState } from "react";
import Axios from "axios";
import Recipetile from "./Recipetile";

function Api() {
  const YOUR_APP_ID = "6d9f2fb2";
  const YOUR_APP_KEY = "94d123f0cb60c7b039714769b9e00d0c";
  const [query, setQuery] = useState("");
  const [healthLabel, setHealthLabel] = useState("vegetarian");
  const [recipes, setRecipes] = useState([]);

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;

  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  };

  const onSubmit = (e) => {
    e.preventDefault(); 
    getRecipeInfo();
  };

  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}>
        <u>Food Munch Hub</u>🥗
      </h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Type the Ingredient"
          autoComplete="Off"
          className="app__input"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <select className="app__healthLabels">
          <option
            value="vegan"
            onClick={() => {
              setHealthLabel("vegan");
            }}
          >
            vegan
          </option>
          <option
            value="vegetarian"
            onClick={() => {
              setHealthLabel("vegetarian");
            }}
          >
            vegetarian
          </option>
          <option
            value="low-sugar"
            onClick={() => {
              setHealthLabel("low-sugar");
            }}
          >
            low-sugar
          </option>
          <option
            value="dairy-free"
            onClick={() => {
              setHealthLabel("dairy-free");
            }}
          >
            dairy-free
          </option>
          <option
            value=" immuno-supportive "
            onClick={() => {
              setHealthLabel(" immuno-supportive ");
            }}
          >
            immuno-supportive
          </option>
          <option
            value="wheat-free"
            onClick={() => {
              setHealthLabel("wheat-free");
            }}
          >
            wheat-free
          </option>
        </select>
        <input type="submit" value="Get Recipe" className="app__submit" />
      </form>
      <div className="app__recipes">
        {recipes.map((recipe) => {
          return <Recipetile recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default Api;