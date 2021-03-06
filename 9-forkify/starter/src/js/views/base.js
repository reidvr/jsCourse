export const elements = {
    searchResults: document.querySelector('.results__list'),
    searchInput: document.querySelector('.search__field'),
    searchForm: document.querySelector('.search'),
    searchRes: document.querySelector('.results'),
    resultLink: document.querySelector('.results__link'),
    resultPages: document.querySelector('.results__pages'),
    recipe: document.querySelector('.recipe')
    
};

export const elementStrings = {
    loader: '.loader',
    prevButton: '.results_btn--prev',
    nextButton: '.results_btn--next'
    
}
export const renderLoader = parent => {
    const loader = `
        <div class="loader">
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
};

export const removeLoader = () => {
    const loader = document.querySelector(elementStrings.loader);
    if(loader) loader.parentElement.removeChild(loader);


}
