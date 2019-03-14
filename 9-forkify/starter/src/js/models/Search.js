import axios from 'axios';

export default class Search{
    constructor(query){
        this.query = query;
    }

    async getResults(){
        const corsProxy = `https://cors-anywhere.herokuapp.com/`;
        const key = '7f72908fb836ed1ca1773619e86b1d5d';
        try{
            const result = axios(`${corsProxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            
        }
        catch(error){
            alert(error);
        }
    }
}



const search = 'https://www.food2fork.com/api/search';
const get = 'https://www.food2fork.com/api/get';
