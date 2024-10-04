let names = ["Alex", "John", "Constantine", "Tyler", "Smith", "Smith"];
let colors = ["red", "green", "blue", "black", "yellow", "red"];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
let paragraphs = document.querySelectorAll('p');

for (let paragraph of paragraphs) {
    paragraph.textContent = getRandomElement(names);  
    paragraph.style.color = getRandomElement(colors); 
}