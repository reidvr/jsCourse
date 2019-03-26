import {elements, elementStrings} from './base';

export const clearRecipeResults = () => {
    elements.searchResults.innerHTML = '';
    elements.resultPages.innerHTML = '';
}