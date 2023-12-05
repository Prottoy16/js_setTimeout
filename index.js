// var text=prompt("Do you want to delete this item : ");
// var ele=document.createElement("h1");
// var name1;
// if(text== null || text==""){
//    name1="You did not enter your name";
// }
// else {
//     name1=text;
// }
// var textNode=document.createTextNode(name1);
// ele.appendChild(textNode);
// document.body.appendChild(ele);

var btn =document.querySelector("button");
var p=document.querySelector("p");
var text=document.createTextNode("successfully saved");

btn.addEventListener("click",function(){
    setTimeout(para,2000);
    function para(){
     var x=p.appendChild(text);
     
    }
});



