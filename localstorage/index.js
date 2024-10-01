const input=document.getElementById("inputfield");
const button=document.getElementById("button");
const username=document.getElementById("username");

button.addEventListener("click",()=>{
    const value=input.value;
    console.log(value);
    localStorage.setItem("name",value);
    location.reload();
})

window.addEventListener("load",()=>{
    const value=localStorage.getItem("name");
    username.innerText=value;
})