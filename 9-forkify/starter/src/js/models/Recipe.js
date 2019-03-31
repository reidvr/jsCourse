import axios from 'axios';
import {key, proxy} from '../config';
import { renderResults } from '../views/searchView';

export default class Recipe{
    constructor(id){
        this.id = id;
    }

    async getRecipe() {
        try{
            // const result = await axios(`${proxy}https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`);
            const result = myR;
            
            this.title = result.data.recipe.title;
            this.author = result.data.recipe.publisher;
            this.img = result.data.recipe.image_url;
            this.url = result.data.recipe.source_url;
            this.ingredients = result.data.recipe.ingredients;
            
        } catch (error){
            console.log(error);
            alert('Something went wrong =( ');
        }
    }

    calcTime(){
        const nIng = this.ingredients.length;
        const periods = Math.ceil(nIng /3);
        this.time = periods * 15;
    }

    calcServings() {
        this.calcServings = 4;
    }

    parseIngredients() {
        const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons','teaspoon', 'cups', 'pounds'];
        const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];

        const newIngredients = this.ingredients.map(ingredient => {
            
            let parsedIngredient = ingredient.toLowerCase();

            //1. Uniform units
            unitsLong.forEach((unit, i) => {
                parsedIngredient = parsedIngredient.replace(unit, unitsShort[i]);
            });
            
            //2. Remove parentheses
            parsedIngredient = parsedIngredient.replace(/ \([\s\S]*?\)/g, "");
            
            
            //3. Parse ingredients into count, unit and ingredient
            const arrIng = ingredient.split(' ');
            const unitIndex = arrIng.findIndex(el2 => unitsShort.includes(el2));

            if(unitIndex > -1){
                //Theres a unit



            } else if(parseInt(arrIng[0])){
                
            } else if(unitIndex === -1){
                //There is NO unit
            }

            return parsedIngredient;

        });
        this.ingredients = newIngredients;
    }

    // parseIngredients() {
    //     const unitsLong = ['tablespoons', 'tablespoon', 'ounce', 'ounces', 'teaspoon','teaspoons', 'cups', 'pounds'];
    //     const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];
    // }



}

const myR = { 
    data:{
        recipe:{
        f2f_url: "http://food2fork.com/view/46956",
        image_url: "http://static.food2fork.com/fruitpizza9a19.jpg",
        ingredients: [
            "1-1/3 cup Shortening (may Substitute Butter)",
            "1-1/2 cup Sugar",
            "1 teaspoon Orange Zest",
            "1 teaspoon Vanilla",
            "2 whole Eggs",
            "8 teaspoons Whole Milk",
            "4 cups All-purpose Flour",
            "3 teaspoons Baking Powder",
            "1/2 teaspoon Salt",
            "2 jars (13 Ounces Each) Marshmallow Creme",
            "2 packages (8 Ounces Each) Cream Cheese",
            "Peaches",
            "Kiwi Fruit",
            "Blueberries",
            "Pears",
            "Raspberries",
            "Other Fruit Optional"
        ],
        length: 17,
        publisher: "The Pioneer Woman",
        publisher_url: "http://thepioneerwoman.com",
        recipe_id: "46956",
        social_rank: 100,
        source_url: "http://thepioneerwoman.com/cooking/2012/01/fruit-pizza/",
        title: "Deep Dish Fruit Pizza"
        }
    }
}

