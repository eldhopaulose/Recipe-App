import { useEffect, useState } from "react";
import Recipes from "./Recipes";
import "./App.css";

function App() {
   const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes();
  }, [query]);


  const APP_ID = "a9790d82";
  const APP_KEY = "493fa5304fdd0eb7ae3a8f8085e2771e";
  const dataReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getRecipes = async () => {
    const response = await fetch(dataReq);
    const data = await response.json();
    setRecipes(data.hits);
  };

const updateSearch = e =>{
  setSearch(e.target.value)
  console.log(search);
}

const getSearch = e =>{
  e.preventDefault()
  setQuery(search)
  setSearch('')
}

  return (
    <div className="App">
      <form onSubmit={getSearch} className="serch-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map((recipe) => (
        <Recipes
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
