/* Script untuk Navbar Responsive */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


/* Script untuk Hover Gambar (Opsional, pastikan ID sesuai di HTML) */
let cards = document.querySelectorAll('.featured-image');
cards.forEach(img => {
    img.addEventListener('mouseover', function() {
        if (this.id === "aini") {
            this.src = "asset/img/laptop1.jpeg";
        }
    });
    img.addEventListener('mouseout', function() {
        if (this.id === "aini") {
            this.src = "asset/img/laptop.jpeg";
        }
    });
});