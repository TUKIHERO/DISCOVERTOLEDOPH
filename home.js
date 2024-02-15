var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}

document.getElementById('RandomPage').addEventListener('click', function() {
    var pages = [
        'history.htm',
        'festivals.htm',
        'places.htm',
        'mayors.htm',
        'barangay.htm',

    ];
    var randomIndex = Math.floor(Math.random() * pages.length);
    var randomPage = pages[randomIndex];
    window.location.href = randomPage;
});
document.getElementById('RandomQuiz').addEventListener('click', function() {
    var pages = [
        'quiz.htm',
        'quiz 2.htm',
        'quiz 3.htm',
        'quiz 4.htm',

    ];
    var randomIndex = Math.floor(Math.random() * pages.length);
    var randomPage = pages[randomIndex];
    window.location.href = randomPage;
});
