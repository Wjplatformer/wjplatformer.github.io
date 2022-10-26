function show_page(){
    page = document.getElementById('spin');
    spinner = document.getElementById('uwu');
    page.style.visibility = "hidden";
};

function timeout(){
    E = setTimeout(show_page, 1500);
};

window.onload = timeout();
