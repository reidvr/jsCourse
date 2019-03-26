import axios from 'axios';
import {key, proxy} from '../config';
export default class Search{
    constructor(query){
        this.query = query;
    }

    async getResults(){

        try{
            // const result = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);

            // this.results = result.data.recipes;
            
            this.results = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    let results = [
                        {   
                            recipe_id: '46956',
                            image_url:'img/test-1.jpg',
                            title: 'Pasta with Tomato ...',
                            publisher:'The Pioneer Woman'
                        },
                        {   
                            recipe_id: '469562',
                            image_url:'img/test-1.jpg',
                            title: 'Pasta with Tomato ...',
                            publisher:'The Pioneer Woman'
                        },
                        {   
                            recipe_id: '46956',
                            image_url:'img/test-1.jpg',
                            title: 'Pasta with Tomato ...',
                            publisher:'The Pioneer Woman'
                        },
                        {   
                            recipe_id: '46956',
                            image_url:'img/test-1.jpg',
                            title: 'Pasta with Tomato ...',
                            publisher:'The Pioneer Woman'
                        },
                        {   
                            recipe_id: '46956',
                            image_url:'img/test-1.jpg',
                            title: 'Pasta with Tomato ...',
                            publisher:'The Pioneer Woman'
                        },
                        {   
                            recipe_id: '46956',
                            image_url:'img/test-1.jpg',
                            title: 'Pasta with Tomato ...',
                            publisher:'The Pioneer Woman'
                        },
                        {   
                            recipe_id: '46956',
                            image_url:'img/test-1.jpg',
                            title: 'Pasta with Tomato ...',
                            publisher:'The Pioneer Woman'
                        },
                        {   
                            recipe_id: '46956',
                            image_url:'img/test-1.jpg',
                            title: 'Pasta with Tomato ...',
                            publisher:'The Pioneer Woman'
                        },

                        {   
                            recipe_id: '46956',
                            image_url:'img/test-1.jpg',
                            title: 'Pasta with Tomato ...',
                            publisher:'The Pioneer Woman'
                        },
                        {   
                            recipe_id: '46956',
                            image_url:'img/test-1.jpg',
                            title: 'Pasta with Tomato ...',
                            publisher:'The Pioneer Woman'
                        },
                        {   
                            recipe_id: '46956',
                            image_url:'img/test-1.jpg',
                            title: 'Pasta with Tomato ...',
                            publisher:'The Pioneer Woman'
                        },
                        {   
                            recipe_id: '46956',
                            image_url:'img/test-1.jpg',
                            title: 'Pasta with Tomato ...',
                            publisher:'The Pioneer Woman'
                        },                        {   
                            recipe_id: '46956',
                            image_url:'img/test-1.jpg',
                            title: 'Pasta with Tomato ...',
                            publisher:'The Pioneer Woman'
                        },
                        {   
                            recipe_id: '46956',
                            image_url:'img/test-1.jpg',
                            title: 'Pasta with Tomato ...',
                            publisher:'The Pioneer Woman'
                        },
                        {   
                            recipe_id: '46956',
                            image_url:'img/test-1.jpg',
                            title: 'Pasta with Tomato ...',
                            publisher:'The Pioneer Woman'
                        },
                        {   
                            recipe_id: '46956',
                            image_url:'img/test-1.jpg',
                            title: 'Pasta with Tomato ...',
                            publisher:'The Pioneer Woman'
                        },
                        {   
                            recipe_id: '46956',
                            image_url:'img/test-1.jpg',
                            title: 'Pasta with Tomato ...',
                            publisher:'The Pioneer Woman'
                        },
                        {   
                            recipe_id: '46956',
                            image_url:'img/test-1.jpg',
                            title: 'Pasta with Tomato ...',
                            publisher:'The Pioneer Woman'
                        },
                        {   
                            recipe_id: '46956',
                            image_url:'img/test-1.jpg',
                            title: 'Pasta with Tomato ...',
                            publisher:'The Pioneer Woman'
                        },
                        {   
                            recipe_id: '46956',
                            image_url:'img/test-1.jpg',
                            title: 'Pasta with Tomato ...',
                            publisher:'The Pioneer Woman'
                        },

                        {   
                            recipe_id: '46956',
                            image_url:'img/test-1.jpg',
                            title: 'Pasta with Tomato ...',
                            publisher:'The Pioneer Woman'
                        },
                        {   
                            recipe_id: '46956',
                            image_url:'img/test-1.jpg',
                            title: 'Pasta with Tomato ...',
                            publisher:'The Pioneer Woman'
                        },
                        {   
                            recipe_id: '46956',
                            image_url:'img/test-1.jpg',
                            title: 'Pasta with Tomato ...',
                            publisher:'The Pioneer Woman'
                        },
                        {   
                            recipe_id: '46956',
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

