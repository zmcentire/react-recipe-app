import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Recipe from './components/Recipe';
import './app.css'

const App = () => {
    const APP_ID = '4fb043c0';
    const APP_KEY = 'eb2bfd69f6682ca03bdfc225506f9d56';

    const [recipes, setRecipes] = useState([]);
    let [search, setSearch] = useState("");
    let [query, setQuery] = useState('Chicken');

    useEffect(() =>{
        async function getRecipes() {
                let response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
                let data = await response.json();
                setRecipes(data.hits);

            }
        getRecipes();

    }, [query]);

    

    const updateSearch = e =>{
        setSearch(e.target.value)
    }

    const updateQuery = e =>{
        e.preventDefault();
        setQuery(search)
    }

    return (
        <div className="App">
            <Navbar/>
            <form className="search-form" onSubmit={updateQuery}>
                <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="Search here" />
                <input type="submit" value="Search" />
            </form>
            <div className="recipes">
                {recipes.map(recipe=>(
                    <Recipe key = {recipe.recipe.label} title={recipe.recipe.label} image={recipe.recipe.image} 
                    dietLabel={recipe.recipe.dietLabels} calories={recipe.recipe.calories} ingredients = {recipe.recipe.ingredients} />
                ))}
            </div>
        </div>
    )
}

export default App