const title = document.getElementsByTagName('h1')[0];
const likesAndDislike = document.getElementById("likes-and-dislikes");

const printFruit = () => {
    console.log("I don't like pears");
    return "I like apples";

}


title.textContent = "Lesson & Learning"
likesAndDislike.textContent = printFruit()
