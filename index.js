const title = document.getElementsByTagName('h1')[0];
const likesAndDislike = document.getElementById("likes-and-dislikes");
const likes = ['apples','apricots','damsons']

const printFruit = () => {
    console.log("I don't like pears");
    return `I like ${likes}`;
}


title.textContent = "Lesson & Learning"
likesAndDislike.textContent = printFruit()
