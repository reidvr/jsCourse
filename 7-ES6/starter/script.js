
class TownElement{
    constructor(name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }

    age(){
        return new Date().getFullYear() - this.buildYear;
    }
}

class Park extends TownElement{
    constructor(name, buildYear, trees, area){
        super(name, buildYear);
        this.trees = trees;
        this.area = area;
    }

    treeDensity(){
        return this.trees/this.area;
    }
}

class Street extends TownElement{
    constructor(name, buildYear, length, classification = 'normal'){
        super(name, buildYear);
        this.length = length;
        this.classification = classification;
    }

    //What happens if people type 6 as classification?
    classifyStreet(){
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
    }
}

class Town{
    constructor(streets, parks){
        this.streets = streets;
        this.parks = parks;
    }

    averageParkAge(){
        let totalAge  = 0;
        this.parks.forEach(park => totalAge += park.age());
        return totalAge / this.parks.length;
    }

    totalStreetLength(){
        let total = 0;
        this.streets.forEach(street => total += street.length);
        return total;
    }

    averageStreetLength(){
        return this.totalStreetLength() / this.streets.length;
    }
}

parks = [
    new Park('Central Park', 1945, 500, 50),
    new Park('Top Park', 2000, 1245, 100),
    new Park('Blue Park', 1950, 4000, 250),
    new Park('Bottom Park', 1989, 5000, 200)
];

streets = [
     new Street('Bond St', 1871, 400, 'huge'),
     new Street('Reid St', 1921, 200),
     new Street('Smith Rd', 1943, 300, 'big'),
     new Street('Anzac Ave', 1982, 50, 'small')
];

town = new Town(streets, parks);

function parksReport(){
    console.log(`----- PARKS REPORT ------`);

    console.log(`Our ${town.parks.length} parks have an average age of ${town.averageParkAge()} years.`);            
    town.parks.forEach(park => {
        console.log(`${park.name} has a tree density of ${park.treeDensity()} per square km.`);
    });
}

console.log(`----- STREETS REPORT ------`);
console.log(`Our ${town.streets.length} streets have a total of ${town.totalStreetLength()} km, with an average of ${town.averageStreetLength()} km.`);
town.streets.forEach(street => {
    console.log(`${street.name}, built in ${street.buildYear}, is a ${street.classification} street.`);
});