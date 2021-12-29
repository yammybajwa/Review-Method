const Review = [
    {
        id: 1,
        name: "Capriocn",
        img: "https://images.unsplash.com/photo-1551024739-78e9d60c45ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, velit dignissimos alias adipisci cupiditate expedita consequuntur voluptatibus maxime modi quasi eos. Minima, voluptates atque unde quasi fuga ullam officiis nisi.",
    },
    {
        id: 2,
        name: "Jhon",
        img: "https://images.unsplash.com/photo-1554230505-919a13968970?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        info: " Delectus, velit dignissimos alias adipisci cupiditate expedita consequuntur voluptatibus maxime modi quasi eos. Minima, voluptates atque unde quasi fuga ullam officiis nisi.",
    },
    {
        id: 3,
        name: "Baby Rexha",
        img: "https://images.unsplash.com/photo-1553860214-87b92d6c1e22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        info: "English Singeradipisci cupiditate expedita consequuntur voluptatibus maxime modi quasi eos. Minima, voluptates atque unde quasi fuga ullam officiis nisi."
    }
];
let item = 0;

window.addEventListener("DOMContentLoaded", function () {
    showPerson(item);
});
const Owner = document.getElementById("name");
const img = document.getElementById("img");
const info = document.getElementById("info");
const back = document.getElementById("back");
const next = document.getElementById("next");

function showPerson(person) {

    const newItem = Review[person];
    img.src = newItem.img
    Owner.textContent = newItem.name;
    info.textContent = newItem.info;
};
next.onclick = function () {
    item++;

    if (item > Review.length - 1) {
        item = 0;
    }
    showPerson(item);
};

back.onclick = function () {
    item--;

    showPerson(item);
}