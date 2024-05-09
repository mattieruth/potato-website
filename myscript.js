function getRandomColor() {
    let red = Math.random()*255;
    let green = Math.random()*255;
    let blue = Math.random()*255;
    console.log(`rgb(${red}, ${green}, ${blue})`);
    return {red, green, blue};
}

function changeTitleColor() {
    let {red, green, blue} = getRandomColor();
    let title = document.getElementById('title');
    title.style.color = `rgb(${red}, ${green}, ${blue})`;
}

let interval = null;

function main() {
    interval = setInterval(changeTitleColor, 2000);
}