import Search from './models/Search';
import * as searchView from './views/searchView';
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
        //Search for recipes 
        await state.search.getResults();
        removeLoader();
        //Render result on UI
        searchView.renderResults(state.search.results);
        
        
    }
}

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


const r = new Recipe(46956);
r.getRecipe();
console.log('r: ', r);




