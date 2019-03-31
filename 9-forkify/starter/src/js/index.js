import Search from './models/Search';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import {elements, renderLoader, removeLoader, elementStrings} from './views/base';
import axios from 'axios';
import Recipe from './models/Recipe';

//Global state of the app
// Search object
// Current recipe object
// Shopping list object
// Liked recipes

const state = {};

const controlSearch = async () => {
    // get query from view
    const query = searchView.getInput();

    if(query){
        //New search object and add to state
        state.search = new Search(query);

        
        //Prepare UI for results
        searchView.clearSearchInput();
        searchView.clearSearchResults();
        renderLoader(elements.searchRes);
        try{
        //Search for recipes 
        await state.search.getResults();
        removeLoader();
        //Render result on UI
        searchView.renderResults(state.search.results);
        }
        catch{
            console.log('Something went wrong with the search');
            removeLoader();
        }
    }
}

const controlRecipe = async () => {
    const id = window.location.hash.replace('#', '');
    
    if(id){
        //Prepare UI for changes
        recipeView.clearRecipe();
        //Create new recipe object
        state.recipe = new Recipe(id);
        window.recipe = state.recipe;
        try{
            //Get recipe data
            await state.recipe.getRecipe();
            //Calculate servings and time
            state.recipe.calcServings();
            state.recipe.calcTime();
            state.recipe.parseIngredients();

            //Render recipe
            recipeView.renderRecipe();

            
        }
        catch{
            alert('Error processing recipe!');
        }
    }

};

//?? Why use event delegation over creating listeners on render?
elements.resultPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if(btn){
        const goToPage = parseInt(btn.dataset.goto);
        searchView.clearSearchResults();
        searchView.renderResults(state.search.results, goToPage);
    }
});

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

window.addEventListener('load', e => {
    e.preventDefault();
    controlSearch();
});


['hashchange', 'load'].forEach(eventName => window.addEventListener(eventName, controlRecipe));





