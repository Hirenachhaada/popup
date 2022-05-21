let modal=document.getElementById("modal");
let close=document.getElementById("close");
let open=document.getElementById("open");

open.addEventListener ('click',()=>{
    modal.showModal();
})

close.addEventListener ('click',()=>{
    modal.close();
})  