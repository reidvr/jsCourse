import {elements, elementStrings} from './base';

export const getInput = () => elements.searchInput.value;


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
    elements.resultPages.innerHTML = '';
}

// const createButtons = (page, type) => {
//     let buttons = {
//         prev:
//             `<button class="btn-inline results__btn--prev">
//                 <span>Page ${page - 1}</span>
//                 <svg class="search__icon">
//                     <use href="img/icons.svg#icon-triangle-left"></use>
//                 </svg>
//             </button>`,
    
//         next:
//             `<button class="btn-inline results__btn--next">
//                 <span>Page ${page + 1}</span>
//                 <svg class="search__icon">
//                     <use href="img/icons.svg#icon-triangle-right"></use>
//                 </svg>
//             </button>`
//     }

//     return type === 'both' ? buttons.prev + buttons.next:buttons[type];

// }

const createButtons = (page, type) => {
    return `<button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1:page + 1}>
        <span>Page ${type === 'prev' ? page - 1: page + 1}</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left': 'right'}"></use>
        </svg>
    </button>`
}
const renderButtons = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage);
    
    let html = '';
    if(page === 1 && pages > 1){
        html = createButtons(page, 'next');
    }else if(page < pages){
        html = createButtons(page, 'prev') + createButtons(page, 'next');
    }
    else if(page === pages){
        html = createButtons(page, 'prev');
    }
    elements.resultPages.insertAdjacentHTML('beforeend', html);
}


export const renderResults = (recipes, page = 1, resPerPage = 10) => {
    const start = (resPerPage * page) - resPerPage;

    const end = start + resPerPage;
    
    recipes.slice(start, end).forEach(renderRecipe);
    renderButtons(page,recipes.length, resPerPage);
    // for (let index = pageStartIndex; index < pageEndIndex; index++) {
    //     renderRecipe(recipes[index]);
    
    // }
    
    
}




