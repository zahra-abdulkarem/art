let navbar = document.querySelector(".navbar");
let barsIcon = document.querySelector("#bars-icon");
barsIcon.onclick = function(){
    barsIcon.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}


let moreDetails = document.querySelector(".more-details");
let moreDetailsButton = document.querySelector("#more-details-button");
moreDetailsButton.onclick = function(){
    moreDetails.classList.toggle("show");
    if(moreDetails.classList.contains("show") === true){
        moreDetailsButton.innerHTML = "see less";
    }else if(moreDetails.classList.contains("show") === false){
        moreDetailsButton.innerHTML = "see more";
    }else{
        moreDetailsButton.innerHTML = "see less";
    }
    
}



































// let navbar = document.querySelector(".navbar");
// document.querySelector("#menu-btn").onclick = () =>{
//     searchForm.classList.remove("active");
//     cartItem.classList.remove("active");
//     navbar.classList.toggle("active");
// }

// let searchForm = document.querySelector(".search-form");
// document.querySelector("#search-btn").onclick = () =>{
//     navbar.classList.remove("active");
//     cartItem.classList.remove("active");
//     searchForm.classList.toggle("active");
// }



// window.onscroll = () =>{
//     navbar.classList.remove("active");
//     searchForm.classList.remove("active");

// }