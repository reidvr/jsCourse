import {elements, elementStrings} from './base';

export const clearRecipe = () => {
    elements.recipe.innerHTML = '';
    
}

export const renderRecipe = () => {
    elements.recipe.insertAdjacentHTML('afterbegin', `<h1>recipe made!</h1>`)
    
}