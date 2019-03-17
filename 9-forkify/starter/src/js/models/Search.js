import axios from 'axios';

export default class Search{
    constructor(query){
        this.query = query;
    }

    async getResults(){
        const corsProxy = `https://cors-anywhere.herokuapp.com/`;
        const key = '7f72908fb836ed1ca1773619e86b1d5d';
        try{
            /*const result = await axios(`${corsProxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);

            this.results = result.data.recipes;*/
            this.results = await new Promise((resolve, reject) => {
                let results = [];
                setTimeout(() => {
                    results = [
                        {   
                            recipe_id: '23456',
                            image_url:'img/test-1.jpg',
                            title: 'Pasta with Tomato ...',
                            publisher:'The Pioneer Woman'
                        },
                        {   
                            recipe_id: '23456',
                            image_url:'img/test-1.jpg',
                            title: 'Pasta with Tomato ...',
                            publisher:'The Pioneer Woman'
                        }
                    ];
                    
                    resolve(results);
                },2000);
                
               
            }); 
            
            
        }
        catch(error){
            alert(error);
        }
    }
}





const search = 'https://www.food2fork.com/api/search';
const get = 'https://www.food2fork.com/api/get';

