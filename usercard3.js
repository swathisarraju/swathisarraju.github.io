let MSDhonioldinfo={
    imgurl:"https://images.indiafantasy.com/wp-content/uploads/20220724002346/i.jpeg",
    name: "MSD",
    description:"Cricketer"
} 

let displayobject;
let getRandomUser = function(){
    fetch("https://randomuser.me/api")
    .then(response => response.json()) //json is JS obj to print data
    .then(data => console.log(data)) 
    document.getElementById("MSD-img").src=displayobject.imgurl;
    document.getElementById("MSD-name").innerHTML=displayobject.name;
    document.getElementById("MSD-desc").innerHTML=displayobject.description;
}