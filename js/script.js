// TOKEN FÜR SPÄTER REMOTE DATENSPEICHERUNG  VJOV8Y8IUZO3FYNKTN886RO1F4GPQUZG86SP8SQP

async function init(){
    introAnimation();
}

function introAnimation(){
    document.getElementById("logo").classList.add("animation");
    document.getElementById("layer").classList.add("small");
    document.getElementById("content").classList.add("visible");
}
  


async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/Header.html und NabBar.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}
