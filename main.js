window.addEventListener("hashchange", showPage, false);

function showPage() {
    const pages = document.getElementsByClassName('page');
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    const hash = window.location.hash.substr(1);
    document.getElementById(hash).style.display = 'block';
}

// Show default page when site loads
window.onload = function() {
    window.location.hash = "#home";
};
