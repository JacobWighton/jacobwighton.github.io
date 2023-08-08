const pageTitle = document.querySelector(".page-title");
const pattern = /(?<=\bq=)([\w\+]+)/;
const currentUrl = window.location.href;
const searchTerm = pattern.exec(currentUrl)[0];
pageTitle.textContent = "Search: " + searchTerm;
