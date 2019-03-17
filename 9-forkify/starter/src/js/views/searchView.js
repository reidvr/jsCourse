import {elements} from './base';

export const getInput = () => elements.searchInput.value;

/*const capLength = (string, maxLength) => {
    let newString = string;
    if(string.length > maxLength)
        newString = `${string.slice(0,maxLength)}...`;
    return newString;
}*/

const capLength = (string, maxLength = 17) => {
    if(string.length >= maxLength){
        const newTitle = [];
        string.split(' ').reduce((acc, cur) =>{
            if(acc + cur.length <= maxLength){
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);
        newTitle.push('...');
        return newTitle.join(' ');
    }
    return string;
    
}

const renderRecipe = recipe => {
    
    const html = `<li>
                    <a class="results__link" href="#${recipe.recipe_id}">
                        <figure class="results__fig">
                            <img src="${recipe.image_url}" alt="${recipe.title}">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${capLength(recipe.title)}</h4>
                            <p class="results__author">${recipe.publisher}</p>
                        </div>
                    </a>
                </li>`;
    
    elements.searchResults.insertAdjacentHTML('beforeend', html);
}

export const clearSearchInput = () => {
    elements.searchInput.value = '';

}

export const clearSearchResults = () => {
    elements.searchResults.innerHTML = '';
    

}

export const renderResults = recipes => {
    recipes.forEach(renderRecipe);
    
}




