const button = document.querySelectorAll("button");
const body = document.querySelector("body");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function (event) {
        if (event.target.id) {
        const h3Tag = document.createElement('h3');
        h3Tag.textContent=event.target.id;
        body.appendChild(h3Tag);
    }
    else if (event.target.id) {
        const h2Tag = document.createElement('h2');
        h2Tag.textContent=event.target.id;
        body.appendChild(h2Tag);
    } 
    })
}