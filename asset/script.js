let card = document.querySelectorAll('.card');
for (cards of card) {
    cards.addEventListener('mouseover', function (event) {
        if (event.target.id === "aini") {
            event.target.setAttribute("src", "asset/img/laptop1.jpeg");
            return;
        } else if (event.target.id === "ragam") {
            event.target.setAttribute("src", "assets/img/lenovo1.jpeg");
            return;
        }
    });

    cards.addEventListener('mouseout', function (event) {
        if (event.target.id === "aini") {
            event.target.setAttribute("src", "assets/image/laptop.jpeg");
            return;
        }
        if (event.target.id === "ragam") {
            event.target.setAttribute("src", "assets/image/lenovo.jpeg");
            return;
        }
    });
}
