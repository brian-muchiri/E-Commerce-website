const bar = document.getElementsByid("bar");
const nav = document.getElementsByid("navbar");


if (bar){
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    })

}
if(close){
    close.addEventListener("click",() =>{ 
        nav.classList.remove("active");
    })
}