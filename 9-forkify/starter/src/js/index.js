import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements, renderLoader, removeLoader} from './views/base';
import axios from 'axios';
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
        searchView.renderResults(state.search.results, 1);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});




