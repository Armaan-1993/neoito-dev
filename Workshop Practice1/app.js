/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function quickLinksFunction() {
    let x = document.getElementById("section-6-contents-div-links1");
    let y = document.getElementById("section-6-topfunded-img");
    let z = document.getElementById("section-6-reources-img");
    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "block";
    } else {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    }
}

function TopFundedFunction() {
    let x = document.getElementById("section-6-contents-div-links2");
    let y = document.getElementById("section-6-topfunded-img");
    let z = document.getElementById("section-6-reources-img");
    if (x.style.display === "block") {
        x.style.display = "none";
        z.style.display = "block";
    } else {
        x.style.display = "block";
        z.style.display = "none";
    }
}

function ResourcesFunction() {
    var x = document.getElementById("section-6-contents-div-links3");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
