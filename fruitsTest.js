    // fruitsTest.js

    //fruit setup
//lists fruits
const fruits =
["apple", "Banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "bell pepper", "kiwi", "lemon", "mango", "nectarine", "orange", "papaya", "quince", "raspberry", "strawberry", "tangerine", "ugli fruit", "vanilla bean", "watermelon", "xigua", "yellow passion fruit", "zucchini"];

fruits.push("blueberry"); // Adds "Blueberry" to the end of the array
fruits[1] = "banana"; // Changes "Banana" to "banana" so that it matches the case of the other fruits
fruits.splice(8, 1); // Removes "bell pepper" from the array
//finds info on the fruits
const fruitStartLetter = "b";
const fruitCount = fruits.length;
const fruitaAmount = fruits.filter(fruit => fruit.startsWith(fruitStartLetter)).length;
//find fruits that start with a specific letter
function getFruitsStartingWith(letter) {
    return fruits.filter(fruit => fruit.startsWith(letter));
    }
//setup for fruit descriptions
const date ={
    type: "very sweet fruit",
    color: "brown",
    size: "small",
    taste: "sweet"
}
const elderberry ={
    type: "small dark purple fruit",
    color: "dark purple",
    size: "small",
    taste: "tart"
}
const fig ={
    type: "soft fruit with a thin skin",
    color: "purple or green",
    size: "small to medium",
    taste: "sweet"
}
const grape ={
    type: "small round fruit",
    color: "green, red, or purple",
    size: "small",
    taste: "sweet or tart"
}
const honeydew ={
    type: "sweet melon",
    color: "pale green",
    size: "medium to large",
    taste: "sweet"
}
const kiwi ={
    type: "small brown fruit with green flesh",
    color: "brown",
    size: "small",
    taste: "tart and sweet"
}
const lemon ={
    type: "citrus fruit",
    color: "yellow",
    size: "medium",
    taste: "sour"
}
const mango ={
    type: "tropical stone fruit",
    color: "orange or yellow",
    size: "medium to large",
    taste: "sweet and juicy"
}
const nectarine ={
    type: "smooth-skinned peach",
    color: "orange or red",
    size: "medium",
    taste: "sweet and juicy"
}
const orange ={
    type: "citrus fruit",
    color: "orange",
    size: "medium to large",
    taste: "sweet and tangy"
}   
const banana ={
    type: "long curved fruit",
    color: "yellow",
    size: "medium",
    taste: "sweet"
}
const apple ={
    type: "round fruit with red, green, or yellow skin",
    color: "red, green, or yellow",
    size: "medium",
    taste: "sweet or tart"
}
//console log to test results
console.log('total fruit count: ' + fruitCount); // Output: 8
console.log('fruits starting with ' + fruitStartLetter + ': ' + fruitaAmount); // Output varies
console.log(getFruitsStartingWith(fruitStartLetter)); // Output varies based on the letter provided
console.log('favorite fruit: ' + fruits[3]); // Output varies based on the index provided

    //functions for the fruits

    function addFruittoList(fruit) {
        fruits.push(fruit);
        console.log(fruit + ' has been added to the list.');
    }

    function removeFruitFromList(fruit) {
        const index = fruits.indexOf(fruit);
        if (index > -1) {
            fruits.splice(index, 1);
            console.log(fruit + ' has been removed from the list.');
        } else {
            console.log(fruit + ' is not in the list.');
        }
    }
    function getFruitDescription(fruit) {
        switch (fruit) {
            case 'date':
                return date;
            case 'elderberry':
                return elderberry;
            case 'fig':
                return fig;
            case 'grape':
                return grape;
            case 'honeydew':
                return honeydew;
            case 'kiwi':
                return kiwi;
            case 'lemon':
                return lemon;
            case 'mango':
                return mango;
            case 'nectarine':
                return nectarine;
            case 'orange':
                return orange;
            case 'banana':
                return banana;
            case 'apple':
                return apple;
            default:
                return "Fruit not found.";
        }
    }

    apple.color = "green"; // Changes the color of the apple to green
    delete banana.taste; // Removes the taste property from the banana object
// Example usage of the functions
addFruittoList("Starfruit");
removeFruitFromList("kiwi");
removeFruitFromList("strawberry");
getFruitsStartingWith(fruitStartLetter);

console.log('Updated fruit list number: ' + fruits.length);
console.log('fruit description: ' + JSON.stringify(getFruitDescription(getFruitsStartingWith(fruitStartLetter)[0]))); // Output varies based on the letter provided