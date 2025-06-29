let page= 1 ;

let paginationEl=document.getElementById("pagination");

let paginationBtns = paginationEl.getElementsByTagName("button");
console.log("paginationBtns")
paginationBtns[0].addEventListener("click",goBack);
paginationBtns[1].addEventListener("click",goFoward);
function goBack(){
    console.log("Back")
    if(page=1){
    return;
    }
    page=page -1;
    updatePage();
}
function goFoward(){
console.log("goFoward")
page = page+1
}
function updatePage(){
    let span= paginationEl.getElementsByTagName("span")[0];
    span.innerText = page;
}
<img src="../images/If you see a matatu ,you know it’s time for adventure.jpeg" alt="Matatu image"></img>