// TOKEN FÜR SPÄTER REMOTE DATENSPEICHERUNG  VJOV8Y8IUZO3FYNKTN886RO1F4GPQUZG86SP8SQP
let goBackToPage = [];

async function init() {
    renderLogin();
    introAnimation();
    
}

   let login =  document.getElementById("content");
 
function introAnimation() {
    document.getElementById("logo").classList.add("animation");
    document.getElementById("layer").classList.add("small");
    document.getElementById("content").classList.add("visible");
}

function renderLogin(){
    login.innerHTML = loginPage();
}

async function startContent() {
    await includeHTML();
    await loadSummary('navsummary');

}

function callFramePageSinLogin(from) {
    const url = `../subpages/frame-page_sinLogin.html?from=${from}`;
    window.location = url;
}

async function startContentSinLogin() {
    await includeHTML();
    loadSinLogin();
}

function loadSinLogin() {
    goBackToPage.push(() => loadIntro());
    const params = new URLSearchParams(window.location.search);
    const from = params.get("from");

    document.getElementById("mainNav").classList.add("sinLogin");
    document.getElementById("headerIcons").classList.add("displaynone");

    switch (from) {
        case "privacy":
            loadPrivacy('navprivacy');
            break;
        case "legal":
            loadLegal('navlegal');
            break;
    }
}

function loadIntro() {
    window.location = `../index.html`;
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


