document.querySelector(".spin").addEventListener("click", function(){
    document.querySelector("body").classList.toggle("helicoptor");
});

document.querySelector(".dark").addEventListener("click", function(){
    document.querySelector("body").classList.toggle("darkmode");
    document.querySelector(".spin").innerHTML = "Click to die"
});