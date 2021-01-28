const btn = document.querySelector(".btn");
const anually = document.querySelectorAll(".hidde");
const monthly = document.querySelectorAll(".show");



btn.addEventListener("click", switchy);

function switchy(){
btn.classList.toggle("switched");
anually.forEach( para => {
  para.classList.toggle("show"); 
  para.classList.toggle("hidde"); 
});
monthly.forEach( para => {
    para.classList.toggle("show"); 
    para.classList.toggle("hidde"); 
  });

}
