// Write your code below:
const newheading=document.createElement('h3');
const headingtext=document.createTextNode("Buy high quality organic fruits online");
newheading.appendChild(headingText);
//newheading.style.fontWeight="italic";
console.log(newheading);
const div=document.getElementsByTagName('div');
const firstdiv=div[0];
//firstdiv.appendChild(newheading);
const para=document.createElement('p');
const paratext=document.createTextNode( "Total fruits: 4");
//para.appendChild(paratext);
console.log(para);
const divel=document.getElementsByTagName('div');
const seconddiv=divel[1];
seconddiv.appendChild(para);
const Fruit=document.querySelector('.fruits');
seconddiv.insertBefore(para,Fruit);


