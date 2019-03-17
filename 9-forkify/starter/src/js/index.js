import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements, renderLoader} from './views/base';
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
        
        //Render result on UI
        searchView.renderResults(state.search.results);
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});



const newSearch = function(event){
    let value = event.target.firstChild.textContent;

}

//search.getResult();
//console.log(search.result);

var i = 2;
