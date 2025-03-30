const main = document.getElementById("main-btn");
const box = document.getElementsByTagName("div")[0];
const accept_btn = document.getElementById("acc-btn");
const cancel_btn = document.getElementById("canc-btn");

main.onclick = function (){
    box.style.display = "inline-block";
    main.style.display = "none";
}

accept_btn.onclick = function (){
    document.title = "Accepted";
    window.alert("Accepted");
    box.style.display = "none";
    main.style.display = "inline";
    setTimeout(function (){
        document.title = "Accept or Cancel";
    }, 2000);
}

cancel_btn.onclick = function (){
    document.title = "Canceled";
    window.alert("Canceled");
    box.style.display = "none";
    main.style.display = "inline";
    setTimeout(function (){
        document.title = "Accept or Cancel";
    }, 2000);
}