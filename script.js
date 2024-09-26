let heart = document.querySelector("#like");

heart.addEventListener("click", function () {

    if (heart.src === "https://i2.pngimg.me/thumb/f/720/m2i8H7d3Z5b1b1b1.jpg") {
    heart.src = "https://w7.pngwing.com/pngs/387/843/png-transparent-favorite-heart-like-likes-love-loved-basic-ui-2-line-icon.png"; // Image for "unlike"
    } else {
    heart.src = "https://i2.pngimg.me/thumb/f/720/m2i8H7d3Z5b1b1b1.jpg"; // Image for "like"
    }
});

let accountNav = document.querySelector(".account-name");
accountNav.addEventListener("click", function () {
    window.location.href = "account.html";
})